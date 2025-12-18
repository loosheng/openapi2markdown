# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**Version:** 1.0.0

## pet

Everything about your Pets

### Add a new pet to the store

```http
POST /pet
```

**Request Body:** Pet object that needs to be added to the store

### Update an existing pet

```http
PUT /pet
```

**Request Body:** Pet object that needs to be added to the store

### Finds Pets by status

Multiple status values can be provided with comma separated strings

```http
GET /pet/findByStatus
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| status | query | string[] | Yes | Status values that need to be considered for filter |

#### Responses

**200** - successful operation

Array, item type: object

### Finds Pets by tags

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```http
GET /pet/findByTags
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| tags | query | string[] | Yes | Tags to filter by |

#### Responses

**200** - successful operation

Array, item type: object

### Find pet by ID

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

### uploads an image

```http
POST /pet/{petId}/uploadImage
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | integer | Yes | ID of pet to update |
| additionalMetadata | formData | string | No | Additional data to pass to server |
| file | formData | file | No | file to upload |

#### Responses

**200** - successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | No | - |
| type | string | No | - |
| message | string | No | - |


## store

Access to Petstore orders

### Returns pet inventories by status

Returns a map of status codes to quantities

```http
GET /store/inventory
```

#### Responses

**200** - successful operation

object

### Place an order for a pet

```http
POST /store/order
```

**Request Body:** order placed for purchasing the pet

#### Responses

**200** - successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


### Find purchase order by ID

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

```http
GET /store/order/{orderId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| orderId | path | integer | Yes | ID of pet that needs to be fetched |

#### Responses

**200** - successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


### Delete purchase order by ID

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| orderId | path | integer | Yes | ID of the order that needs to be deleted |

## user

Operations about user

### Create user

This can only be done by the logged in user.

```http
POST /user
```

**Request Body:** Created user object

### Creates list of users with given input array

```http
POST /user/createWithArray
```

**Request Body:** List of user object

### Creates list of users with given input array

```http
POST /user/createWithList
```

**Request Body:** List of user object

### Logs user into the system

```http
GET /user/login
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | query | string | Yes | The user name for login |
| password | query | string | Yes | The password for login in clear text |

#### Responses

**200** - successful operation

string

### Logs out current logged in user session

```http
GET /user/logout
```

### Get user by user name

```http
GET /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | The name that needs to be fetched. Use user1 for testing.  |

#### Responses

**200** - successful operation

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| username | string | No | - |
| firstName | string | No | - |
| lastName | string | No | - |
| email | string | No | - |
| password | string | No | - |
| phone | string | No | - |
| userStatus | integer | No | User Status |


### Updated user

This can only be done by the logged in user.

```http
PUT /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | name that need to be updated |
| body | body | object | Yes | Updated user object |

### Delete user

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | The name that needs to be deleted |
