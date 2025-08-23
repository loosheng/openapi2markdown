# Common parameters

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#path-item-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### [get] Description

[get] Description

```http
GET /anything/{id}
```

#### Responses

### [post] Description

[post] Description

```http
POST /anything/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| limit | query | integer | No | The numbers of items to return. |

#### Responses

### [get] Description

[get] Description

```http
GET /anything/{id}/{action}
```

#### Responses

### [get] Description

[get] Description

```http
GET /anything/{id}/{action}/{id}
```

#### Responses

### 

```http
GET /anything/{id}/override
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | A comma-separated list of IDs |

#### Responses
