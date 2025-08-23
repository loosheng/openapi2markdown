# Swagger Petstore

A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification

**Version:** 1.0.0

## Default

### Returns all pets from the system that the user has access to

Returns all pets from the system that the user has access to

```http
GET /pets
```

**Operation ID:** `findPets`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| tags | query | unknown | No | tags to filter by |
| limit | query | unknown | No | maximum number of results to return |

#### Responses

### Creates a new pet in the store.  Duplicates are allowed

Creates a new pet in the store.  Duplicates are allowed

```http
POST /pets
```

**Operation ID:** `addPet`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pet | body | object | Yes | Pet to add to the store |

#### Responses

### Returns a user based on a single ID, if the user does not have access to the pet

Returns a user based on a single ID, if the user does not have access to the pet

```http
GET /pets/{id}
```

**Operation ID:** `findPetById`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | unknown | Yes | ID of pet to fetch |

#### Responses

### deletes a single pet based on the ID supplied

deletes a single pet based on the ID supplied

```http
DELETE /pets/{id}
```

**Operation ID:** `deletePet`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | unknown | Yes | ID of pet to delete |

#### Responses
