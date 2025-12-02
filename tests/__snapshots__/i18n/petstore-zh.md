# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**版本:** 1.0.0

## 服务器

- **URL:** http://petstore.swagger.io/v2

## pet

Everything about your Pets

### Add a new pet to the store

Add a new pet to the store

```http
POST /pet
```

#### 请求体

**内容类型:** `application/json`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


#### 响应

**状态码:** 405

**描述:** Invalid input

### Update an existing pet

Update an existing pet

```http
PUT /pet
```

#### 请求体

**内容类型:** `application/json`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


#### 响应

**状态码:** 400

**描述:** Invalid ID supplied

**状态码:** 404

**描述:** Pet not found

**状态码:** 405

**描述:** Validation exception

### Multiple status values can be provided with comma separated strings

Multiple status values can be provided with comma separated strings

```http
GET /pet/findByStatus
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| status | query | string[] | 是 | Status values that need to be considered for filter |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

数组, 项目类型: object

**内容类型:** `application/json`

数组, 项目类型: object

**状态码:** 400

**描述:** Invalid status value

### Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```http
GET /pet/findByTags
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| tags | query | string[] | 是 | Tags to filter by |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

数组, 项目类型: object

**内容类型:** `application/json`

数组, 项目类型: object

**状态码:** 400

**描述:** Invalid tag value

### Returns a single pet

Returns a single pet

```http
GET /pet/{petId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| petId | path | integer | 是 | ID of pet to return |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | string[] | 是 | 无描述 |
| tags | object[] | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| name | string | 否 | 无描述 |


**状态码:** 400

**描述:** Invalid ID supplied

**状态码:** 404

**描述:** Pet not found

**状态码:** default

**描述:** successful response

### Updates a pet in the store with form data

Updates a pet in the store with form data

```http
POST /pet/{petId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| petId | path | integer | 是 | ID of pet that needs to be updated |

#### 请求体

**内容类型:** `application/x-www-form-urlencoded`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| name | string | 否 | Updated name of the pet |
| status | string | 否 | Updated status of the pet |


#### 响应

**状态码:** 405

**描述:** Invalid input

### Deletes a pet

Deletes a pet

```http
DELETE /pet/{petId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| api_key | header | string | 否 | 无描述 |
| petId | path | integer | 是 | Pet id to delete |

#### 响应

**状态码:** 400

**描述:** Invalid ID supplied

**状态码:** 404

**描述:** Pet not found

### Uploads an image

Uploads an image

```http
POST /pet/{petId}/uploadImage
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| petId | path | integer | 是 | ID of pet to update |

#### 请求体

**内容类型:** `multipart/form-data`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| additionalMetadata | string | 否 | Additional data to pass to server |
| file | string | 否 | file to upload |


#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| code | integer | 否 | 无描述 |
| type | string | 否 | 无描述 |
| message | string | 否 | 无描述 |


## store

Access to Petstore orders

### Returns a map of status codes to quantities

Returns a map of status codes to quantities

```http
GET /store/inventory
```

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/json`

object

### Place an order for a pet

Place an order for a pet

```http
POST /store/order
```

#### 请求体

**内容类型:** `application/json`

**描述:** order placed for purchasing the pet

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| petId | integer | 否 | 无描述 |
| quantity | integer | 否 | 无描述 |
| shipDate | string | 否 | 无描述 |
| status | string | 否 | Order Status |
| complete | boolean | 否 | 无描述 |


#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| petId | integer | 否 | 无描述 |
| quantity | integer | 否 | 无描述 |
| shipDate | string | 否 | 无描述 |
| status | string | 否 | Order Status |
| complete | boolean | 否 | 无描述 |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| petId | integer | 否 | 无描述 |
| quantity | integer | 否 | 无描述 |
| shipDate | string | 否 | 无描述 |
| status | string | 否 | Order Status |
| complete | boolean | 否 | 无描述 |


**状态码:** 400

**描述:** Invalid Order

### For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

```http
GET /store/order/{orderId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| orderId | path | integer | 是 | ID of pet that needs to be fetched |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| petId | integer | 否 | 无描述 |
| quantity | integer | 否 | 无描述 |
| shipDate | string | 否 | 无描述 |
| status | string | 否 | Order Status |
| complete | boolean | 否 | 无描述 |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| petId | integer | 否 | 无描述 |
| quantity | integer | 否 | 无描述 |
| shipDate | string | 否 | 无描述 |
| status | string | 否 | Order Status |
| complete | boolean | 否 | 无描述 |


**状态码:** 400

**描述:** Invalid ID supplied

**状态码:** 404

**描述:** Order not found

### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| orderId | path | integer | 是 | ID of the order that needs to be deleted |

#### 响应

**状态码:** 400

**描述:** Invalid ID supplied

**状态码:** 404

**描述:** Order not found

## user

Operations about user

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
POST /user
```

#### 请求体

**内容类型:** `application/json`

**描述:** Created user object

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| username | string | 否 | 无描述 |
| firstName | string | 否 | 无描述 |
| lastName | string | 否 | 无描述 |
| email | string | 否 | 无描述 |
| password | string | 否 | 无描述 |
| phone | string | 否 | 无描述 |
| userStatus | integer | 否 | User Status |


#### 响应

**状态码:** default

**描述:** successful operation

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithArray
```

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

#### 响应

**状态码:** default

**描述:** successful operation

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithList
```

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

#### 响应

**状态码:** default

**描述:** successful operation

### Logs user into the system

Logs user into the system

```http
GET /user/login
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | query | string | 是 | The user name for login |
| password | query | string | 是 | The password for login in clear text |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

string

**内容类型:** `application/json`

string

**状态码:** 400

**描述:** Invalid username/password supplied

### Logs out current logged in user session

Logs out current logged in user session

```http
GET /user/logout
```

#### 响应

**状态码:** default

**描述:** successful operation

### Get user by user name

Get user by user name

```http
GET /user/{username}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | The name that needs to be fetched. Use user1 for testing.  |

#### 响应

**状态码:** 200

**描述:** successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| username | string | 否 | 无描述 |
| firstName | string | 否 | 无描述 |
| lastName | string | 否 | 无描述 |
| email | string | 否 | 无描述 |
| password | string | 否 | 无描述 |
| phone | string | 否 | 无描述 |
| userStatus | integer | 否 | User Status |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| username | string | 否 | 无描述 |
| firstName | string | 否 | 无描述 |
| lastName | string | 否 | 无描述 |
| email | string | 否 | 无描述 |
| password | string | 否 | 无描述 |
| phone | string | 否 | 无描述 |
| userStatus | integer | 否 | User Status |


**状态码:** 400

**描述:** Invalid username supplied

**状态码:** 404

**描述:** User not found

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
PUT /user/{username}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | name that need to be updated |

#### 请求体

**内容类型:** `application/json`

**描述:** Updated user object

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| username | string | 否 | 无描述 |
| firstName | string | 否 | 无描述 |
| lastName | string | 否 | 无描述 |
| email | string | 否 | 无描述 |
| password | string | 否 | 无描述 |
| phone | string | 否 | 无描述 |
| userStatus | integer | 否 | User Status |


#### 响应

**状态码:** 400

**描述:** Invalid user supplied

**状态码:** 404

**描述:** User not found

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | The name that needs to be deleted |

#### 响应

**状态码:** 400

**描述:** Invalid username supplied

**状态码:** 404

**描述:** User not found
