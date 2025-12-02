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
| username | path | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** The User

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | No description |
| uuid | string | No | No description |


### 

```http
GET /2.0/repositories/{username}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** repositories owned by the supplied user

**Content Type:** `application/json`

Array, item type: object

### 

```http
GET /2.0/repositories/{username}/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | No description |
| slug | path | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** The repository

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| slug | string | No | No description |
| owner | object | No | No description |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | No description |
| uuid | string | No | No description |


### 

```http
GET /2.0/repositories/{username}/{slug}/pullrequests
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | No description |
| slug | path | string | Yes | No description |
| state | query | string | No | No description |

#### Responses

**Status Code:** 200

**Description:** an array of pull request objects

**Content Type:** `application/json`

Array, item type: object

### 

```http
GET /2.0/repositories/{username}/{slug}/pullrequests/{pid}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | No description |
| slug | path | string | Yes | No description |
| pid | path | string | Yes | No description |

#### Responses

**Status Code:** 200

**Description:** a pull request object

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| title | string | No | No description |
| repository | object | No | No description |
| author | object | No | No description |


**repository 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| slug | string | No | No description |
| owner | object | No | No description |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | No description |
| uuid | string | No | No description |


**author 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| username | string | No | No description |
| uuid | string | No | No description |


### 

```http
POST /2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| username | path | string | Yes | No description |
| slug | path | string | Yes | No description |
| pid | path | string | Yes | No description |

#### Responses

**Status Code:** 204

**Description:** the PR was successfully merged
