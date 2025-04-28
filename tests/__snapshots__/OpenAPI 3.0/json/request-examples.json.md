# Support for request body and parameter examples

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/anything

## Multiple examples

### This operation has several parameters with examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| param1 | path | string | Yes | No description |
| param2 | path | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

**Status Code:** default

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has parameter and body examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| param1 | path | string | Yes | No description |
| param2 | path | string | Yes | No description |
| param3 | query | string | No | No description |
| param4 | query | string | No | No description |
| param5 | header | string | Yes | No description |
| param6 | header | string | No | No description |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

**Status Code:** default

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has a `requestBody` with separately maintained examples within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

**Status Code:** default

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing stringified JSON object.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| name | string | No | No description |
| petType | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | No description |
| petType | string | No | No description |


### This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing a stringified JSON array.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

## Single example

### This operation has a param example and `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| param1 | path | string | Yes | No description |
| param2 | path | string | Yes | No description |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has a `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has a `requestBody` with separately maintained example within a `$ref` in a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | number | No | No description |
| email | string | No | No description |
| name | string | No | No description |


### This operation has a `requestBody` with separately maintained **primitive** example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

string

## Multiple media types

### This operation has a `requestBody` containing multiple media types with each containing a separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

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

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `text/plain`

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`
