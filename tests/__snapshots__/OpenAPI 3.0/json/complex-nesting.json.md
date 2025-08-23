# Responses with various schema formats

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0

## Servers

- **URL:** https://httpbin.org

## Default

### This payload is an array containing a simple flat object.

This payload is an array containing a simple flat object.

```http
POST /anything/top-level-array
```

#### Request Body

**Content Type:** `application/json`

Array, item type: object

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

### This payload is an array containing a complex payload of arrays, objects, and primitives.

This payload is an array containing a complex payload of arrays, objects, and primitives.

```http
PUT /anything/top-level-array
```

#### Request Body

**Content Type:** `application/json`

Array, item type: object

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

### This payload is an object comprised of simple flat objects.

This payload is an object comprised of simple flat objects.

```http
POST /anything/top-level-object/simple
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| nestedObject_1 | object | No | No description |
| nestedObject_2 | object | No | No description |
| nestedObject_3 | object | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| nestedObject | object | No | No description |


### Object of Everything

Object of Everything

```http
POST /top-level-object/of-everything
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| objectOfObjectsAndArrays | object | No | Object containing objects and arrays |
| arrayOfObjectsOfObjectsAndArrays | array | No | Array of objects (containing objects and arrays) |
| objectOfAdditionalProperties | object | No | Object containing an `additionalProperties` declaration that's comprised of a polymorphic `oneOf`. |
| string | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| objectOfObjectsAndArrays | object | No | Object containing objects and arrays |
| arrayOfObjectsOfObjectsAndArrays | array | No | Array of objects (containing objects and arrays) |
| objectOfAdditionalProperties | object | No | Object containing an `additionalProperties` declaration that's comprised of a polymorphic `oneOf`. |
| string | string | No | No description |


### Multischema of Everything

Multischema of Everything

```http
POST /multischema/of-everything
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Unknown type
