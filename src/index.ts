import tempo, { type TempoDocument } from '@joggr/tempo'
import { dereference, validate } from '@readme/openapi-parser'
import i18nTexts from './i18n'
import type { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'

type APIDocument<T extends object = NonNullable<unknown>> =
  | OpenAPIV2.Document<T>
  | OpenAPIV3_1.Document<T>
  | OpenAPIV3.Document<T>
type Method =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'options'
  | 'head'
  | 'patch'
  | 'trace'

// Helper function: Get all methods from the path object
function getPathMethods(path: any): Method[] {
  return Object.keys(path).filter((key) =>
    [
      'get',
      'post',
      'put',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ].includes(key),
  ) as Method[]
}

function parseOpenAPIToJSON(openapiString: string): APIDocument | null {
  try {
    const openapiJSON = JSON.parse(openapiString)
    return openapiJSON
  } catch {
    return null
  }
}

// Tolerant JSON parsing - tries to fix common JSON format errors
function parseOpenAPIToJSONTolerant(openapiString: string): {
  success: boolean
  data?: APIDocument
  error?: string
  fixed?: boolean
} {
  // First try standard parsing
  try {
    const openapiJSON = JSON.parse(openapiString)
    return { success: true, data: openapiJSON, fixed: false }
  } catch (originalError) {
    // Try to fix common issues and parse again
    try {
      let fixedString = openapiString

      // Remove trailing commas before closing braces/brackets
      fixedString = fixedString.replaceAll(/,(\s*[}\]])/g, '$1')

      // Remove comments (// and /* */)
      fixedString = fixedString.replaceAll(/\/\/.*$/gm, '')
      fixedString = fixedString.replaceAll(/\/\*[\s\S]*?\*\//g, '')

      // Fix unescaped quotes in strings (simple heuristic)
      fixedString = fixedString.replaceAll(/(?<!\\)\\(?!["\\/bfnrt])/g, '\\\\')

      const openapiJSON = JSON.parse(fixedString)
      return { success: true, data: openapiJSON, fixed: true }
    } catch (fixError) {
      return {
        success: false,
        error: `JSON parsing failed. Original error: ${originalError}. After fix attempt: ${fixError}`,
      }
    }
  }
}

// Fix invalid references in OpenAPI document
function fixInvalidReferences(openapiString: string): {
  fixed: string
  hasChanges: boolean
} {
  let fixed = openapiString
  let hasChanges = false

  // First, find and remove all invalid $ref patterns
  // Look for the specific invalid reference
  const invalidRefPattern = /"\$ref":\s*"#\/components\/parameters\/file"/g
  if (fixed.includes('"$ref": "#/components/parameters/file"')) {
    fixed = fixed.replaceAll(invalidRefPattern, '')
    hasChanges = true

    // Clean up any trailing commas that might have been left
    fixed = fixed.replaceAll(/,(\s*[,}])/g, '$1')
    fixed = fixed.replaceAll(/,(\s*\})/g, '$1')
  }

  // Now fix file parameters that are missing required properties
  const fileParamPattern =
    /(\{\s*"name":\s*"file"[^}]*?"required":\s*true[^}]*)(\})/g
  fixed = fixed.replaceAll(
    fileParamPattern,
    (match, paramContent, closingBrace) => {
      if (
        !paramContent.includes('"in":') &&
        !paramContent.includes('"schema":')
      ) {
        hasChanges = true
        return `${paramContent}, "in": "formData", "schema": { "type": "string", "format": "binary" }${closingBrace}`
      }
      return match
    },
  )

  return { fixed, hasChanges }
}

function isOpenAPIV3(
  openapiJSON: APIDocument,
): openapiJSON is OpenAPIV3.Document | OpenAPIV3_1.Document {
  return Reflect.has(openapiJSON, 'components')
}

// 预处理 OpenAPI JSON，将 components.schemas 中key 包含 / 的转换为 _
function preprocessOpenAPIJSON(
  openapiString: string,
  tolerant = false,
): string {
  const parseResult = tolerant
    ? parseOpenAPIToJSONTolerant(openapiString)
    : {
        success: !!parseOpenAPIToJSON(openapiString),
        data: parseOpenAPIToJSON(openapiString),
      }

  if (!parseResult.success || !parseResult.data) {
    if (tolerant) {
      // In tolerant mode, log error but try to continue with original string
      console.warn(
        'JSON preprocessing failed, continuing with original content',
      )
      return openapiString
    } else {
      throw new Error('Invalid JSON')
    }
  }

  const openapiJSON = parseResult.data
  const schemas = isOpenAPIV3(openapiJSON)
    ? openapiJSON?.components?.schemas
    : openapiJSON?.definitions

  if (schemas) {
    const replaceMap = new Map<string, string>()
    Object.keys(schemas).forEach((key) => {
      if (key.includes('/')) {
        const sourceKey = key
        const newKey = key.replace('/', '_')
        replaceMap.set(sourceKey, newKey)
      }
    })

    for (const [sourceKey, newKey] of replaceMap) {
      openapiString = openapiString.replaceAll(sourceKey, newKey)
    }
    return openapiString
  }

  return openapiString
}

// Helper function: Get friendly name for parameter type
function getParameterTypeName(parameter: any, texts: any): string {
  // OpenAPI 3.x: 使用 parameter.schema
  if (parameter.schema) {
    const schema = parameter.schema
    if (schema.type === 'array') {
      const itemType = schema.items?.type || texts.unknown || 'unknown'
      // Handle case where itemType is an array
      if (Array.isArray(itemType)) {
        return `${itemType.join(' | ')}[]`
      }
      return `${itemType}[]`
    }

    // Handle case where schema.type is an array
    if (Array.isArray(schema.type)) {
      return schema.type.join(' | ')
    }

    return schema.type || texts.unknown || 'unknown'
  }

  // Swagger 2.0: 直接使用 parameter.type
  if (parameter.type) {
    if (parameter.type === 'array') {
      const itemType = parameter.items?.type || texts.unknown || 'unknown'
      if (Array.isArray(itemType)) {
        return `${itemType.join(' | ')}[]`
      }
      return `${itemType}[]`
    }
    if (Array.isArray(parameter.type)) {
      return parameter.type.join(' | ')
    }
    return parameter.type
  }

  return texts.unknown || 'unknown'
}

// Helper function: Resolve $ref references
function resolveRef(ref: string, openapiDoc: any): any {
  if (!ref || !ref.startsWith('#/')) {
    return null
  }

  const path = ref.slice(2).split('/')
  let current = openapiDoc

  for (const key of path) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return null
    }
  }

  return current
}

interface NestedSection {
  title: string
  table: string[][]
}

// Helper function: Format schema properties with nested structure support
function formatSchemaProperties(
  properties: any,
  required: string[] = [],
  texts: any,
  openapiDoc: any,
  depth: number = 0,
  maxDepth: number = 10,
  visited: Set<string> = new Set(),
): { table: string[][]; nested: NestedSection[] } {
  // Depth limit check
  if (depth >= maxDepth) {
    return {
      table: [[texts.name, texts.type, texts.required, texts.description]],
      nested: [],
    }
  }

  if (!properties) {
    return {
      table: [[texts.noProperties]],
      nested: [],
    }
  }

  const headers = [texts.name, texts.type, texts.required, texts.description]
  const tableRows: string[][] = [headers]
  const nestedSections: NestedSection[] = []

  const addNestedSection = (
    title: string,
    nestedProperties: any,
    nestedRequired: string[] = [],
    visitKey: string,
  ) => {
    if (visited.has(visitKey)) return
    visited.add(visitKey)

    const nested = formatSchemaProperties(
      nestedProperties,
      nestedRequired,
      texts,
      openapiDoc,
      depth + 1,
      maxDepth,
      visited,
    )

    if (nested.table.length > 1) {
      nestedSections.push({ title, table: nested.table })
    }
    if (nested.nested.length > 0) {
      nestedSections.push(...nested.nested)
    }

    visited.delete(visitKey)
  }

  Object.entries(properties).forEach(([name, prop]: [string, any]) => {
    const isRequired = required.includes(name) ? texts.yes : texts.no
    let type = texts.unknown
    let description = texts.noDescription

    const resolvedProp = prop.$ref ? resolveRef(prop.$ref, openapiDoc) : null
    const effectiveProp = resolvedProp || prop

    const schemaType = effectiveProp?.type ?? prop.type
    if (schemaType) {
      type = Array.isArray(schemaType) ? schemaType.join(' | ') : schemaType
    }
    description =
      effectiveProp?.description ?? prop.description ?? texts.noDescription

    const visitKeyBase = prop.$ref || `${name}:${depth}`

    if (schemaType === 'array' || effectiveProp?.items || prop.items) {
      const itemsSchema = effectiveProp?.items || prop.items
      if (itemsSchema) {
        const resolvedItems = itemsSchema.$ref
          ? resolveRef(itemsSchema.$ref, openapiDoc) || itemsSchema
          : itemsSchema

        let itemType =
          (Array.isArray(resolvedItems?.type)
            ? resolvedItems?.type.join(' | ')
            : resolvedItems?.type) ||
          resolvedItems?.title ||
          texts.unknown

        if (!itemType && resolvedItems?.properties) {
          itemType = texts.object || 'object'
        }

        type = `${itemType}[]`

        const visitKey = itemsSchema.$ref || `${name}[]:${depth}`
        if (
          resolvedItems &&
          typeof resolvedItems === 'object' &&
          resolvedItems.properties &&
          Object.keys(resolvedItems.properties).length > 0
        ) {
          addNestedSection(
            `\n**${name} 数组项结构:**`,
            resolvedItems.properties || {},
            resolvedItems.required || [],
            visitKey,
          )
        }
      }
    } else if (
      effectiveProp &&
      typeof effectiveProp === 'object' &&
      (effectiveProp.properties || prop.properties)
    ) {
      const objectProperties = effectiveProp.properties || prop.properties
      if (objectProperties && Object.keys(objectProperties).length > 0) {
        addNestedSection(
          `\n**${name} 对象结构:**`,
          objectProperties,
          effectiveProp.required || prop.required || [],
          visitKeyBase,
        )
      }
    }

    tableRows.push([
      name,
      type,
      isRequired,
      description != null ? String(description) : texts.noDescription,
    ])
  })

  return { table: tableRows, nested: nestedSections }
}

// Helper function: Format schema description with nested structure support
function formatSchema(
  schema: any,
  texts: any,
  openapiDoc: any,
  depth: number = 0,
): string {
  if (!schema) return texts.none

  // Resolve $ref if present
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, openapiDoc)
    if (resolved) {
      return formatSchema(resolved, texts, openapiDoc, depth)
    }
  }

  if (schema.type === 'object' && schema.properties) {
    const md = tempo()
    md.paragraph(`**${texts.properties}:**`)

    const { table, nested } = formatSchemaProperties(
      schema.properties,
      schema.required || [],
      texts,
      openapiDoc,
      depth,
    )

    md.table(table)

    // Add nested sections
    nested.forEach((section) => {
      md.paragraph(section.title)
      md.table(section.table)
    })

    return md.toString()
  } else if (schema.type === 'array' && schema.items) {
    if (schema.items.$ref) {
      const resolved = resolveRef(schema.items.$ref, openapiDoc)
      const itemType = resolved?.title || resolved?.type || texts.unknown
      return `${texts.array}, ${texts.itemType}: ${itemType}`
    }
    return `${texts.array}, ${texts.itemType}: ${schema.items.type || texts.unknown}`
  } else if (schema.type) {
    // Handle case where schema.type is an array (OpenAPI 3.1)
    if (Array.isArray(schema.type)) {
      return schema.type.join(' | ')
    }
    return schema.type
  }

  return texts.unknownType
}

// Check if response has schema
function hasResponseSchema(response: any): boolean {
  // Swagger 2.0: 检查 response.schema
  if (response.schema) return true

  // OpenAPI 3.x: 检查 response.content 中是否有 schema
  if (response.content) {
    for (const contentType of Object.keys(response.content)) {
      if (response.content[contentType].schema) return true
    }
  }

  return false
}

// Match $ref that do not contain the prefix
const MissingPrefixRefRegex = /("\$ref":\s*)"(?!#)(.*?)"/g

// Options for openapi2markdown function
export interface OpenAPI2MarkdownOptions {
  /**
   * Language code for internationalization
   * @default 'en'
   */
  lang?: 'en' | 'zhCN' | (string & {})

  /**
   * Enable tolerant mode to handle malformed JSON/OpenAPI specs
   * When enabled, the parser will try to process as much content as possible
   * even when encountering format errors or validation failures
   * @default true
   */
  tolerant?: boolean
}

export async function openapi2markdown(
  openapiString: Parameters<typeof dereference>[0],
  options: OpenAPI2MarkdownOptions = {},
): Promise<TempoDocument> {
  const tolerant = options.tolerant ?? true

  try {
    // Get language texts
    const lang = options.lang || 'en'
    const texts = i18nTexts[lang] || i18nTexts.en

    let sourceJSON: APIDocument | string | null = null

    if (typeof openapiString === 'string' && openapiString.startsWith('{')) {
      const replacedText = openapiString.replaceAll(
        MissingPrefixRefRegex,
        '$1"#/components/schemas/$2"',
      )

      // Tolerant JSON parsing
      if (tolerant) {
        // First apply reference fixes
        const refFixResult = fixInvalidReferences(replacedText)
        if (refFixResult.hasChanges) {
          console.warn('Fixed invalid references in OpenAPI document')
        }

        const parseResult = parseOpenAPIToJSONTolerant(
          preprocessOpenAPIJSON(refFixResult.fixed, true),
        )
        if (!parseResult.success) {
          console.warn(
            'JSON parsing failed in tolerant mode:',
            parseResult.error,
          )
          throw new Error('Unable to parse JSON even in tolerant mode')
        }
        if (parseResult.fixed) {
          console.warn('JSON was automatically fixed during parsing')
        }
        sourceJSON = parseResult.data!
      } else {
        sourceJSON = JSON.parse(preprocessOpenAPIJSON(replacedText))
      }
    } else {
      sourceJSON = openapiString
    }

    if (!sourceJSON) {
      throw new Error('Invalid Input')
    }

    // Tolerant validation
    let parsed: any

    if (tolerant) {
      try {
        await validate(sourceJSON)
      } catch (validationError) {
        console.warn(
          'OpenAPI validation failed, continuing in tolerant mode:',
          validationError,
        )
      }

      try {
        parsed = await dereference(sourceJSON)
      } catch (dereferenceError) {
        console.warn(
          'Reference resolution failed, using original document:',
          dereferenceError,
        )
        parsed = sourceJSON
      }
    } else {
      await validate(sourceJSON)
      parsed = await dereference(sourceJSON)
    }

    const openapiDoc = typeof sourceJSON === 'string' ? parsed : sourceJSON

    const md = tempo()

    // Add document title and description
    if (parsed.info) {
      md.h1(parsed.info.title || texts.apiDocumentation)
      if (parsed.info.description) {
        md.paragraph(parsed.info.description)
      }
      if (parsed.info.version) {
        md.paragraph(`**${texts.version}:** ${parsed.info.version}`)
      }
    }

    // Add server information (handling OpenAPI v3 specific servers property)
    const servers = (parsed as any).servers
    if (servers && Array.isArray(servers) && servers.length > 0) {
      md.h2(texts.servers)

      for (const server of servers) {
        md.paragraph(`- **${texts.url}:** ${server.url}`)
        if (server.description) {
          md.paragraph(`  **${texts.description}:** ${server.description}`)
        }
      }
    }

    // Organize API endpoints by tag
    const pathsByTag: Record<
      string,
      { path: string; method: Method; operation: any }[]
    > = {}

    // Collect all paths and group by tag
    for (const [path, pathItem] of Object.entries(parsed.paths || {})) {
      const methods = getPathMethods(pathItem as any)

      for (const method of methods) {
        // @ts-expect-error TODO: pathItem type should be fixed
        const operation = pathItem[method]
        if (!operation) continue

        const tags = operation.tags || ['Default']

        for (const tag of tags) {
          if (!pathsByTag[tag]) {
            pathsByTag[tag] = []
          }

          pathsByTag[tag].push({
            path,
            method,
            operation,
          })
        }
      }
    }

    // Process tags and paths
    // If there are global tags defined, use them
    if (parsed.tags && parsed.tags.length > 0) {
      for (const tag of parsed.tags) {
        const tagName = tag.name
        const tagDescription = tag.description

        md.h2(tagName)

        if (tagDescription) {
          md.paragraph(tagDescription)
        }

        const endpoints = pathsByTag[tagName] || []

        for (const { path, method, operation } of endpoints) {
          // Endpoint title
          const title = operation.description || operation.summary || ''
          md.h3(title)

          // Description - only output if different from title
          if (
            operation.description &&
            operation.summary &&
            operation.description !== operation.summary
          ) {
            md.paragraph(operation.description)
          }

          md.codeBlock(`${method.toUpperCase()} ${path}`, 'http')

          // Parameters
          const parameters = operation.parameters || []
          if (parameters.length > 0) {
            // Check if single body parameter - simplify format
            if (parameters.length === 1 && parameters[0].in === 'body') {
              const bodyParam = parameters[0]
              const description =
                bodyParam.description || bodyParam.schema?.title || texts.object
              md.paragraph(`**${texts.requestBody}:** ${description}`)
            } else {
              // Regular parameters table
              md.h4(texts.parameters)

              // Create parameters table
              const paramHeaders = [
                texts.name,
                texts.location,
                texts.type,
                texts.required,
                texts.description,
              ]
              const paramRows = parameters.map((param: any) => {
                const name = param.name || 'unknown'
                const location = param.in || 'unknown'
                const type = getParameterTypeName(param, texts)
                const required = param.required
                  ? texts.yes || 'yes'
                  : texts.no || 'no'
                const description =
                  param.description || texts.noDescription || 'No description'

                return [name, location, type, required, description]
              })

              md.table([paramHeaders, ...paramRows])
            }
          }

          // Request body
          if (operation.requestBody) {
            md.h4(texts.requestBody)

            const contentTypes = Object.keys(
              operation.requestBody.content || {},
            )

            for (const contentType of contentTypes) {
              const content = operation.requestBody.content[contentType]
              const schema = content.schema

              md.paragraph(`**${texts.contentType}:** \`${contentType}\``)

              if (operation.requestBody.description) {
                md.paragraph(
                  `**${texts.description}:** ${operation.requestBody.description}`,
                )
              }

              if (operation.requestBody.required) {
                md.paragraph(`**${texts.required}:** ${texts.yes}`)
              }

              if (schema) {
                if (schema.title) {
                  md.paragraph(`**${texts.schema}:** ${schema.title}`)
                }

                md.paragraph(formatSchema(schema, texts, openapiDoc))
              }
            }
          }

          // Responses
          if (
            operation.responses &&
            Object.keys(operation.responses).length > 0
          ) {
            // Filter responses with schema
            const responsesWithSchema = Object.entries(
              operation.responses,
            ).filter((entry) => hasResponseSchema(entry[1] as any))

            // Only render if there are responses with schema
            if (responsesWithSchema.length > 0) {
              md.h4(texts.responses)

              for (const [statusCode, responseObj] of responsesWithSchema) {
                const response = responseObj as any

                // Status code and description in compact format
                if (response.description) {
                  md.paragraph(`**${statusCode}** - ${response.description}`)
                } else {
                  md.paragraph(`**${statusCode}**`)
                }

                // OpenAPI 3.x: 使用 response.content
                if (response.content) {
                  const contentTypes = Object.keys(response.content)

                  for (const contentType of contentTypes) {
                    const content = response.content[contentType]
                    const schema = content.schema

                    md.paragraph(`**${texts.contentType}:** \`${contentType}\``)

                    if (schema) {
                      if (schema.title) {
                        md.paragraph(`**${texts.schema}:** ${schema.title}`)
                      }

                      md.paragraph(formatSchema(schema, texts, openapiDoc))
                    }
                  }
                }
                // Swagger 2.0: 直接使用 response.schema
                else if (response.schema) {
                  if (response.schema.title) {
                    md.paragraph(
                      `**${texts.schema}:** ${response.schema.title}`,
                    )
                  }
                  md.paragraph(formatSchema(response.schema, texts, openapiDoc))
                }
              }
            }
          }
        }
      }
    } else {
      // If no global tags, process all collected tags from operations
      for (const tagName of Object.keys(pathsByTag)) {
        md.h2(tagName)

        const endpoints = pathsByTag[tagName] || []

        for (const { path, method, operation } of endpoints) {
          // Endpoint title
          const title = operation.description || operation.summary || ''
          md.h3(title)

          // Description - only output if different from title
          if (
            operation.description &&
            operation.summary &&
            operation.description !== operation.summary
          ) {
            md.paragraph(operation.description)
          }

          md.codeBlock(`${method.toUpperCase()} ${path}`, 'http')

          // Parameters
          const parameters = operation.parameters || []
          if (parameters.length > 0) {
            // Check if single body parameter - simplify format
            if (parameters.length === 1 && parameters[0].in === 'body') {
              const bodyParam = parameters[0]
              const description =
                bodyParam.description || bodyParam.schema?.title || texts.object
              md.paragraph(`**${texts.requestBody}:** ${description}`)
            } else {
              // Regular parameters table
              md.h4(texts.parameters)

              // Create parameters table
              const paramHeaders = [
                texts.name,
                texts.location,
                texts.type,
                texts.required,
                texts.description,
              ]
              const paramRows = parameters.map((param: any) => {
                const name = param.name || 'unknown'
                const location = param.in || 'unknown'
                const type = getParameterTypeName(param, texts)
                const required = param.required
                  ? texts.yes || 'yes'
                  : texts.no || 'no'
                const description =
                  param.description || texts.noDescription || 'No description'

                return [name, location, type, required, description]
              })

              md.table([paramHeaders, ...paramRows])
            }
          }

          // Request body
          if (operation.requestBody) {
            md.h4(texts.requestBody)

            const contentTypes = Object.keys(
              operation.requestBody.content || {},
            )

            for (const contentType of contentTypes) {
              const content = operation.requestBody.content[contentType]
              const schema = content.schema

              md.paragraph(`**${texts.contentType}:** \`${contentType}\``)

              if (operation.requestBody.description) {
                md.paragraph(
                  `**${texts.description}:** ${operation.requestBody.description}`,
                )
              }

              if (operation.requestBody.required) {
                md.paragraph(`**${texts.required}:** ${texts.yes}`)
              }

              if (schema) {
                if (schema.title) {
                  md.paragraph(`**${texts.schema}:** ${schema.title}`)
                }

                md.paragraph(formatSchema(schema, texts, openapiDoc))
              }
            }
          }

          // Responses
          if (
            operation.responses &&
            Object.keys(operation.responses).length > 0
          ) {
            // Filter responses with schema
            const responsesWithSchema = Object.entries(
              operation.responses,
            ).filter((entry) => hasResponseSchema(entry[1] as any))

            // Only render if there are responses with schema
            if (responsesWithSchema.length > 0) {
              md.h4(texts.responses)

              for (const [statusCode, responseObj] of responsesWithSchema) {
                const response = responseObj as any

                // Status code and description in compact format
                if (response.description) {
                  md.paragraph(`**${statusCode}** - ${response.description}`)
                } else {
                  md.paragraph(`**${statusCode}**`)
                }

                // OpenAPI 3.x: 使用 response.content
                if (response.content) {
                  const contentTypes = Object.keys(response.content)

                  for (const contentType of contentTypes) {
                    const content = response.content[contentType]
                    const schema = content.schema

                    md.paragraph(`**${texts.contentType}:** \`${contentType}\``)

                    if (schema) {
                      if (schema.title) {
                        md.paragraph(`**${texts.schema}:** ${schema.title}`)
                      }

                      md.paragraph(formatSchema(schema, texts, openapiDoc))
                    }
                  }
                }
                // Swagger 2.0: 直接使用 response.schema
                else if (response.schema) {
                  if (response.schema.title) {
                    md.paragraph(
                      `**${texts.schema}:** ${response.schema.title}`,
                    )
                  }
                  md.paragraph(formatSchema(response.schema, texts, openapiDoc))
                }
              }
            }
          }
        }
      }
    }

    return md
  } catch (error) {
    if (tolerant) {
      // In tolerant mode, try to provide partial results or meaningful error message
      console.error('Error in openapi2markdown (tolerant mode):', error)
      const md = tempo()
      const texts = i18nTexts[options.lang || 'en'] || i18nTexts.en
      md.h1(texts.apiDocumentation)
      md.paragraph(
        `⚠️ Document could not be fully processed due to format errors. Showing partial content.`,
      )
      md.paragraph(`Error: ${error}`)
      return md
    } else {
      // Standard mode - throw error as before for backward compatibility
      throw new Error(error as string)
    }
  }
}
