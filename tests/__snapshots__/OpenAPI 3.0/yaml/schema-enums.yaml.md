# Support for different implementations of `enum`

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schemaObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Enums

Showcasing enum handling and support

### String enum support

Support and handling of enums on `type: string` schemas.

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
| enum | string | No | A regular ol' enum |
| enum *required | string | Yes | A regular ol' enum |
| enum (with default) | string | No | This enum has a `default` of `available`. |
| enum (with default) *required | string | Yes | A required enum with a default (if a field is required it should probably always have a default, eh?) |
| enum (with example) | string | No | This enum has a `example` of `pending`. |
| enum (with example) *required | string | Yes | This enum has a `example` of `pending` and is required. |
| enum (with non-value example) | string | No | This enum has an example that isn't part of the enum, so the option does not get hidden |
| enum (with non-value example) *required | string | Yes | This enum has an example that isn't part of the enum, so the option does not get hidden |
| enum (with empty option) | string | No | This enum has an empty string (`""`) as one of its available options. |
| enum (with duplicate options) | string | No | This enum has multiple duplicate options, they should get deduped in the UI |
| enum (with empty option and empty default) | string | No | This enum has a an empty string (`""`) as its only available option, and that same value is set as its `default`. |


### Number enum support

Support and handling of enums on `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
GET /anything/strings
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| enum | number | No | A regular ol' enum |
| enum *required | number | Yes | A regular ol' enum |
| enum (with default) | number | No | This enum has a `default` of `1`. |
| enum (with default) *required | number | Yes | A required enum with a default (if a field is required it should probably always have a default, eh?) |
| enum (with example) | number | No | This enum has a `example` of `1`. |
| enum (with example) *required | number | Yes | This enum has a `example` of `1` and is required. |
| enum (with empty option) | number | No | This enum has an empty string (`""`) as one of its available options. |
| enum (with duplicate options) | number | No | This enum has multiple duplicate options, they should get deduped in the UI |


### Boolean enum support

Support and handling of enums on `type: boolean` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

```http
PUT /anything/strings
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| enum | boolean | No | A regular ol' enum |
| enum *required | boolean | Yes | A regular ol' enum |
| enum (with default) | boolean | No | This enum has a `default` of `false`. |
| enum (with default) *required | boolean | Yes | A required enum with a default (if a field is required it should probably always have a default, eh?) |
