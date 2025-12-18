# Support for `additionalProperties` declarations

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Should allow additionalProperties in JSON schema

```http
POST /post
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| object with `additionalProperties: true` | object | No | - |
| object with `additionalProperties: false` and no other properties | object | No | - |
| object with `additionalProperties: { type: integer }` | object | No | - |
| object with `additionalProperties: { type: object, properties: ... }` | object | No | - |
| object with `additionalProperties: { type: object, properties: ... }` and custom title | object | No | - |
| object with `additionalProperties: { type: array, items: { type: integer } }` | object | No | - |
| object with `additionalProperties: $ref, simple` | object | No | - |
| object with `additionalProperties: $ref, with $ref` | object | No | - |
| object with `additionalPropeties` within an allOf | unknown | No | Technically this is not valid to the spec. The `additionalProperties` rejections should cancel out each others new field but we indicate we want this to work by enabling [json-schema-merge-allof](https://npm.im/json-schema-merge-allof)'s `ignoreAdditionalProperties` option |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| object with `additionalProperties: true` | object | No | - |
| object with `additionalProperties: { type: integer }` | object | No | - |
| object with `additionalProperties: { type: object, properties: ... }` | object | No | - |
| object with `additionalProperties: { type: object, properties: ... }` and custom title | object | No | - |
| object with `additionalProperties: { type: array, items: { type: integer } }` | object | No | - |
| object with `additionalProperties: $ref, simple` | object | No | - |
| object with `additionalProperties: $ref, with $ref` | object | No | - |
