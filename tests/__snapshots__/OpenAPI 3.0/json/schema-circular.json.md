# Circular reference examples

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/

## Default

### 

```http
PUT /nestedTest
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foo | string | No | No description |
| arr | array[] | No | No description |
| obj | object | No | No description |


**obj 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff | object | No | No description |


**ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| fooa | object | No | No description |


**fooa 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foob: | object | No | No description |


**foob: 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| fooc | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

### 

```http
PUT /circular
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| Authorization | header | string | Yes | API key. |

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| file | object | No | A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do. |
| typename | string | No | No description |


**file 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| name | string | No | No description |
| value | string | No | No description |
| formDataContentDisposition | object | No | No description |
| simple | boolean | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| subtype | string | No | No description |
| parameters | object | No | No description |
| wildcardType | boolean | No | No description |
| wildcardSubtype | boolean | No | No description |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| bodyParts | object[] | No | No description |
| parameterizedHeaders | object | No | No description |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | No description |
| entity | object | No | No description |
| headers | object | No | No description |
| mediaType | object | No | No description |
| messageBodyWorkers | object | No | No description |
| parent | object | No | No description |
| providers | object | No | No description |
| parameterizedHeaders | object | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


**formDataContentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | No description |
| parameters | object | No | No description |
| fileName | string | No | No description |
| creationDate | string | No | No description |
| modificationDate | string | No | No description |
| readDate | string | No | No description |
| size | integer | No | No description |
| name | string | No | No description |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | No description |


#### Responses

**Status Code:** 200

**Description:** Successfully processed.

**Status Code:** 400

**Description:** Invalid payload. This can be due to invalid headers or form-data params.

**Status Code:** 401

**Description:** Permissions error. The Authorization header may be missing, the value may be invalid or the associated organization/user does not have permission to modify the specified typename.

**Status Code:** 500

**Description:** Server error. Something unexpected happened while processing the request. Try again later.

### This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

```http
POST /not-quite-circular
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | No description |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | No description |
| offsetAfter | object | No | No description |
| dateTimeAfter | string | No | No description |
| dateTimeBefore | string | No | No description |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | No description |
| rules | object | No | No description |


#### Responses

**Status Code:** 200

**Description:** successful operation
