# Swagger Petstore

A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification

**Version:** 1.0.0

## Default

### Returns all pets from the system that the user has access to


```http
GET /pets
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| tags | query | string[] | No | tags to filter by |
| limit | query | integer | No | maximum number of results to return |

#### Responses

**200** - pet response

Array, item type: unknown

**default** - unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | - |
| message | string | Yes | - |


### Creates a new pet in the store.  Duplicates are allowed

```http
POST /pets
```

**Request Body:** Pet to add to the store

#### Responses

**200** - pet response

Unknown type

**default** - unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | - |
| message | string | Yes | - |


### Returns a user based on a single ID, if the user does not have access to the pet

```http
GET /pets/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | integer | Yes | ID of pet to fetch |

#### Responses

**200** - pet response

Unknown type

**default** - unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | - |
| message | string | Yes | - |


### deletes a single pet based on the ID supplied

```http
DELETE /pets/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | integer | Yes | ID of pet to delete |

#### Responses

**default** - unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | - |
| message | string | Yes | - |
