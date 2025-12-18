# Responses with various schema formats

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

**Version:** 1.0

## Servers

- **URL:** https://httpbin.org

## Default

### Array of primitives

```http
GET /anything/array-of-primitives
```

#### Responses

**200** - OK

**Content Type:** `application/json`

Array, item type: string

### Object (also demonstrates readonly/writeonly)

```http
GET /anything/object
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | - |
| read-only | string | No | - |
| write-only | string | No | - |
| object | object | No | - |
| array | object[] | No | - |
| pets | object[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | Yes | - |
| name2 | string | No | - |
| name3 | string | No | - |
| name4 | string | No | - |
| name5 | string | No | - |
| name6 | string | No | - |
| name7 | string | No | - |
| name8 | string | No | - |
| name9 | string | No | - |
| name10 | string | No | - |
| name11 | string | No | - |
| name12 | string | No | - |
| name13 | string | No | - |
| name14 | string | No | - |
| name15 | string | No | - |
| name16 | string | No | - |
| name17 | string | No | - |
| name18 | string | No | - |
| name19 | string | No | - |
| photoUrls | string[] | Yes | - |
| status | string | No | pet status in the store |


#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | - |
| read-only | string | No | - |
| write-only | string | No | - |
| object | object | No | - |
| array | object[] | No | - |
| pets | object[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | Yes | - |
| name2 | string | No | - |
| name3 | string | No | - |
| name4 | string | No | - |
| name5 | string | No | - |
| name6 | string | No | - |
| name7 | string | No | - |
| name8 | string | No | - |
| name9 | string | No | - |
| name10 | string | No | - |
| name11 | string | No | - |
| name12 | string | No | - |
| name13 | string | No | - |
| name14 | string | No | - |
| name15 | string | No | - |
| name16 | string | No | - |
| name17 | string | No | - |
| name18 | string | No | - |
| name19 | string | No | - |
| photoUrls | string[] | Yes | - |
| status | string | No | pet status in the store |


### Markdown

```http
GET /anything/markdown
```

#### Responses

**200** - Test
 - Bullet one
 - Bullet two
 *italics*

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | - |
| read-only | string | No | - |
| write-only | string | No | - |
| object | object | No | - |
| array | object[] | No | - |
| pets | object[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | Yes | - |
| name2 | string | No | - |
| name3 | string | No | - |
| name4 | string | No | - |
| name5 | string | No | - |
| name6 | string | No | - |
| name7 | string | No | - |
| name8 | string | No | - |
| name9 | string | No | - |
| name10 | string | No | - |
| name11 | string | No | - |
| name12 | string | No | - |
| name13 | string | No | - |
| name14 | string | No | - |
| name15 | string | No | - |
| name16 | string | No | - |
| name17 | string | No | - |
| name18 | string | No | - |
| name19 | string | No | - |
| photoUrls | string[] | Yes | - |
| status | string | No | pet status in the store |


**400** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | string | No | - |
| read-only | string | No | - |
| write-only | string | No | - |
| object | object | No | - |
| array | object[] | No | - |
| pets | object[] | No | - |


**object 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**array 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| primitive | boolean | No | - |


**pets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | - |
| name | string | Yes | - |
| name2 | string | No | - |
| name3 | string | No | - |
| name4 | string | No | - |
| name5 | string | No | - |
| name6 | string | No | - |
| name7 | string | No | - |
| name8 | string | No | - |
| name9 | string | No | - |
| name10 | string | No | - |
| name11 | string | No | - |
| name12 | string | No | - |
| name13 | string | No | - |
| name14 | string | No | - |
| name15 | string | No | - |
| name16 | string | No | - |
| name17 | string | No | - |
| name18 | string | No | - |
| name19 | string | No | - |
| photoUrls | string[] | Yes | - |
| status | string | No | pet status in the store |


### Array of objects

```http
GET /anything/array-of-objects
```

#### Responses

**200** - OK

**Content Type:** `application/json`

Array, item type: object

### Polymorphism

```http
GET /anything/polymorphism
```

#### Responses

**200** - OK

**Content Type:** `application/json`

Unknown type

### Recursive $ref lookup

```http
GET /anything/recursive
```

#### Responses

**200** - OK

**Content Type:** `application/json`

Array, item type: object

### This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.

This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.

```http
GET /anything/returns-as-json-but-is-actually-string
```

#### Responses

**200** - OK

**Content Type:** `application/json`

string

### Object

```http
GET /multiple-responses/object
```

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| hello | string | No | - |
| there | string | No | - |


**400** - A 400 error response

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| obi | string | No | - |
| wan | string | No | - |
