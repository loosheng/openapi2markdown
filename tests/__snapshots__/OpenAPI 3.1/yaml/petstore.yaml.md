# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**Version:** 1.0.0

## Servers

- **URL:** http://petstore.swagger.io/v2

## pet

Everything about your Pets

### Add a new pet to the store

```http
POST /pet
```

#### Request Body

**Content Type:** `application/json`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


**Content Type:** `application/xml`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


### Update an existing pet

```http
PUT /pet
```

#### Request Body

**Content Type:** `application/json`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


**Content Type:** `application/xml`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


### Multiple status values can be provided with comma separated strings

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

**Content Type:** `application/xml`

Array, item type: object

**Content Type:** `application/json`

Array, item type: object

### Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

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

**Content Type:** `application/xml`

Array, item type: object

**Content Type:** `application/json`

Array, item type: object

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

**Content Type:** `application/xml`

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


**Content Type:** `application/json`

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

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | Updated name of the pet |
| status | string | No | Updated status of the pet |


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

#### Request Body

**Content Type:** `application/octet-stream`

string

#### Responses

**200** - successful operation

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | No | - |
| type | string | No | - |
| message | string | No | - |


## store

Access to Petstore orders

### Returns a map of status codes to quantities

Returns a map of status codes to quantities

```http
GET /store/inventory
```

#### Responses

**200** - successful operation

**Content Type:** `application/json`

object

### Place an order for a pet

```http
POST /store/order
```

#### Request Body

**Content Type:** `application/json`

**Description:** order placed for purchasing the pet

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


#### Responses

**200** - successful operation

**Content Type:** `application/xml`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


### For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

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

**Content Type:** `application/xml`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| petId | integer | No | - |
| quantity | integer | No | - |
| shipDate | string | No | - |
| status | string | No | Order Status |
| complete | boolean | No | - |


### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

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

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
POST /user
```

#### Request Body

**Content Type:** `application/json`

**Description:** Created user object

**Required:** Yes

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


### Creates list of users with given input array

```http
POST /user/createWithArray
```

#### Request Body

**Content Type:** `application/json`

**Description:** List of user object

**Required:** Yes

Array, item type: object

### Creates list of users with given input array

```http
POST /user/createWithList
```

#### Request Body

**Content Type:** `application/json`

**Description:** List of user object

**Required:** Yes

Array, item type: object

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

**Content Type:** `application/xml`

string

**Content Type:** `application/json`

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

**Content Type:** `application/xml`

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


**Content Type:** `application/json`

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


### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
PUT /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | name that need to be updated |

#### Request Body

**Content Type:** `application/json`

**Description:** Updated user object

**Required:** Yes

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


### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | The name that needs to be deleted |
