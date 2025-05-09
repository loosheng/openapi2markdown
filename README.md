# openapi2markdown [![npm](https://img.shields.io/npm/v/openapi2markdown.svg)](https://npmjs.com/package/openapi2markdown)

[![Unit Test](https://github.com/loosheng/openapi2markdown/actions/workflows/unit-test.yml/badge.svg)](https://github.com/loosheng/openapi2markdown/actions/workflows/unit-test.yml)

Convert OpenAPI to Markdown

## How to use

```ts
import { openapi2markdown } from 'openapi2markdown'

// Basic usage
const markdown = await openapi2markdown(openapi)

// With internationalization (i18n) support
const markdownZh = await openapi2markdown(openapi, { lang: 'zhCN' })

// output markdown string
console.log(markdown.toString())

// output markdown json
console.log(markdown.toJSON())
```

<!-- Remove aboves -->

## Install

```bash
npm i openapi2markdown
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/loosheng/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/loosheng/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025 [LooSheng](https://github.com/loosheng)
