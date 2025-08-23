# Responses with multiple media types

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#responseObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Multiple response types with multiple examples

Multiple response types with multiple examples

```http
POST /multiple-types-multiple-examples
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string (format: date) | string | No | No description |
| string (format: date-time) | string | No | No description |
| string (format: string) | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `text/plain`

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

### Multiple response types with a single example

Multiple response types with a single example

```http
POST /multiple-types-single-example
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string (format: date) | string | No | No description |
| string (format: date-time) | string | No | No description |
| string (format: string) | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `text/plain`

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

### Single media type with multiple examples

Single media type with multiple examples

```http
GET /single-type-multiple-examples
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

### Single media type with a single example

Single media type with a single example

```http
GET /single-type-single-example
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`
