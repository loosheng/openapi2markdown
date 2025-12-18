# Support for `deprecated` declaration

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject

```http
POST /anything
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| filter | query | string | No | This query parameter is explicitly **not** deprecated. |
| filterLegacy | query | string | No | This query parameter is deprecated.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object |
| status | query | string[] | Yes | - |

#### Request Body

**Content Type:** `application/json`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | This `requestBody` schema property is marked as deprecated.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object |
| category | object | No | - |
| category_alt | object | No | Though this loads a `$ref` to the `Category` schema, and that contains deprecated properties within itself, this `category_alt` parameter is also deprecated. |
| name | string | Yes | - |
| photoUrls | string[] | Yes | - |
| tags | object[] | No | - |
| tags_alt | object[] | No | Unlike the `tags` parameter, this is **not** deprecated, but the contents within itself are. |
| status | string | No | pet status in the store |
| polymorphism | object | No | - |


**category 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


**category_alt 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


**tags 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


**tags_alt 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


**polymorphism 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| oneOf | unknown | No | This is a `oneOf` that's marked as deprecated. |
| allOf | unknown | No | This is a `allOf` that's marked as deprecated. |
| anyOf | unknown | No | This is a `anyOf` that's marked as deprecated. |


#### Responses

**200** - successful operation

**Content Type:** `application/json`

Array, item type: object
