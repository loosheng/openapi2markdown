# HTTP test

This is a sample definition to test unique HTTP behavior.

**Version:** 1.0.0

## Servers

- **URL:** http://httpbin.org

## Default

### Making this request without these parameters should make an uncached request. When you provide `if-modified-since` or `if-none-match` you should return a `304 Not Modified`.

Making this request without these parameters should make an uncached request. When you provide `if-modified-since` or `if-none-match` you should return a `304 Not Modified`.

```http
GET /cache
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| If-Modified-Since | header | string | No | An RFC 3339 formatted `date-time` string, preferably in UTC. If the resource was last updated before the provided `date-time`, the server should return a `304 Not Modified` response, otherwise a 200 with an accurate `last-modified` time. |
| If-None-Match | header | string | No | If you provide a value here, it will be checked against the generated ETAG of the target resource. If they match, you'll get a `304 Not Modified` response, otherwise a `200 OK` with a new ETAG. |

#### Responses

**Status Code:** default

**Description:** successful response

### Returns a `302 Found` status

Returns a `302 Found` status

```http
GET /status/302
```

#### Responses

**Status Code:** default

**Description:** successful response

### Returns a `204 No Content` with no body

Returns a `204 No Content` with no body

```http
GET /status/204
```

#### Responses

**Status Code:** default

**Description:** successful response
