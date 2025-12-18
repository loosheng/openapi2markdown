# x-www-form-urlencoded support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#support-for-x-www-form-urlencoded-request-bodies

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Demo handling of formData

```http
POST /anything
```

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| client_id | string | Yes | - |
| client_secret | string | Yes | - |
| scope | integer | No | - |


#### Responses

**200** - Valid Token

**Content Type:** `application/json`

**Schema:** Token

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| access_token | integer | Yes | - |
| token_type | string | Yes | - |
| expires_in | integer | Yes | - |
