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

function isOpenAPIV3(
  openapiJSON: APIDocument,
): openapiJSON is OpenAPIV3.Document | OpenAPIV3_1.Document {
  return Reflect.has(openapiJSON, 'components')
}

// 预处理 OpenAPI JSON，将 components.schemas 中key 包含 / 的转换为 _
function preprocessOpenAPIJSON(openapiString: string): string {
  const openapiJSON = parseOpenAPIToJSON(openapiString)

  if (!openapiJSON) {
    throw new Error('Invalid JSON')
  }

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
  if (!parameter.schema) return texts.unknown

  const schema = parameter.schema
  if (schema.type === 'array') {
    const itemType = schema.items?.type || texts.unknown
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

  return schema.type || texts.unknown
}

// Helper function: Format schema properties
function formatSchemaProperties(
  properties: any,
  required: string[] = [],
  texts: any,
): string[][] {
  if (!properties) return [[texts.noProperties]]

  // Table headers
  const headers = [texts.name, texts.type, texts.required, texts.description]

  // Table data rows
  const rows = Object.entries(properties).map(([name, prop]: [string, any]) => {
    const isRequired = required.includes(name) ? texts.yes : texts.no

    let type = texts.unknown
    if (prop.type) {
      // Handle case where prop.type is an array
      if (Array.isArray(prop.type)) {
        type = prop.type.join(' | ')
      } else {
        type = prop.type
      }
    } else if (prop.items) {
      // Handle case where prop.items.type is an array
      if (Array.isArray(prop.items.type)) {
        type = `${prop.items.type.join(' | ')}[]`
      } else {
        type = `${prop.items.type || texts.unknown}[]`
      }
    }

    const description = prop.description || texts.noDescription

    return [name, type, isRequired, description]
  })

  return [headers, ...rows]
}

// Helper function: Format schema description
function formatSchema(schema: any, texts: any): string {
  if (!schema) return texts.none

  if (schema.type === 'object' && schema.properties) {
    const md = tempo()

    md.paragraph(`**${texts.properties}:**`)
    md.table(formatSchemaProperties(schema.properties, schema.required, texts))

    return md.toString()
  } else if (schema.type === 'array' && schema.items) {
    return `${texts.array}, ${texts.itemType}: ${schema.items.type || texts.unknown}`
  } else if (schema.type) {
    // Handle case where schema.type is an array (OpenAPI 3.1)
    if (Array.isArray(schema.type)) {
      return schema.type.join(' | ') // Return types joined with '|' to indicate union type
    }
    return schema.type
  }

  return texts.unknownType
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
}

export async function openapi2markdown(
  openapiString: Parameters<typeof dereference>[0],
  options: OpenAPI2MarkdownOptions = {},
): Promise<TempoDocument> {
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

      sourceJSON = JSON.parse(preprocessOpenAPIJSON(replacedText))
    } else {
      sourceJSON = openapiString
    }

    if (!sourceJSON) {
      throw new Error('Invalid Input')
    }

    await validate(sourceJSON)
    const parsed = await dereference(sourceJSON)
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
      const methods = getPathMethods(pathItem)

      for (const method of methods) {
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
    for (const tag of parsed.tags || []) {
      const tagName = tag.name
      const tagDescription = tag.description

      md.h2(tagName)

      if (tagDescription) {
        md.paragraph(tagDescription)
      }

      const endpoints = pathsByTag[tagName] || []

      for (const { path, method, operation } of endpoints) {
        // Endpoint title
        md.h3(operation.description || operation.summary || '')

        // Description
        if (operation.description) {
          md.paragraph(operation.description)
        } else if (operation.summary) {
          md.paragraph(operation.summary)
        }

        md.codeBlock(`${method.toUpperCase()} ${path}`, 'http')

        // Operation ID
        if (operation.operationId) {
          md.paragraph(`**${texts.operationId}:** \`${operation.operationId}\``)
        }

        // Parameters
        const parameters = operation.parameters || []
        if (parameters.length > 0) {
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
            const name = param.name
            const location = param.in
            const type = getParameterTypeName(param, texts)
            const required = param.required ? texts.yes : texts.no
            const description = param.description || texts.noDescription

            return [name, location, type, required, description]
          })

          md.table([paramHeaders, ...paramRows])
        }

        // Request body
        if (operation.requestBody) {
          md.h4(texts.requestBody)

          const contentTypes = Object.keys(operation.requestBody.content || {})

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

              md.paragraph(formatSchema(schema, texts))
            }
          }
        }

        // Responses
        if (
          operation.responses &&
          Object.keys(operation.responses).length > 0
        ) {
          md.h4(texts.responses)

          for (const [statusCode, responseObj] of Object.entries(
            operation.responses,
          )) {
            const response = responseObj as any
            if (!response.content) continue

            md.paragraph(`**${texts.statusCode}:** ${statusCode}`)

            if (response.description) {
              md.paragraph(`**${texts.description}:** ${response.description}`)
            }

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

                  md.paragraph(formatSchema(schema, texts))
                }
              }
            }
          }
        }
      }
    }

    return md
  } catch (error) {
    throw new Error(error as string)
  }
}
