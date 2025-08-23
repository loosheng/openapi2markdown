# Circular reference examples

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/

## Default

### 

```http
PUT /nestedTest
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | No description |
| arr | array | No | No description |
| obj | object | No | No description |


#### Responses

### 

```http
PUT /circular
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| Authorization | header | string | Yes | API key. |

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | object | No | A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do. |
| typename | string | No | No description |


#### Responses

### This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

```http
POST /not-quite-circular
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| rules | object | No | No description |


#### Responses
