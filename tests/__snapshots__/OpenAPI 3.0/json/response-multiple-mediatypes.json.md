# Responses with multiple media types

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#responseObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Multiple response types with multiple examples

```http
POST /multiple-types-multiple-examples
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string (format: date) | string | No | - |
| string (format: date-time) | string | No | - |
| string (format: string) | string | No | - |


### Multiple response types with a single example

```http
POST /multiple-types-single-example
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string (format: date) | string | No | - |
| string (format: date-time) | string | No | - |
| string (format: string) | string | No | - |


### Single media type with multiple examples

```http
GET /single-type-multiple-examples
```

### Single media type with a single example

```http
GET /single-type-single-example
```
