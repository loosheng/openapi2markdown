# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**Version:** 1.0.0

## pet

Everything about your Pets

### Add a new pet to the store

Add a new pet to the store

```http
POST /pet
```

**Operation ID:** `addPet`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object | Yes | Pet object that needs to be added to the store |

#### Responses

### Update an existing pet

Update an existing pet

```http
PUT /pet
```

**Operation ID:** `updatePet`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object | Yes | Pet object that needs to be added to the store |

#### Responses

### Multiple status values can be provided with comma separated strings

Multiple status values can be provided with comma separated strings

```http
GET /pet/findByStatus
```

**Operation ID:** `findPetsByStatus`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| status | query | unknown | Yes | Status values that need to be considered for filter |

#### Responses

### Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```http
GET /pet/findByTags
```

**Operation ID:** `findPetsByTags`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| tags | query | unknown | Yes | Tags to filter by |

#### Responses

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

### uploads an image

uploads an image

```http
POST /pet/{petId}/uploadImage
```

**Operation ID:** `uploadFile`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | unknown | Yes | ID of pet to update |
| additionalMetadata | formData | unknown | No | Additional data to pass to server |
| file | formData | unknown | No | file to upload |

#### Responses

## store

Access to Petstore orders

### Returns a map of status codes to quantities

Returns a map of status codes to quantities

```http
GET /store/inventory
```

**Operation ID:** `getInventory`

#### Responses

### Place an order for a pet

Place an order for a pet

```http
POST /store/order
```

**Operation ID:** `placeOrder`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object | Yes | order placed for purchasing the pet |

#### Responses

### For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

```http
GET /store/order/{orderId}
```

**Operation ID:** `getOrderById`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| orderId | path | unknown | Yes | ID of pet that needs to be fetched |

#### Responses

### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

**Operation ID:** `deleteOrder`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| orderId | path | unknown | Yes | ID of the order that needs to be deleted |

#### Responses

## user

Operations about user

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
POST /user
```

**Operation ID:** `createUser`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object | Yes | Created user object |

#### Responses

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithArray
```

**Operation ID:** `createUsersWithArrayInput`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object[] | Yes | List of user object |

#### Responses

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithList
```

**Operation ID:** `createUsersWithListInput`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| body | body | object[] | Yes | List of user object |

#### Responses

### Logs user into the system

Logs user into the system

```http
GET /user/login
```

**Operation ID:** `loginUser`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | query | unknown | Yes | The user name for login |
| password | query | unknown | Yes | The password for login in clear text |

#### Responses

### Logs out current logged in user session

Logs out current logged in user session

```http
GET /user/logout
```

**Operation ID:** `logoutUser`

#### Responses

### Get user by user name

Get user by user name

```http
GET /user/{username}
```

**Operation ID:** `getUserByName`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | unknown | Yes | The name that needs to be fetched. Use user1 for testing.  |

#### Responses

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
PUT /user/{username}
```

**Operation ID:** `updateUser`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | unknown | Yes | name that need to be updated |
| body | body | object | Yes | Updated user object |

#### Responses

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

**Operation ID:** `deleteUser`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | unknown | Yes | The name that needs to be deleted |

#### Responses
