# Link Example

**Version:** 1.0.0

## Default

### 

```http
GET /2.0/users/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |

#### Responses

**200** - The User

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | - |
| uuid | string | No | - |


### 

```http
GET /2.0/repositories/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |

#### Responses

**200** - repositories owned by the supplied user

**Content Type:** `application/json`

Array, item type: object

### 

```http
GET /2.0/repositories/{username}/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |
| slug | path | string | Yes | - |

#### Responses

**200** - The repository

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| slug | string | No | - |
| owner | object | No | - |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | - |
| uuid | string | No | - |


### 

```http
GET /2.0/repositories/{username}/{slug}/pullrequests
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |
| slug | path | string | Yes | - |
| state | query | string | No | - |

#### Responses

**200** - an array of pull request objects

**Content Type:** `application/json`

Array, item type: object

### 

```http
GET /2.0/repositories/{username}/{slug}/pullrequests/{pid}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |
| slug | path | string | Yes | - |
| pid | path | string | Yes | - |

#### Responses

**200** - a pull request object

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| title | string | No | - |
| repository | object | No | - |
| author | object | No | - |


**repository 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| slug | string | No | - |
| owner | object | No | - |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | - |
| uuid | string | No | - |


**author 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | - |
| uuid | string | No | - |


### 

```http
POST /2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | - |
| slug | path | string | Yes | - |
| pid | path | string | Yes | - |
