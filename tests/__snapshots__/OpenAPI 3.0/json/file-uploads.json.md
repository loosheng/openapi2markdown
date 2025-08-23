# File uploading support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#considerations-for-file-uploads

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## image/png

### Support for a `requestBody` with an `image/png` media type to upload a single image binary.

https://swagger.io/docs/specification/describing-request-body/file-upload/

Support for a `requestBody` with an `image/png` media type to upload a single image binary.

https://swagger.io/docs/specification/describing-request-body/file-upload/

```http
POST /anything/image-png
```

#### Request Body

**Content Type:** `image/png`

string

#### Responses

## multipart/form-data

### Support for a `requestBody` with a `multipart/form-data` media type.

https://swagger.io/docs/specification/describing-request-body/file-upload/

Support for a `requestBody` with a `multipart/form-data` media type.

https://swagger.io/docs/specification/describing-request-body/file-upload/

```http
POST /anything/multipart-formdata
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orderId | integer | No | No description |
| userId | integer | No | No description |
| documentFile | string | No | No description |


#### Responses

### Support for a `requestBody` with a `multipart/form-data` containing multiple files.

https://swagger.io/docs/specification/describing-request-body/file-upload/

Support for a `requestBody` with a `multipart/form-data` containing multiple files.

https://swagger.io/docs/specification/describing-request-body/file-upload/

```http
PUT /anything/multipart-formdata
```

#### Request Body

**Content Type:** `multipart/form-data`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| filename | array | No | No description |


#### Responses
