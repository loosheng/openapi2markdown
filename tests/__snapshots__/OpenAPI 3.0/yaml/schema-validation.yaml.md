# Request Schema Validation

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#path-item-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Number validation

```http
GET /anything/numbers
```

### String validation

```http
GET /anything/strings
```

### Formats defined by JSON Schema

```http
GET /anything/jsonschema-formats
```

### Formats defined by OpenAPI

```http
GET /anything/oas-formats
```

### Booleans

```http
GET /anything/booleans
```
