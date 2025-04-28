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

**操作 ID:** `addPet`

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
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


#### 响应

### Update an existing pet

Update an existing pet

```http
PUT /pet
```

**操作 ID:** `updatePet`

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
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**内容类型:** `application/xml`

**描述:** Pet object that needs to be added to the store

**必填:** 是

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


#### 响应

### Multiple status values can be provided with comma separated strings

Multiple status values can be provided with comma separated strings

```http
GET /pet/findByStatus
```

**操作 ID:** `findPetsByStatus`

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

### Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```http
GET /pet/findByTags
```

**操作 ID:** `findPetsByTags`

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

### Returns a single pet

Returns a single pet

```http
GET /pet/{petId}
```

**操作 ID:** `getPetById`

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
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


**内容类型:** `application/json`

**属性:**

| 名称 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- |
| id | integer | 否 | 无描述 |
| category | object | 否 | 无描述 |
| name | string | 是 | 无描述 |
| photoUrls | array | 是 | 无描述 |
| tags | array | 否 | 无描述 |
| status | string | 否 | pet status in the store |


### Updates a pet in the store with form data

Updates a pet in the store with form data

```http
POST /pet/{petId}
```

**操作 ID:** `updatePetWithForm`

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

### Deletes a pet

Deletes a pet

```http
DELETE /pet/{petId}
```

**操作 ID:** `deletePet`

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| api_key | header | string | 否 | 无描述 |
| petId | path | integer | 是 | Pet id to delete |

#### 响应

### Uploads an image

Uploads an image

```http
POST /pet/{petId}/uploadImage
```

**操作 ID:** `uploadFile`

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

**操作 ID:** `getInventory`

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

**操作 ID:** `placeOrder`

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


### For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

```http
GET /store/order/{orderId}
```

**操作 ID:** `getOrderById`

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


### For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

```http
DELETE /store/order/{orderId}
```

**操作 ID:** `deleteOrder`

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| orderId | path | integer | 是 | ID of the order that needs to be deleted |

#### 响应

## user

Operations about user

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
POST /user
```

**操作 ID:** `createUser`

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

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithArray
```

**操作 ID:** `createUsersWithArrayInput`

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

#### 响应

### Creates list of users with given input array

Creates list of users with given input array

```http
POST /user/createWithList
```

**操作 ID:** `createUsersWithListInput`

#### 请求体

**内容类型:** `application/json`

**描述:** List of user object

**必填:** 是

数组, 项目类型: object

#### 响应

### Logs user into the system

Logs user into the system

```http
GET /user/login
```

**操作 ID:** `loginUser`

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

### Logs out current logged in user session

Logs out current logged in user session

```http
GET /user/logout
```

**操作 ID:** `logoutUser`

#### 响应

### Get user by user name

Get user by user name

```http
GET /user/{username}
```

**操作 ID:** `getUserByName`

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


### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
PUT /user/{username}
```

**操作 ID:** `updateUser`

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

### This can only be done by the logged in user.

This can only be done by the logged in user.

```http
DELETE /user/{username}
```

**操作 ID:** `deleteUser`

#### 参数

| 名称 | 位置 | 类型 | 必填 | 描述 |
| -- | -- | -- | -- | -- |
| username | path | string | 是 | The name that needs to be deleted |

#### 响应
