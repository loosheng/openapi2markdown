# Support for request body and parameter examples

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/anything

## Multiple examples

### Within `examples` (parameters)

This operation has several parameters with examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
GET /parameterExamples/{param1}/{param2}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| param1 | path | string | Yes | - |
| param2 | path | string | Yes | - |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


**default** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### Within `examples` (mixed)

This operation has parameter and body examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PATCH /parameterExamples/{param1}/{param2}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| param1 | path | string | Yes | - |
| param2 | path | string | Yes | - |
| param3 | query | string | No | - |
| param4 | query | string | No | - |
| param5 | header | string | Yes | - |
| param6 | header | string | No | - |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


**default** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### Within `examples` (body)

This operation has a `requestBody` with separately maintained examples within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
POST /requestBody
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


**default** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### Stringified JSON object in an `examples` value

This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing stringified JSON object.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PATCH /requestBody-primitive-example
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | - |
| petType | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | - |
| petType | string | No | - |


### Stringified JSON arrays in an `examples` value

This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing a stringified JSON array.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PUT /requestBody-primitive-example
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Array, item type: object

#### Responses

**200** - OK

**Content Type:** `application/json`

Array, item type: object

## Single example

### Within `example`

This operation has a param example and `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PUT /parameterExamples/{param1}/{param2}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| param1 | path | string | Yes | - |
| param2 | path | string | Yes | - |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### Within `example`

This operation has a `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PATCH /requestBody
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### `$ref` within `example`

This operation has a `requestBody` with separately maintained example within a `$ref` in a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
PUT /requestBody
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | - |
| email | string | No | - |
| name | string | No | - |


### Primitive `example`

This operation has a `requestBody` with separately maintained **primitive** example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
POST /requestBody-primitive-example
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

string

#### Responses

**200** - OK

**Content Type:** `application/json`

string

## Multiple media types

### Within `examples`

This operation has a `requestBody` containing multiple media types with each containing a separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

```http
POST /requestBody-multi-media-types
```

#### Request Body

**Content Type:** `text/plain`

**Required:** Yes

**Content Type:** `application/json`

**Required:** Yes
