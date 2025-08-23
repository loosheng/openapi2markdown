# Polymorphism support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Default

### oneOf request with a nested allOf

oneOf request with a nested allOf

```http
PATCH /pets
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

### allOf with listed objects

allOf with listed objects

```http
POST /anything/all-of-object
```

#### Request Body

**Content Type:** `application/json`

object

#### Responses

### anyOf object

anyOf object

```http
POST /anything/any-of-object
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

### anyOf primitive

anyOf primitive

```http
POST /anything/any-of-primitive
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

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
| event | string | No | No description |


#### Responses

### oneOf object

oneOf object

```http
POST /anything/one-of-object
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

### oneOf primitive

oneOf primitive

```http
POST /anything/one-of-primitive
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

### oneOf object with $ref pointers

oneOf object with $ref pointers

```http
POST /anything/one-of-object-ref
```

#### Request Body

**Content Type:** `application/json`

Unknown type

#### Responses

### oneOf object with a complex schema

oneOf object with a complex schema

```http
POST /one-of-complex
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

object

#### Responses

### nested oneOf object with $ref pointers

nested oneOf object with $ref pointers

```http
POST /anything/nested-one-of-object-ref
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| config | unknown | No | No description |


#### Responses

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
| config | unknown | No | No description |


#### Responses

### 

```http
POST /anything/nested-one-of-object-with-nested-one-of
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| config | unknown | No | No description |


#### Responses

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
| event | string | No | No description |


#### Responses
