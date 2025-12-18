# Swagger Petstore

This is a slimmed down single path version of the Petstore definition.

**Version:** 1.0.0

## pet

Everything about your Pets

### Returns a single pet

Returns a single pet

```http
GET /pet/{petId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | integer | Yes | ID of pet to return |

#### Responses

**200** - successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| category | object | No | - |
| name | string | Yes | - |
| photoUrls | string[] | Yes | - |
| tags | object[] | No | - |
| status | string | No | pet status in the store |


**category 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


**tags 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | No | - |


### Updates a pet in the store with form data

```http
POST /pet/{petId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | integer | Yes | ID of pet that needs to be updated |
| name | formData | string | No | Updated name of the pet |
| status | formData | string | No | Updated status of the pet |

### Deletes a pet

```http
DELETE /pet/{petId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| api_key | header | string | No | - |
| petId | path | integer | Yes | Pet id to delete |
