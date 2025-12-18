# Support for cases where multiple alternate security types (AND, OR, AND OR) are listed

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#securitySchemeObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### Multiple forms of auth are required (&&)

```http
POST /anything/and
```

### Two forms of auth can be used, only one is required (||)

```http
POST /anything/or
```

### Two security flows are present, one of which has multiple forms of required auth (&& ||)

```http
POST /anything/and-or
```

### Many security flows are present, each with multiple forms of required auth (&& ||)

```http
POST /anything/many-and-or
```
