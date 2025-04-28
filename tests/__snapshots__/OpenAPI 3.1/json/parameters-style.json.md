# Support for parameter serialization

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#style-values

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Cookie

Showcasing handling of `style` on cookie parameters.

### Support and handling of cookie parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

Support and handling of cookie parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies
```

**Operation ID:** `cookies_standard`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | cookie | string | No | A standard primitive. |
| array | cookie | string[] | No | A standard array. |
| object | cookie | object | No | A standard object. |

### Support and handling of cookie parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

Support and handling of cookie parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies#formNonExploded
```

**Operation ID:** `cookies_form_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | cookie | string | No | A `form` style, non-exploded primitive. |
| array | cookie | string[] | No | A `form` style, non-exploded array.

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |
| object | cookie | object | No | A `form` style, non-exploded object

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |

### Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies#formExploded
```

**Operation ID:** `cookies_form_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | cookie | string | No | A `form` style, exploded primitive. |
| array | cookie | string[] | No | A `form` style, exploded array.

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |
| object | cookie | object | No | A `form` style, exploded object.

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |

## Header

Showcasing handling of `style` on header parameters.

### Support and handling of header parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

Support and handling of header parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/headers
```

**Operation ID:** `headers_standard`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A standard primitive. |
| array | header | string[] | No | A standard array.

> Because headers cannot be duplicated, for an array'd header parameter to be sent it **must** have a `style` property present. |
| object | header | object | No | A standard object. |

### Support and handling of header parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of header parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/headers/simple
```

**Operation ID:** `headers_simple_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A `simple` style, non-exploded primitive. |
| array | header | string[] | No | A `simple` style, non-exploded array. |
| object | header | object | No | A `simple` style, non-exploded object. |

### Support and handling of header parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of header parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/headers/simple
```

**Operation ID:** `headers_simple_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A `simple` style, exploded primitive. |
| array | header | string[] | No | A `simple` style, exploded array. |
| object | header | object | No | A `simple` style, exploded object. |

## Path

Showcasing handling of `style` on path parameters.

### Support and handling of path parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

Support and handling of path parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/path/{primitive}/{array}/{object}
```

**Operation ID:** `paths_standard`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A standard primitive. |
| array | path | string[] | Yes | A standard array. |
| object | path | object | Yes | A standard object. |

### Support and handling of path parameters with `style: matrix` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of path parameters with `style: matrix` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/matrix/{primitive}/{array}/{object}
```

**Operation ID:** `paths_matrix_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `matrix` style, non-exploded primitive. |
| array | path | string[] | Yes | A `matrix` style, non-exploded array. |
| object | path | object | Yes | A `matrix` style, non-exploded object. |

### Support and handling of path parameters with `style: matrix` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of path parameters with `style: matrix` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/matrix/{primitive}/{array}/{object}
```

**Operation ID:** `paths_matrix_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `matrix` style, exploded primitive. |
| array | path | string[] | Yes | A `matrix` style, exploded array. |
| object | path | object | Yes | A `matrix` style, exploded object. |

### Support and handling of path parameters with `style: label` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of path parameters with `style: label` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/label/{primitive}/{array}/{object}
```

**Operation ID:** `paths_label_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `label` style, non-exploded primitive. |
| array | path | string[] | Yes | A `label` style, non-exploded array. |
| object | path | object | Yes | A `label` style, non-exploded object. |

### Support and handling of cookie parameters with `style: label` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of cookie parameters with `style: label` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/label/{primitive}/{array}/{object}
```

**Operation ID:** `paths_label_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `label` style, exploded primitive. |
| array | path | string[] | Yes | A `label` style, exploded array. |
| object | path | object | Yes | A `label` style, exploded object. |

### Support and handling of path parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of path parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/simple/{primitive}/{array}/{object}
```

**Operation ID:** `paths_simple_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `simple` style, non-exploded primitive. |
| array | path | string[] | Yes | A `simple` style, non-exploded array. |
| object | path | object | Yes | A `simple` style, non-exploded object. |

### Support and handling of path parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of path parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/simple/{primitive}/{array}/{object}
```

**Operation ID:** `paths_simple_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `simple` style, exploded primitive. |
| array | path | string[] | Yes | A `simple` style, exploded array. |
| object | path | object | Yes | A `simple` style, exploded object. |

## Query

Showcasing handling of `style` on query parameters.

### Support and handling of query parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

Support and handling of query parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/query
```

**Operation ID:** `query_standard`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A standard primitive. |
| array | query | string[] | No | A standard array. |
| object | query | object | No | A standard object. |

### Support and handling of query parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of query parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/form
```

**Operation ID:** `query_form_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A `form` style, non-exploded primitive. |
| array | query | string[] | No | A `form` style, non-exploded array. |
| object | query | object | No | A `form` style, non-exploded object. |

### Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/query/form
```

**Operation ID:** `query_form_exploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A `form` style, exploded primitive. |
| array | query | string[] | No | A `form` style, exploded array. |
| object | query | object | No | A `form` style, exploded object. |

### Support and handling of cookie parameters with `style: spaceDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of cookie parameters with `style: spaceDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/spaceDelimited
```

**Operation ID:** `query_spaceDelimited_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| array | query | string[] | No | A `spaceDelimited` style, non-exploded primitive. |
| object | query | object | No | A `spaceDelimited` style, non-exploded array.

>⚠️ This is currently unsupported. |

### Support and handling of cookie parameters with `style: pipeDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of cookie parameters with `style: pipeDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/pipeDelimited
```

**Operation ID:** `query_pipeDelimited_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| array | query | string[] | No | A `pipeDelimited` style, non-exploded primitive. |
| object | query | object | No | A `pipeDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |

### Support and handling of cookie parameters with `style: deepObject` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

Support and handling of cookie parameters with `style: deepObject` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/deepObject
```

**Operation ID:** `query_deepObject_nonExploded`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| object | query | object | No | A `deepObject` style, exploded object. |

## multipart/form-data Encoding

Showcasing handling of `encoding` and `style` on `multipart/form-data` requests.

### Support and handling of a `multipart/form-data` request body without `encoding` serialization.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body without `encoding` serialization.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data
```

**Operation ID:** `formData_standard`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A standard primitive. |
| array | array | No | A standard array. |
| object | object | No | A standard object. |


### Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/form
```

**Operation ID:** `formData_form_nonExploded`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `form` style, non-exploded primitive. |
| array | array | No | A `form` style, non-exploded array. |
| object | object | No | A `form` style, non-exploded object. |


### Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: true`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: true`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
PUT /anything/form-data/form
```

**Operation ID:** `form_data_form_exploded`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `form` style, exploded primitive. |
| array | array | No | A `form` style, exploded array. |
| object | object | No | A `form` style, exploded object. |


### Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: spaceDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: spaceDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
GET /anything/form-data/spaceDelimited
```

**Operation ID:** `formData_spaceDelimited_nonExploded`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| array | array | No | A `spaceDelimited` style, non-exploded array. |
| object | object | No | A `spaceDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |


### Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: pipeDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: pipeDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/pipeDelimited
```

**Operation ID:** `form_data_pipeDelimited_nonExploded`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| array | array | No | A `pipeDelimited` style, non-exploded array. |
| object | object | No | A `pipeDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |


### Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: deepObject` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: deepObject` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/deepObject
```

**Operation ID:** `form_data_deepObject_exploded`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `deepObject` style, non-exploded primitive. |
| array | array | No | A `deepObject` style, non-exploded array. |
| object | object | No | A `deepObject` style, non-exploded object. |
