# Simple Petstore

This is a slimmed down single path version of the Petstore definition.

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## pet

### This operation will update a pet in the database.

This operation will update a pet in the database.

```http
PUT /pet/{id}
```

#### Responses

**Status Code:** 400

**Description:** Invalid id value

### This operation will find a pet in the database.

This operation will find a pet in the database.

```http
GET /pet/{id}
```

#### Responses

**Status Code:** 400

**Description:** Invalid status value
