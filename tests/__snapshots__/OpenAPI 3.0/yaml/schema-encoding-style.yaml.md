# Encoding `style` serialization support

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encoding-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Form style serialization

```http
PUT /form/primitive
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | - |
| array | string[] | No | - |
| object | object | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | - |
| bar | string | No | - |
