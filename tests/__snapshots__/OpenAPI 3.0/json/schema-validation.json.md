# Request Schema Validation

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#path-item-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Number validation

Number validation

```http
GET /anything/numbers
```

#### Responses

**Status Code:** 200

**Description:** OK

### String validation

String validation

```http
GET /anything/strings
```

#### Responses

**Status Code:** 200

**Description:** OK

### Formats defined by JSON Schema

Formats defined by JSON Schema

```http
GET /anything/jsonschema-formats
```

#### Responses

**Status Code:** 200

**Description:** OK

### Formats defined by OpenAPI

Formats defined by OpenAPI

```http
GET /anything/oas-formats
```

#### Responses

**Status Code:** 200

**Description:** OK

### Booleans

Booleans

```http
GET /anything/booleans
```

#### Responses

**Status Code:** 200

**Description:** OK
