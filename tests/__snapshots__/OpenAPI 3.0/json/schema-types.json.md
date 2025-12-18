# Support for different schema types

Additionally some support for features that schema types may individually support.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schemaObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Strings

Showcasing handling and support for `type: string` schemas.

### Support and handling of `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Support and handling of `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/strings
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| stock | string | No | - |
| description (markdown) | string | No | This is a string with a **markdown** description: [link](ref:action-object) |
| title | string | No | - |
| required | string | Yes | This string should be required. |
| default | string | No | This string has a `default` of `default value`. |
| default (null) | string | No | This string has a `default` of `null`. |
| default (required) | string | Yes | This string has a `default` of `default value` and is required. |
| nullable | string | No | This string has is `nullable`. |
| enum | string | No | - |
| enum (with default) | string | No | This enum has a `default` of `available`. |
| enum (with default and required) | string | No | This enum has a `default` of `available` and is required. |
| enum (with empty option) | string | No | This enum has a an empty string (`""`) as one of its available options. |
| enum (with empty option and empty default) | string | No | This enum has a an empty string (`""`) as its only available option, and that same value is set as its `default`. |


### Handling of `format` data types on `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of `format` data types on `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PUT /anything/strings
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| binary | string | No | - |
| binary (with default) | string | Yes | - |
| blob | string | No | Strings with `format: blob` should render a `<textarea>`. |
| date | string | No | - |
| date (with pattern) | string | No | This accepts a pattern of matching `(\d{4})-(\d{2})-(\d{2})` |
| date-time | string | No | Unsupported due to the varying ways that `date-time` is utilized in API definitions for representing dates, the [lack of wide browser support for the input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Browser_compatibility), and that it's not [RFC 3339](https://tools.ietf.org/html/rfc3339) compliant. |
| html | string | No | Strings with `format: html` should render a `<textarea>`. |
| json | string | No | This is a special ReadMe data type to render a `<textarea>` to be parsed as JSON |
| string | string | No | - |
| password | string | No | - |
| password (minLength: 5, maxLength: 20) | string | No | This `format: password` input has a `minLength` and `maxLength` configured. |
| url | string | No | - |
| unknown-format | string | No | - |


### Handling of a `requestBody` payload that's a single `type: string`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a single `type: string`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
POST /anything/strings/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

string

### Handling of a `requestBody` payload that's a single `type: string` but `format: json`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a single `type: string` but `format: json`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PATCH /anything/strings/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

string

## Numbers

Showcasing handling and support for `type: integer` and `type: number` schemas.

### Support and handling of `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Support and handling of `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/numbers
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| integer (stock) | integer | No | - |
| integer (markdown description) | integer | No | This is an `integer` with a **markdown** description: [link](ref:action-object) |
| integer (title) | integer | No | - |
| integer (required) | integer | Yes | This integer should be required. |
| integer (default) | integer | No | This integer has a `default` of `1234`. |
| integer (default null) | integer | No | This integer has a `default` of `null`. |
| integer (default, required) | integer | Yes | This integer has a `default` of `1234` and is required. |
| integer (nullable) | integer | No | This integer is `nullable`. |
| integer (minimum / maximum) | integer | No | This integer has a `minimum` of `100` and `maximum` of `999`. |
| number (stock) | number | No | - |
| number (markdown description) | number | No | This is a `number` with a **markdown** description: [link](ref:action-object) |
| number (title) | number | No | - |
| number (required) | number | Yes | This number should be required. |
| number (default) | number | No | This number has a `default` of `12.34`. |
| number (default null) | number | No | This number has a `default` of `null`. |
| number (default, required) | number | Yes | This number has a `default` of `12.34` and is required. |
| number (nullable) | number | No | This number is `nullable`.. |


### Handling `format` data types on `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling `format` data types on `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PUT /anything/numbers
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| integer (format: int8) | integer | No | - |
| integer (format: uint8) | integer | No | - |
| integer (format: int16) | integer | No | - |
| integer (format: uint16) | integer | No | - |
| integer (format: int32) | integer | No | - |
| integer (format: int32, multipleOf: 2) | integer | No | This `integer` input has `multipleOf: 2` set on itself to control the increment/decrement value set. |
| integer (format: uint32) | integer | No | - |
| integer (format: int64) | integer | No | - |
| integer (format: uint64) | integer | No | - |
| number (format: float) | number | No | - |
| number (format: double) | number | No | - |


### Handling of a `requestBody` payload that's a single `type: integer`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a single `type: integer`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PATCH /anything/numbers
```

#### Request Body

**Content Type:** `application/json`

integer

## Booleans

Showcasing handling and support for `type: boolean` schemas.

### Support and handling of `type: boolean` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Support and handling of `type: boolean` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/booleans
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| stock | boolean | No | - |
| description (markdown) | boolean | No | This is a `boolean` with a **markdown** description: [link](ref:action-object) |
| title | boolean | No | - |
| required | boolean | Yes | This boolean should be required. |
| default | boolean | No | This boolean has a `default` of `false`. |
| default (required) | boolean | Yes | This boolean has a `default` of `false`. |
| inferred from enum | unknown | No | Though this is missing a `type` declaration it should be treated as `boolean` because it contains an enum of `true` and `false`. |


### Handling of a `requestBody` payload that's a single `type: boolean`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a single `type: boolean`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PATCH /anything/booleans
```

#### Request Body

**Content Type:** `application/json`

boolean

## Arrays

Showcasing handling and support for `type: array` schemas.

### Support and handling of `type: array` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Support and handling of `type: array` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/arrays
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| stock | unknown[] | No | - |
| with markdown description | unknown[] | No | This is an `array` with a **markdown** description: [link](ref:action-object) |
| with title | unknown[] | No | - |
| array<any> | unknown[] | No | - |
| array<any> (but no `items` property) | array | No | Techncally this is a malformed schema, but we support it (for legacy reasons) and repair it to have `items: {}` when we generate JSON Schema for the form.

Though its supported, not all OpenAPI validators allow it though so our support may regress at some point in the future. |
| array<string> | string[] | No | - |
| array<string> (with overall `null` default) | string[] | No | - |
| array<string> (loaded via a $ref) | string[] | No | - |
| array<integer> | integer[] | No | - |
| array<number> | number[] | No | - |
| array<boolean> | boolean[] | No | - |
| array<object> | object[] | No | - |
| array<object> (additionalProperties) | object[] | No | - |
| array<array<object>> | array[] | No | - |


**array<object> 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| integer | integer | No | - |
| number | number | No | - |
| boolean | boolean | No | - |


### Handling of a `requestBody` payload that's a `type: array` composed of objects.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a `type: array` composed of objects.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
POST /anything/arrays/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

Array, item type: object

### Handling of a `requestBody` payload that's a `type: array` composed of primitives.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

Handling of a `requestBody` payload that's a `type: array` composed of primitives.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

```http
PATCH /anything/arrays/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

Array, item type: string

## Objects

Showcasing handling and support for `type: object` schemas.

### Support and handling of `type: object` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Support and handling of `type: object` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/objects
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| object | object | No | - |
| object (with `title`) | object | No | - |
| object (without an explicit `type`) | unknown | No | Though this object is missing an explicit `type: object` property it should still be recognized as an object because it has `properties`. |
| object (additionalProperties) | object | No | - |
| object (without `properties`) | object | No | Because this object is missing a `properties` declaration we should treat it as if `additionalProperties: true` were present on it so the enduser can still use it with the form. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| integer | integer | No | - |
| number | number | No | - |
| object | object | No | - |
| array | string[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |


**object (with `title`) 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| integer | integer | No | - |
| number | number | No | - |
| object | object | No | - |
| array | string[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |


**object (without an explicit `type`) 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| property1 | integer | No | - |
| property2 | integer | No | - |


## Circular references

Showcasing handling and support for circular references (`$ref` pointers).

### Handling of a nested `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

Handling of a nested `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

```http
POST /anything/circular
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| circular | object | No | - |


**circular 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


### Handling of a top-level request body `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

Handling of a top-level request body `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

```http
PATCH /anything/circular
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


**children 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| string | string | No | - |
| children | object[] | No | - |


## ReadMe-flavors

Showcasing handling and support for various ReadMe-flavored schema additions.

### This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

```http
POST /anything/raw_body/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| RAW_BODY | string | No | - |


### This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

```http
PATCH /anything/raw_body/top-level-payloads
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| RAW_BODY | string | No | - |


## Quirks

Showcasing handling and support for various schema type quirks.

### Handling cases for when `type` is missing from a schema.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Handling cases for when `type` is missing from a schema.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/quirks
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| missing type | unknown | No | Though this request body property is missing a `type` declaration we should stil render a `string` input box so that the user can interact with it. |
| missing type (on completely empty schema) | unknown | No | - |
| implicit array | integer[] | No | This array property is missing an explicit `type: array` but since it has an `items` declaration we're implicitly treating it as an array. |
| implicit object | unknown | No | This object property is missing an explicit `type: object` but since it has an `properties` declaration we're implicitly treating it as an object. |


**implicit object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | - |


### Handling cases for when a nested `allOf` cannot be merged together.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Handling cases for when a nested `allOf` cannot be merged together.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
POST /anything/quirks/polymorphism
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| incompatible | unknown | No | This property consists of an `allOf` of a `string` and an `integer` schema. Since these two schemas are incompatible and we're unable to merge them per the `allOf` rules, we instead eliminate the `allOf` and render out a `string` instead.

This is obviously less than ideal but it assures that the user can still interact with the property. |
| compatible | unknown | No | Unlike the `incompatible` property above this `allOf` consists of two objects that **can** be merged. |


### When an `allOf` sits at the top of a request body schema and it cannot be merged, we're unable to render out anything for an input because there's no usable schema for us.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

When an `allOf` sits at the top of a request body schema and it cannot be merged, we're unable to render out anything for an input because there's no usable schema for us.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
PUT /anything/quirks/polymorphism
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Unknown type

### Like `quirks_entirelyIncompatibleAllOf`, when we're to merge an `allOf` together we eliminate it, however this schema here has additional properties (`description`) alongside that `allOf` so it's not a wholly empty schema and we can use it. Unfortunately since we don't have any of the real data for the request body to use we treat this as a string input with a `format` of `json` so that the user can input a raw JSON input to make their request with.

Unfortunately in this case we don't support `description` on the root schema so it won't show up, but a large input box still will for the user. Obviously all of this less than ideal as we're losing request body schema data but since the `allOf` present is incompatible it's unusable and this is the best we can do under the circumstances.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

Like `quirks_entirelyIncompatibleAllOf`, when we're to merge an `allOf` together we eliminate it, however this schema here has additional properties (`description`) alongside that `allOf` so it's not a wholly empty schema and we can use it. Unfortunately since we don't have any of the real data for the request body to use we treat this as a string input with a `format` of `json` so that the user can input a raw JSON input to make their request with.

Unfortunately in this case we don't support `description` on the root schema so it won't show up, but a large input box still will for the user. Obviously all of this less than ideal as we're losing request body schema data but since the `allOf` present is incompatible it's unusable and this is the best we can do under the circumstances.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
PATCH /anything/quirks/polymorphism
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Unknown type
