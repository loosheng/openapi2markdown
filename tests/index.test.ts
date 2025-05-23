import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import { beforeAll, describe, expect, it } from 'vitest'
import { openapi2markdown } from '../src'

// Ensure snapshots directory exists
beforeAll(() => {
  const snapshotsDir = path.join(__dirname, '__snapshots__')
  if (!fs.existsSync(snapshotsDir)) {
    fs.mkdirSync(snapshotsDir, { recursive: true })
  }

  // Create i18n directory for language tests
  const i18nDir = path.join(__dirname, '__snapshots__', 'i18n')
  if (!fs.existsSync(i18nDir)) {
    fs.mkdirSync(i18nDir, { recursive: true })
  }
})

describe.each([
  ['Swagger 2.0', 'swagger', '2.0'],
  ['OpenAPI 3.0', 'openapi', '3.0'],
  ['OpenAPI 3.1', 'openapi', '3.1'],
])('%s', (specName, _specification, version) => {
  // Ensure version directory exists
  beforeAll(() => {
    const versionDir = path.join(import.meta.dirname, '__snapshots__', specName)
    if (!fs.existsSync(versionDir)) {
      fs.mkdirSync(versionDir, { recursive: true })
    }

    const jsonDir = path.join(versionDir, 'json')
    if (!fs.existsSync(jsonDir)) {
      fs.mkdirSync(jsonDir, { recursive: true })
    }

    const yamlDir = path.join(versionDir, 'yaml')
    if (!fs.existsSync(yamlDir)) {
      fs.mkdirSync(yamlDir, { recursive: true })
    }
  })

  describe('JSON', () => {
    it.each(
      fg
        .sync([
          path.join(
            __dirname,
            `../node_modules/@readme/oas-examples/${version}/json/*.json`,
          ),
        ])
        .map((file) => [path.basename(file), file]),
    )('should convert `%s` to markdown', async (filename, file) => {
      const result = (await openapi2markdown(file)).toString()
      const snapshotPath = path.join(
        __dirname,
        '__snapshots__',
        specName,
        'json',
        `${filename}.md`,
      )
      await expect(result).toMatchFileSnapshot(snapshotPath)
    })
  })

  describe('YAML', () => {
    it.each(
      fg
        .sync([
          path.join(
            import.meta.dirname,
            `../node_modules/@readme/oas-examples/${version}/yaml/*.yaml`,
          ),
        ])
        .map((file) => [path.basename(file), file]),
    )('should convert `%s` to markdown', async (filename, file) => {
      const result = (await openapi2markdown(file)).toString()
      const snapshotPath = path.join(
        __dirname,
        '__snapshots__',
        specName,
        'yaml',
        `${filename}.md`,
      )
      await expect(result).toMatchFileSnapshot(snapshotPath)
    })
  })
})

// Test internationalization
describe('Internationalization', () => {
  const petStoreFile = fs.readFileSync(
    path.join(
      import.meta.dirname,
      '../node_modules/@readme/oas-examples/3.0/json/petstore.json',
    ),
    'utf-8',
  )

  it('should use English by default', async () => {
    const result = (await openapi2markdown(petStoreFile)).toString()
    const snapshotPath = path.join(
      __dirname,
      '__snapshots__',
      'i18n',
      'petstore-en.md',
    )
    await expect(result).toMatchFileSnapshot(snapshotPath)
  })

  it('should use Chinese when lang=zh', async () => {
    const result = (
      await openapi2markdown(petStoreFile, { lang: 'zhCN' })
    ).toString()
    const snapshotPath = path.join(
      __dirname,
      '__snapshots__',
      'i18n',
      'petstore-zh.md',
    )
    await expect(result).toMatchFileSnapshot(snapshotPath)
  })

  it('should fallback to English for unsupported languages', async () => {
    const result = (
      await openapi2markdown(petStoreFile, { lang: 'fr' })
    ).toString()
    const snapshotPath = path.join(
      __dirname,
      '__snapshots__',
      'i18n',
      'petstore-fallback.md',
    )
    await expect(result).toMatchFileSnapshot(snapshotPath)
  })
})

// describe('Knife4j Example', () => {
//   const knife4jFile = fs.readFileSync(
//     path.join(import.meta.dirname, './case/knife4j-example.json'),
//     'utf-8',
//   )

//   it('should convert Knife4j example to markdown', async () => {
//     const result = (await openapi2markdown(knife4jFile)).toString()
//     const snapshotPath = path.join(
//       __dirname,
//       '__snapshots__',
//       'knife4j-example.md',
//     )
//     await expect(result).toMatchFileSnapshot(snapshotPath)
//   })
// })

describe('Case 1', () => {
  const case1File = fs.readFileSync(
    path.join(import.meta.dirname, './case/special-symbols-ref-path-case.json'),
    'utf-8',
  )
  it('should convert case 1 to markdown', async () => {
    const result = (await openapi2markdown(case1File)).toString()
    const snapshotPath = path.join(
      __dirname,
      '__snapshots__',
      'special-symbols-ref-path-case.md',
    )
    await expect(result).toMatchFileSnapshot(snapshotPath)
  })
})
