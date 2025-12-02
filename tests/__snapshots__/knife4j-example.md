# Knife4j RESTFul API

Knife4j-Desktop OpenAPI3 Demo

**Version:** 1.0

## Servers

- **URL:** http://127.0.0.1:17812

  **Description:** Generated server url

## body参数

### 普通body请求-put

普通body请求-put

```http
PUT /body/bodyPut
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 普通body请求

普通body请求

```http
POST /body/body
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 普通body请求+Param

普通body请求+Param

```http
POST /body/bodyParam
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| name | query | string | Yes | No description |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 普通body请求+Param+Header

普通body请求+Param+Header

```http
POST /body/bodyParamHeader
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| token | header | string | Yes | 请求token |
| name | query | string | Yes | 文件名称 |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 普通body请求+Param+Header+Path

普通body请求+Param+Header+Path

```http
POST /body/bodyParamHeaderPath/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | 文件id |
| token | header | string | Yes | 请求token |
| name | query | string | Yes | 文件名称 |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


## 用户模块

### body请求

body请求

```http
POST /user/{deviceId}/body
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| deviceId | path | string | Yes | 设备id |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

object

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


### body请求1

body请求1

```http
POST /user/{deviceId}/body1
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| deviceId | path | string | Yes | 设备id |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


### json参数查询1

json参数查询1

```http
POST /user/getRequest1
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| cade | query | string | Yes | No description |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


### 根据姓名创建用户1

根据姓名创建用户1

```http
POST /user/createOne
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |


### 根据姓名创建用户1

根据姓名创建用户1

```http
POST /user/createOneSchema
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


### 根据姓名创建用户1

根据姓名创建用户1

```http
POST /user/createOne1
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | query | string | No | No description |
| name | query | string | No | No description |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |


### json参数查询

json参数查询

```http
GET /user/getRequest
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| userSchema | query | object | Yes | No description |
| cade | query | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | 主键id |
| name | string | No | 名称 |
| partSchema | object | No | Part信息 |


**partSchema 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | part部分id |
| name | string | No | part部分名称 |


### 根据姓名创建用户

根据姓名创建用户

```http
GET /user/create
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| name | query | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

string

## 文件上传

### 单纯文件上传，无任何参数

单纯文件上传，无任何参数

```http
POST /file/upload
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | string | Yes | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 文件上传-带参数

文件上传-带参数

```http
POST /file/uploadParam
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| name | query | string | Yes | 文件名称 |
| file | formData | string | Yes | 文件 |

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | string | Yes | 文件 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 文件上传-带参数Header

文件上传-带参数Header

```http
POST /file/uploadParamHeader
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| token | header | string | Yes | 请求token |
| name | query | string | Yes | 文件名称 |
| file | formData | string | Yes | 文件 |

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | string | Yes | 文件 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 文件上传-带参数Path

文件上传-带参数Path

```http
POST /file/uploadParam/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | 文件id |
| name | query | string | Yes | 文件名称 |
| file | formData | string | Yes | 文件 |

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | string | Yes | 文件 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| random | string | No | 随机名称 |
| name | string | No | 文件名称 |
| size | integer | No | 文件大小 |
| success | boolean | No | 是否上传成功 |


### 多文件上传

多文件上传

```http
POST /file/uploadBatch
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| file | unknown | unknown | No | 文件 |

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| files | string[] | Yes | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

Array, item type: object
