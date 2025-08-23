# API definition with a circular path $refs

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/anything

## Default

### 

```http
GET /anything
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dateTime | string | No | No description |
| offsetAfter | object | No | No description |
| offsetBefore | object | No | No description |


### 

```http
POST /anything
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| circular | object | No | No description |


#### Responses

### This operation is different because it has a circular ref array as a parameter and in its response, but not its request body.

This operation is different because it has a circular ref array as a parameter and in its response, but not its request body.

```http
PUT /anything
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| content | header | object[] | No | No description |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

**Status Code:** 201

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| stock | unknown | No | No description |
