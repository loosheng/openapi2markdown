# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**Version:** 1.0.0

## Servers

- **URL:** http://petstore.swagger.io/v2

## pet

Everything about your Pets

### Add a new pet to the store

Add a new pet to the store

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


**Content Type:** `application/xml`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


#### Responses

**Status Code:** 405

**Description:** Invalid input

### Update an existing pet

Update an existing pet

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


**Content Type:** `application/xml`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

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


#### Responses

**Status Code:** 400

**Description:** Invalid ID supplied

**Status Code:** 404

**Description:** Pet not found

**Status Code:** 405

**Description:** Validation exception

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

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

Array, item type: object

**Content Type:** `application/json`

Array, item type: object

**Status Code:** 400

**Description:** Invalid status value

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

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

Array, item type: object

**Content Type:** `application/json`

Array, item type: object

**Status Code:** 400

**Description:** Invalid tag value

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

**Content Type:** `application/xml`

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


**Content Type:** `application/json`

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

**Status Code:** default

**Description:** successful response

### Updates a pet in the store with form data

Updates a pet in the store with form data

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

### Uploads an image

Uploads an image

```http
POST /pet/{petId}/uploadImage
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| petId | path | integer | Yes | ID of pet to update |

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| additionalMetadata | string | No | Additional data to pass to server |
| file | string | No | file to upload |


#### Responses

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | integer | No | No description |
| type | string | No | No description |
| message | string | No | No description |


## store

Access to Petstore orders

### Returns a map of status codes to quantities

Returns a map of status codes to quantities

```http
GET /store/inventory
```

#### Responses

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/json`

object

### Place an order for a pet

Place an order for a pet

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
| id | integer | No | No description |
| petId | integer | No | No description |
| quantity | integer | No | No description |
| shipDate | string | No | No description |
| status | string | No | Order Status |
| complete | boolean | No | No description |


#### Responses

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| petId | integer | No | No description |
| quantity | integer | No | No description |
| shipDate | string | No | No description |
| status | string | No | Order Status |
| complete | boolean | No | No description |


**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| petId | integer | No | No description |
| quantity | integer | No | No description |
| shipDate | string | No | No description |
| status | string | No | Order Status |
| complete | boolean | No | No description |


**Status Code:** 400

**Description:** Invalid Order

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

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| petId | integer | No | No description |
| quantity | integer | No | No description |
| shipDate | string | No | No description |
| status | string | No | Order Status |
| complete | boolean | No | No description |


**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| petId | integer | No | No description |
| quantity | integer | No | No description |
| shipDate | string | No | No description |
| status | string | No | Order Status |
| complete | boolean | No | No description |


**Status Code:** 400

**Description:** Invalid ID supplied

**Status Code:** 404

**Description:** Order not found

### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| orderId | path | integer | Yes | ID of the order that needs to be deleted |

#### Responses

**Status Code:** 400

**Description:** Invalid ID supplied

**Status Code:** 404

**Description:** Order not found

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
| id | integer | No | No description |
| username | string | No | No description |
| firstName | string | No | No description |
| lastName | string | No | No description |
| email | string | No | No description |
| password | string | No | No description |
| phone | string | No | No description |
| userStatus | integer | No | User Status |


#### Responses

**Status Code:** default

**Description:** successful operation

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithArray
```

#### Request Body

**Content Type:** `application/json`

**Description:** List of user object

**Required:** Yes

Array, item type: object

#### Responses

**Status Code:** default

**Description:** successful operation

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithList
```

#### Request Body

**Content Type:** `application/json`

**Description:** List of user object

**Required:** Yes

Array, item type: object

#### Responses

**Status Code:** default

**Description:** successful operation

### Logs user into the system

Logs user into the system

```http
GET /user/login
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | query | string | Yes | The user name for login |
| password | query | string | Yes | The password for login in clear text |

#### Responses

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

string

**Content Type:** `application/json`

string

**Status Code:** 400

**Description:** Invalid username/password supplied

### Logs out current logged in user session

Logs out current logged in user session

```http
GET /user/logout
```

#### Responses

**Status Code:** default

**Description:** successful operation

### Get user by user name

Get user by user name

```http
GET /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | The name that needs to be fetched. Use user1 for testing.  |

#### Responses

**Status Code:** 200

**Description:** successful operation

**Content Type:** `application/xml`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| username | string | No | No description |
| firstName | string | No | No description |
| lastName | string | No | No description |
| email | string | No | No description |
| password | string | No | No description |
| phone | string | No | No description |
| userStatus | integer | No | User Status |


**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| username | string | No | No description |
| firstName | string | No | No description |
| lastName | string | No | No description |
| email | string | No | No description |
| password | string | No | No description |
| phone | string | No | No description |
| userStatus | integer | No | User Status |


**Status Code:** 400

**Description:** Invalid username supplied

**Status Code:** 404

**Description:** User not found

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
| id | integer | No | No description |
| username | string | No | No description |
| firstName | string | No | No description |
| lastName | string | No | No description |
| email | string | No | No description |
| password | string | No | No description |
| phone | string | No | No description |
| userStatus | integer | No | User Status |


#### Responses

**Status Code:** 400

**Description:** Invalid user supplied

**Status Code:** 404

**Description:** User not found

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | The name that needs to be deleted |

#### Responses

**Status Code:** 400

**Description:** Invalid username supplied

**Status Code:** 404

**Description:** User not found
