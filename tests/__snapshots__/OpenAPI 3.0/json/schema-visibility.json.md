# readOnly and writeOnly visibility support

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-20

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### This operation has a `requestBody` with a `readOnly` and a `writeOnly` property, as well as a response with the same. `writeOnly` properties should show up in the form and `readOnly` properties should show up in response examples.

```http
POST /
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| propWithReadOnly | string | No | - |
| propWithWriteOnly | string | No | - |


#### Responses

**200**

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| propWithReadOnly | string | No | - |
| propWithWriteOnly | string | No | - |
