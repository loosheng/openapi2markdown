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

**Operation ID:** `getPetById`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | unknown | Yes | ID of pet to return |

#### Responses

### Updates a pet in the store with form data

Updates a pet in the store with form data

```http
POST /pet/{petId}
```

**Operation ID:** `updatePetWithForm`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | unknown | Yes | ID of pet that needs to be updated |
| name | formData | unknown | No | Updated name of the pet |
| status | formData | unknown | No | Updated status of the pet |

#### Responses

### Deletes a pet

Deletes a pet

```http
DELETE /pet/{petId}
```

**Operation ID:** `deletePet`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| api_key | header | unknown | No | No description |
| petId | path | unknown | Yes | Pet id to delete |

#### Responses
