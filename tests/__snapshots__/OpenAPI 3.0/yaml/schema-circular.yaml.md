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
| foo | string | No | - |
| arr | array[] | No | - |
| obj | object | No | - |


**obj 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff | object | No | - |


**ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| fooa | object | No | - |


**fooa 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| foob: | object | No | - |


**foob: 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| fooc | string | No | - |


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
| typename | string | No | - |


**file 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| name | string | No | - |
| value | string | No | - |
| formDataContentDisposition | object | No | - |
| simple | boolean | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**contentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |


**headers 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**mediaType 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| subtype | string | No | - |
| parameters | object | No | - |
| wildcardType | boolean | No | - |
| wildcardSubtype | boolean | No | - |


**parent 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| bodyParts | object[] | No | - |
| parameterizedHeaders | object | No | - |


**bodyParts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| contentDisposition | object | No | - |
| entity | object | No | - |
| headers | object | No | - |
| mediaType | object | No | - |
| messageBodyWorkers | object | No | - |
| parent | object | No | - |
| providers | object | No | - |
| parameterizedHeaders | object | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


**formDataContentDisposition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | - |
| parameters | object | No | - |
| fileName | string | No | - |
| creationDate | string | No | - |
| modificationDate | string | No | - |
| readDate | string | No | - |
| size | integer | No | - |
| name | string | No | - |


**parameterizedHeaders 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| empty | boolean | No | - |


### This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.

```http
POST /not-quite-circular
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**rules 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| transitions | object[] | No | - |


**transitions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offsetBefore | object | No | - |
| offsetAfter | object | No | - |
| dateTimeAfter | string | No | - |
| dateTimeBefore | string | No | - |


**offsetBefore 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |


**offsetAfter 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | - |
| rules | object | No | - |
