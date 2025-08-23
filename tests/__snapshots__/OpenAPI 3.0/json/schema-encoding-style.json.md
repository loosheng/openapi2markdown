# Encoding `style` serialization support

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encoding-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Form style serialization

Form style serialization

```http
PUT /form/primitive
```

**Operation ID:** `encoding_form`

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| array | array | No | No description |
| object | object | No | No description |


#### Responses
