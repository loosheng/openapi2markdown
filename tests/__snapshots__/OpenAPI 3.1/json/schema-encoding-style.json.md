# Encoding `style` serialization support

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#encoding-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Form style serialization

Form style serialization

```http
PUT /form/primitive
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| array | string[] | No | No description |
| object | object | No | No description |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | No description |
| bar | string | No | No description |
