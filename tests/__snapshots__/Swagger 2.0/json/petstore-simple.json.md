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

**Status Code:** 200

**Description:** successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| category | object | No | No description |
| name | string | Yes | No description |
| photoUrls | string[] | Yes | No description |
| tags | object[] | No | No description |
| status | string | No | pet status in the store |


**category 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | No | No description |


**tags 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | No | No description |


**Status Code:** 400

**Description:** Invalid ID supplied

**Status Code:** 404

**Description:** Pet not found

### Updates a pet in the store with form data

Updates a pet in the store with form data

```http
POST /pet/{petId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | integer | Yes | ID of pet that needs to be updated |
| name | formData | string | No | Updated name of the pet |
| status | formData | string | No | Updated status of the pet |

#### Responses

**Status Code:** 405

**Description:** Invalid input

### Deletes a pet

Deletes a pet

```http
DELETE /pet/{petId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| api_key | header | string | No | No description |
| petId | path | integer | Yes | Pet id to delete |

#### Responses

**Status Code:** 400

**Description:** Invalid ID supplied

**Status Code:** 404

**Description:** Pet not found
