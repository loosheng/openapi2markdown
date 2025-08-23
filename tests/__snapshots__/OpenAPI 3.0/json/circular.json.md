# API definition with a circular $ref

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### 

```http
GET /anything
```

#### Responses

**Status Code:** 404

**Description:** Not found

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| statusCode | integer | No | No description |
| error | string | No | No description |
| inner | object | No | No description |
| canBeRetried | string | No | No description |
| detailedErrorCode | integer | No | No description |
