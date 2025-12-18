# Support for parameter serialization

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#style-values

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Cookie

Showcasing handling of `style` on cookie parameters.

### Standard (no style)

Support and handling of cookie parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | cookie | string | No | A standard primitive. |
| array | cookie | string[] | No | A standard array. |
| object | cookie | object | No | A standard object. |

### Form (non-exploded)

Support and handling of cookie parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies#formNonExploded
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | cookie | string | No | A `form` style, non-exploded primitive. |
| array | cookie | string[] | No | A `form` style, non-exploded array.

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |
| object | cookie | object | No | A `form` style, non-exploded object

> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers. |

### Form (exploded)

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

```http
GET /cookies#formExploded
```

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

### Standard (no style)

Support and handling of header parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/headers
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A standard primitive. |
| array | header | string[] | No | A standard array.

> Because headers cannot be duplicated, for an array'd header parameter to be sent it **must** have a `style` property present. |
| object | header | object | No | A standard object. |

### Simple (non-exploded)

Support and handling of header parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/headers/simple
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A `simple` style, non-exploded primitive. |
| array | header | string[] | No | A `simple` style, non-exploded array. |
| object | header | object | No | A `simple` style, non-exploded object. |

### Simple (exploded)

Support and handling of header parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/headers/simple
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | header | string | No | A `simple` style, exploded primitive. |
| array | header | string[] | No | A `simple` style, exploded array. |
| object | header | object | No | A `simple` style, exploded object. |

## Path

Showcasing handling of `style` on path parameters.

### Standard (no style)

Support and handling of path parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/path/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A standard primitive. |
| array | path | string[] | Yes | A standard array. |
| object | path | object | Yes | A standard object. |

### Matrix (non-exploded)

Support and handling of path parameters with `style: matrix` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/matrix/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `matrix` style, non-exploded primitive. |
| array | path | string[] | Yes | A `matrix` style, non-exploded array. |
| object | path | object | Yes | A `matrix` style, non-exploded object. |

### Matrix (exploded)

Support and handling of path parameters with `style: matrix` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/matrix/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `matrix` style, exploded primitive. |
| array | path | string[] | Yes | A `matrix` style, exploded array. |
| object | path | object | Yes | A `matrix` style, exploded object. |

### Label (non-exploded)

Support and handling of path parameters with `style: label` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/label/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `label` style, non-exploded primitive. |
| array | path | string[] | Yes | A `label` style, non-exploded array. |
| object | path | object | Yes | A `label` style, non-exploded object. |

### Label (exploded)

Support and handling of cookie parameters with `style: label` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/label/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `label` style, exploded primitive. |
| array | path | string[] | Yes | A `label` style, exploded array. |
| object | path | object | Yes | A `label` style, exploded object. |

### Simple (non-exploded)

Support and handling of path parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/path/simple/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `simple` style, non-exploded primitive. |
| array | path | string[] | Yes | A `simple` style, non-exploded array. |
| object | path | object | Yes | A `simple` style, non-exploded object. |

### Simple (exploded)

Support and handling of path parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/path/simple/{primitive}/{array}/{object}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | path | string | Yes | A `simple` style, exploded primitive. |
| array | path | string[] | Yes | A `simple` style, exploded array. |
| object | path | object | Yes | A `simple` style, exploded object. |

## Query

Showcasing handling of `style` on query parameters.

### Standard (no style)

Support and handling of query parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

* [3.1.0 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameterObject)

```http
GET /anything/query
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A standard primitive. |
| array | query | string[] | No | A standard array. |
| object | query | object | No | A standard object. |

### Form (non-exploded)

Support and handling of query parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/form
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A `form` style, non-exploded primitive. |
| array | query | string[] | No | A `form` style, non-exploded array. |
| object | query | object | No | A `form` style, non-exploded object. |

### Form (exploded)

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
POST /anything/query/form
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| primitive | query | string | No | A `form` style, exploded primitive. |
| array | query | string[] | No | A `form` style, exploded array. |
| object | query | object | No | A `form` style, exploded object. |

### spaceDelimited (non-exploded)

Support and handling of cookie parameters with `style: spaceDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/spaceDelimited
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| array | query | string[] | No | A `spaceDelimited` style, non-exploded primitive. |
| object | query | object | No | A `spaceDelimited` style, non-exploded array.

>⚠️ This is currently unsupported. |

### pipeDelimited (non-exploded)

Support and handling of cookie parameters with `style: pipeDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/pipeDelimited
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| array | query | string[] | No | A `pipeDelimited` style, non-exploded primitive. |
| object | query | object | No | A `pipeDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |

### deepObject (exploded)

Support and handling of cookie parameters with `style: deepObject` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

* [3.1.0 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#style-values)

```http
GET /anything/query/deepObject
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| object | query | object | No | A `deepObject` style, exploded object. |

## multipart/form-data Encoding

Showcasing handling of `encoding` and `style` on `multipart/form-data` requests.

### Standard (no encoding)

Support and handling of a `multipart/form-data` request body without `encoding` serialization.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A standard primitive. |
| array | string[] | No | A standard array. |
| object | object | No | A standard object. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |


### Form (non-exploded)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/form
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `form` style, non-exploded primitive. |
| array | string[] | No | A `form` style, non-exploded array. |
| object | object | No | A `form` style, non-exploded object. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |


### Form (exploded)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: true`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
PUT /anything/form-data/form
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `form` style, exploded primitive. |
| array | string[] | No | A `form` style, exploded array. |
| object | object | No | A `form` style, exploded object. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |


### spaceDelimited (non-exploded)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: spaceDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/spaceDelimited
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| array | string[] | No | A `spaceDelimited` style, non-exploded array. |
| object | object | No | A `spaceDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |


### pipeDelimited (non-exploded)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: pipeDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
POST /anything/form-data/pipeDelimited
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| array | string[] | No | A `pipeDelimited` style, non-exploded array. |
| object | object | No | A `pipeDelimited` style, non-exploded object.

>⚠️ This is currently unsupported. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |


### deepObject (exploded)

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: deepObject` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

* [3.1.0 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encodingObject)

```http
GET /anything/form-data/deepObject
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | A `deepObject` style, non-exploded primitive. |
| array | string[] | No | A `deepObject` style, non-exploded array. |
| object | object | No | A `deepObject` style, non-exploded object. |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |
