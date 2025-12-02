# Swagger Petstore

A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification

**Version:** 1.0.0

## Default

### Returns all pets from the system that the user has access to


Returns all pets from the system that the user has access to


```http
GET /pets
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| tags | query | string[] | No | tags to filter by |
| limit | query | integer | No | maximum number of results to return |

#### Responses

**Status Code:** 200

**Description:** pet response

Array, item type: unknown

**Status Code:** default

**Description:** unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | No description |
| message | string | Yes | No description |


### Creates a new pet in the store.  Duplicates are allowed

Creates a new pet in the store.  Duplicates are allowed

```http
POST /pets
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pet | body | object | Yes | Pet to add to the store |

#### Responses

**Status Code:** 200

**Description:** pet response

Unknown type

**Status Code:** default

**Description:** unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | No description |
| message | string | Yes | No description |


### Returns a user based on a single ID, if the user does not have access to the pet

Returns a user based on a single ID, if the user does not have access to the pet

```http
GET /pets/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | integer | Yes | ID of pet to fetch |

#### Responses

**Status Code:** 200

**Description:** pet response

Unknown type

**Status Code:** default

**Description:** unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | No description |
| message | string | Yes | No description |


### deletes a single pet based on the ID supplied

deletes a single pet based on the ID supplied

```http
DELETE /pets/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | integer | Yes | ID of pet to delete |

#### Responses

**Status Code:** 204

**Description:** pet deleted

**Status Code:** default

**Description:** unexpected error

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | Yes | No description |
| message | string | Yes | No description |
