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

**Operation ID:** `getUserListUsingPOST`

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
