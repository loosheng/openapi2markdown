# Extreme parameter cases

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#parameter-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Utilizes all available parameter types.

Utilizes all available parameter types.

```http
POST /anything/all-param-types/{id}/{id2}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | integer | Yes | Path ID |
| id2 | path | integer | Yes | Another path ID |
| cookieString | cookie | string | No | Cookie value that accepts a string |
| cookieInt | cookie | integer | No | Cookie that accepts an integer |
| queryParam | query | string | No | Query string parameter |
| queryParam2 | query | string | No | Another query string parameter |
| x-header-value | header | string | No | Custom header |
| x-header-data | header | string | No | Another custom header |

#### Request Body

**Content Type:** `application/json`

**Description:** Pet object that needs to be added to the store

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | No | No description |
| status | string | No | An enum with available options |


#### Responses
