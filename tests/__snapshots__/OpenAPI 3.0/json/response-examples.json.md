# Response example support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#mediaTypeObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/

## Default

### Showcase of responses with an `example` property present.

Showcase of responses with an `example` property present.

```http
GET /example
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 204

**Description:** OK

**Content Type:** `application/json`

### Showcase of responses with an `examples` property present.

Showcase of responses with an `examples` property present.

```http
GET /examples
```

#### Responses

**Status Code:** 201

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 202

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 400

**Description:** Validation failed

**Content Type:** `application/xml`

**Status Code:** default

**Description:** OK

**Content Type:** `application/json`

**Content Type:** `text/csv, text/comma-separated-values`
