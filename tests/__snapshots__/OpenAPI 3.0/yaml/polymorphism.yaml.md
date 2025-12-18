# Polymorphism support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### oneOf request with a nested allOf

```http
PATCH /pets
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### allOf with listed objects

```http
POST /anything/all-of-object
```

#### Request Body

**Content Type:** `application/json`

object

### anyOf object

```http
POST /anything/any-of-object
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### anyOf primitive

```http
POST /anything/any-of-primitive
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### AnyOf's with a top level type parameter should not render that type outside of their options

AnyOf's with a top level type parameter should not render that type outside of their options

```http
POST /any-of-with-type
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| event | string | No | - |


### oneOf object

```http
POST /anything/one-of-object
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### oneOf primitive

```http
POST /anything/one-of-primitive
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### oneOf object with $ref pointers

```http
POST /anything/one-of-object-ref
```

#### Request Body

**Content Type:** `application/json`

Unknown type

### oneOf object with a complex schema

```http
POST /one-of-complex
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

object

### nested oneOf object with $ref pointers

```http
POST /anything/nested-one-of-object-ref
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| config | unknown | No | - |


### 

```http
POST /anything/nested-one-of-ref
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| config | unknown | No | - |


### 

```http
POST /anything/nested-one-of-object-with-nested-one-of
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| config | unknown | No | - |


### OneOf's with a top level type parameter should not render that type outside of their options

OneOf's with a top level type parameter should not render that type outside of their options

```http
POST /one-of-with-type
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| event | string | No | - |
