# openapi2markdown [![npm](https://img.shields.io/npm/v/openapi2markdown.svg)](https://npmjs.com/package/openapi2markdown)

[![Unit Test](https://github.com/loosheng/openapi2markdown/actions/workflows/unit-test.yml/badge.svg)](https://github.com/loosheng/openapi2markdown/actions/workflows/unit-test.yml)

Convert OpenAPI to Markdown

## How to use

```ts
import { openapi2markdown } from 'openapi2markdown'

// Basic usage with tolerant mode (default)
const markdown = await openapi2markdown(openapi)

// With internationalization (i18n) support
const markdownZh = await openapi2markdown(openapi, { lang: 'zhCN' })

// Strict mode (disable error tolerance)
const strictMarkdown = await openapi2markdown(openapi, { tolerant: false })

// output markdown string
console.log(markdown.toString())

// output markdown json
console.log(markdown.toJSON())
```

## Features

- ✅ **Tolerant Parsing**: Automatically handles malformed OpenAPI documents by default
- ✅ **Error Recovery**: Fixes common JSON format issues (trailing commas, invalid references, etc.)
- ✅ **Internationalization**: Support for multiple languages (English, Chinese)
- ✅ **Complete Coverage**: Handles OpenAPI 2.0, 3.0, and 3.1 specifications
- ✅ **Rich Output**: Generates comprehensive markdown with parameters, schemas, and examples

<!-- Remove aboves -->

## Install

```bash
pnpm i openapi2markdown
npm i openapi2markdown
yarn add openapi2markdown
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/loosheng/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/loosheng/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025 [LooSheng](https://github.com/loosheng)
