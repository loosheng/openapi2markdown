# Support for different security types

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#securitySchemeObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## API Key

### `apiKey` auth will be supplied within an `apiKey` query parameter.

`apiKey` auth will be supplied within an `apiKey` query parameter.

```http
GET /anything/apiKey
```

### `apiKey` auth will be supplied within an `api_key` cookie.

`apiKey` auth will be supplied within an `api_key` cookie.

```http
POST /anything/apiKey
```

### `apiKey` auth will be supplied within an `X-API-KEY` header.

`apiKey` auth will be supplied within an `X-API-KEY` header.

```http
PUT /anything/apiKey
```

## HTTP

### Authentication credentials will be supplied within a `Basic` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

Authentication credentials will be supplied within a `Basic` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

```http
POST /anything/basic
```

### Authentication credentials will be supplied within a `Bearer` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

Authentication credentials will be supplied within a `Bearer` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

```http
POST /anything/bearer
```

### Authentication credentials will be supplied within a `Bearer` `Authorization` header, but its data should be controlled as a JWT.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

> ℹ️
> We currently do not support any special handling for this so they're handled as a standard `Bearer` authentication token.

Authentication credentials will be supplied within a `Bearer` `Authorization` header, but its data should be controlled as a JWT.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

> ℹ️
> We currently do not support any special handling for this so they're handled as a standard `Bearer` authentication token.

```http
PUT /anything/bearer
```

## OAuth 2

### > ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

```http
POST /anything/oauth2
```

### > ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

```http
GET /anything/oauth2
```

### > ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

```http
PUT /anything/oauth2
```

### > ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

```http
PATCH /anything/oauth2
```

### > ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

```http
DELETE /anything/oauth2
```

## OpenID Connect

### 🚧 This is not supported.

🚧 This is not supported.

```http
POST /anything/openIdConnect
```

## Other

### This operation does not have any authentication requirements.

This operation does not have any authentication requirements.

```http
POST /anything/no-auth
```

### The `apiKey` query parameter auth on this operation is optional.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-requirement-object

The `apiKey` query parameter auth on this operation is optional.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-requirement-object

```http
GET /anything/optional-auth
```

### This endpoint requires an authentication header but making any request to it will forcefully return a 401 status code for invalid auth.

This endpoint requires an authentication header but making any request to it will forcefully return a 401 status code for invalid auth.

```http
POST /status/401
```
