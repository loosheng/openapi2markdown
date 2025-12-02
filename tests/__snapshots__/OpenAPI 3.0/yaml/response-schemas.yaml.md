# Responses with various schema formats

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0

## Servers

- **URL:** https://httpbin.org

## Default

### Array of primitives

Array of primitives

```http
GET /anything/array-of-primitives
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: string

### Object (also demonstrates readonly/writeonly)

Object (also demonstrates readonly/writeonly)

```http
GET /anything/object
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| read-only | string | No | No description |
| write-only | string | No | No description |
| object | object | No | No description |
| array | object[] | No | No description |
| pets | object[] | No | No description |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| name2 | string | No | No description |
| name3 | string | No | No description |
| name4 | string | No | No description |
| name5 | string | No | No description |
| name6 | string | No | No description |
| name7 | string | No | No description |
| name8 | string | No | No description |
| name9 | string | No | No description |
| name10 | string | No | No description |
| name11 | string | No | No description |
| name12 | string | No | No description |
| name13 | string | No | No description |
| name14 | string | No | No description |
| name15 | string | No | No description |
| name16 | string | No | No description |
| name17 | string | No | No description |
| name18 | string | No | No description |
| name19 | string | No | No description |
| photoUrls | string[] | Yes | No description |
| status | string | No | pet status in the store |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| read-only | string | No | No description |
| write-only | string | No | No description |
| object | object | No | No description |
| array | object[] | No | No description |
| pets | object[] | No | No description |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| name2 | string | No | No description |
| name3 | string | No | No description |
| name4 | string | No | No description |
| name5 | string | No | No description |
| name6 | string | No | No description |
| name7 | string | No | No description |
| name8 | string | No | No description |
| name9 | string | No | No description |
| name10 | string | No | No description |
| name11 | string | No | No description |
| name12 | string | No | No description |
| name13 | string | No | No description |
| name14 | string | No | No description |
| name15 | string | No | No description |
| name16 | string | No | No description |
| name17 | string | No | No description |
| name18 | string | No | No description |
| name19 | string | No | No description |
| photoUrls | string[] | Yes | No description |
| status | string | No | pet status in the store |


### Markdown

Markdown

```http
GET /anything/markdown
```

#### Responses

**Status Code:** 200

**Description:** Test
 - Bullet one
 - Bullet two
 *italics*

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| read-only | string | No | No description |
| write-only | string | No | No description |
| object | object | No | No description |
| array | object[] | No | No description |
| pets | object[] | No | No description |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| name2 | string | No | No description |
| name3 | string | No | No description |
| name4 | string | No | No description |
| name5 | string | No | No description |
| name6 | string | No | No description |
| name7 | string | No | No description |
| name8 | string | No | No description |
| name9 | string | No | No description |
| name10 | string | No | No description |
| name11 | string | No | No description |
| name12 | string | No | No description |
| name13 | string | No | No description |
| name14 | string | No | No description |
| name15 | string | No | No description |
| name16 | string | No | No description |
| name17 | string | No | No description |
| name18 | string | No | No description |
| name19 | string | No | No description |
| photoUrls | string[] | Yes | No description |
| status | string | No | pet status in the store |


**Status Code:** 400

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | No description |
| read-only | string | No | No description |
| write-only | string | No | No description |
| object | object | No | No description |
| array | object[] | No | No description |
| pets | object[] | No | No description |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | No description |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| name2 | string | No | No description |
| name3 | string | No | No description |
| name4 | string | No | No description |
| name5 | string | No | No description |
| name6 | string | No | No description |
| name7 | string | No | No description |
| name8 | string | No | No description |
| name9 | string | No | No description |
| name10 | string | No | No description |
| name11 | string | No | No description |
| name12 | string | No | No description |
| name13 | string | No | No description |
| name14 | string | No | No description |
| name15 | string | No | No description |
| name16 | string | No | No description |
| name17 | string | No | No description |
| name18 | string | No | No description |
| name19 | string | No | No description |
| photoUrls | string[] | Yes | No description |
| status | string | No | pet status in the store |


### Array of objects

Array of objects

```http
GET /anything/array-of-objects
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

### Polymorphism

Polymorphism

```http
GET /anything/polymorphism
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Unknown type

### Recursive $ref lookup

Recursive $ref lookup

```http
GET /anything/recursive
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

Array, item type: object

### This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.

This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.

```http
GET /anything/returns-as-json-but-is-actually-string
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

string

### Object

Object

```http
GET /multiple-responses/object
```

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| hello | string | No | No description |
| there | string | No | No description |


**Status Code:** 400

**Description:** A 400 error response

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| obi | string | No | No description |
| wan | string | No | No description |
