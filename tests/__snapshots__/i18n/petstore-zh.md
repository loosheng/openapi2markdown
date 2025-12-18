# Swagger Petstore

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

**版本:** 1.0.0

## 服务器

- **URL:** http://petstore.swagger.io/v2

## pet

Everything about your Pets

### Add a new pet to the store

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
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


### Update an existing pet

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
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


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

**200** - successful operation

**内容类型:** `application/xml`

数组, 项目类型: object

**内容类型:** `application/json`

数组, 项目类型: object

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

**200** - successful operation

**内容类型:** `application/xml`

数组, 项目类型: object

**内容类型:** `application/json`

数组, 项目类型: object

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

**200** - successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| category | object | 否 | - |
| name | string | 是 | - |
| photoUrls | string[] | 是 | - |
| tags | object[] | 否 | - |
| status | string | 否 | pet status in the store |


**category 对象结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


**tags 数组项结构:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| name | string | 否 | - |


### Updates a pet in the store with form data

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


### Deletes a pet

```http
DELETE /pet/{petId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| api_key | header | string | 否 | - |
| petId | path | integer | 是 | Pet id to delete |

### Uploads an image

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

**200** - successful operation

**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| code | integer | 否 | - |
| type | string | 否 | - |
| message | string | 否 | - |


## store

Access to Petstore orders

### Returns a map of status codes to quantities

Returns a map of status codes to quantities

```http
GET /store/inventory
```

#### 响应

**200** - successful operation

**内容类型:** `application/json`

object

### Place an order for a pet

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
| id | integer | 否 | - |
| petId | integer | 否 | - |
| quantity | integer | 否 | - |
| shipDate | string | 否 | - |
| status | string | 否 | Order Status |
| complete | boolean | 否 | - |


#### 响应

**200** - successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| petId | integer | 否 | - |
| quantity | integer | 否 | - |
| shipDate | string | 否 | - |
| status | string | 否 | Order Status |
| complete | boolean | 否 | - |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| petId | integer | 否 | - |
| quantity | integer | 否 | - |
| shipDate | string | 否 | - |
| status | string | 否 | Order Status |
| complete | boolean | 否 | - |


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

**200** - successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| petId | integer | 否 | - |
| quantity | integer | 否 | - |
| shipDate | string | 否 | - |
| status | string | 否 | Order Status |
| complete | boolean | 否 | - |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| petId | integer | 否 | - |
| quantity | integer | 否 | - |
| shipDate | string | 否 | - |
| status | string | 否 | Order Status |
| complete | boolean | 否 | - |


### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| orderId | path | integer | 是 | ID of the order that needs to be deleted |

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
| id | integer | 否 | - |
| username | string | 否 | - |
| firstName | string | 否 | - |
| lastName | string | 否 | - |
| email | string | 否 | - |
| password | string | 否 | - |
| phone | string | 否 | - |
| userStatus | integer | 否 | User Status |


### Creates list of users with given input array

```http
POST /user/createWithArray
```

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

### Creates list of users with given input array

```http
POST /user/createWithList
```

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

### Logs user into the system

```http
GET /user/login
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | query | string | 是 | The user name for login |
| password | query | string | 是 | The password for login in clear text |

#### 响应

**200** - successful operation

**内容类型:** `application/xml`

string

**内容类型:** `application/json`

string

### Logs out current logged in user session

```http
GET /user/logout
```

### Get user by user name

```http
GET /user/{username}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | The name that needs to be fetched. Use user1 for testing.  |

#### 响应

**200** - successful operation

**内容类型:** `application/xml`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| username | string | 否 | - |
| firstName | string | 否 | - |
| lastName | string | 否 | - |
| email | string | 否 | - |
| password | string | 否 | - |
| phone | string | 否 | - |
| userStatus | integer | 否 | User Status |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | - |
| username | string | 否 | - |
| firstName | string | 否 | - |
| lastName | string | 否 | - |
| email | string | 否 | - |
| password | string | 否 | - |
| phone | string | 否 | - |
| userStatus | integer | 否 | User Status |


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
| id | integer | 否 | - |
| username | string | 否 | - |
| firstName | string | 否 | - |
| lastName | string | 否 | - |
| email | string | 否 | - |
| password | string | 否 | - |
| phone | string | 否 | - |
| userStatus | integer | 否 | User Status |


### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | The name that needs to be deleted |
