# xx-api-doc

xxxx接口文档

**Version:** 3.0

## Servers

- **URL:** http://127.0.0.1:8080

  **Description:** Inferred Url

## 互动服务

Care Interaction App Facade

### 获取user列表

获取user列表

```http
POST /app/careInteraction/getInteractionUserList
```

#### Request Body

**Content Type:** `application/json`

**Schema:** 用户_管理员列表查询DTO

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| keyword | string | No | 查询关键字 |
| userName | string | No | 用户姓名 |
| userType | integer | No | 用户类型 |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `*/*`

**Schema:** AjaxResult«用户列表vo»

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | No description |
| data | object | No | No description |
| message | string | No | No description |


**data 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| normalList | object[] | No | 普通用户列表 |
| adminList | object[] | No | 管理员列表 |


**normalList 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| avatar | string | No | 用户头像 |
| userId | string | No | 用户id |
| userName | string | No | 用户姓名 |


**adminList 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| avatar | string | No | 用户头像 |
| userId | string | No | 用户id |
| userName | string | No | 用户姓名 |


**Status Code:** 201

**Description:** Created

**Status Code:** 401

**Description:** Unauthorized

**Status Code:** 403

**Description:** Forbidden

**Status Code:** 404

**Description:** Not Found
