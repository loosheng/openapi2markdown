# x-www-form-urlencoded support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#support-for-x-www-form-urlencoded-request-bodies

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Demo handling of formData

Demo handling of formData

```http
POST /anything
```

**Operation ID:** `demoFormData`

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| client_id | string | Yes | No description |
| client_secret | string | Yes | No description |
| scope | integer | No | No description |


#### Responses

**Status Code:** 200

**Description:** Valid Token

**Content Type:** `application/json`

**Schema:** Token

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| access_token | integer | Yes | No description |
| token_type | string | Yes | No description |
| expires_in | integer | Yes | No description |
