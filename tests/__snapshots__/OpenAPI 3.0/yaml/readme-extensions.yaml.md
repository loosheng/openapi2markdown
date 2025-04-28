# ReadMe custom OpenAPI extensions demo

https://docs.readme.com/docs/openapi-extensions

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/anything

## Custom code samples

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

### This is a demonstration of our handling of our `x-readme.code-samples` extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

This is a demonstration of our handling of our `x-readme.code-samples` extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

```http
POST /x-code-samples
```

**Operation ID:** `x-readme_code-samples`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | No | No description |


#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Status Code:** 404

**Description:** Not Found

**Content Type:** `application/json`

### This is a demonstration of our handling of our `x-code-samples` extension.

> If this is present alongside `x-readme.code-samples` then the `x-readme.code-samples` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

This is a demonstration of our handling of our `x-code-samples` extension.

> If this is present alongside `x-readme.code-samples` then the `x-readme.code-samples` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

```http
GET /x-code-samples
```

**Operation ID:** `x-code-samples`

#### Responses

## Statically defined headers

https://docs.readme.com/docs/openapi-extensions#static-headers

### This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

https://docs.readme.com/docs/openapi-extensions#static-headers

This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

https://docs.readme.com/docs/openapi-extensions#static-headers

```http
POST /x-headers
```

**Operation ID:** `x-readme_headers`

#### Responses

### This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.headers` then the `x-readme.headers` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#static-headers

This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.headers` then the `x-readme.headers` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#static-headers

```http
PATCH /x-headers
```

**Operation ID:** `x-headers`

#### Responses

## Toggling interactivity

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

### When `x-readme.explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

When `x-readme.explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

```http
POST /x-explorer-enabled
```

**Operation ID:** `x-readme_explorer-enabled`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| photoUrls | array | Yes | No description |
| tags | array | No | No description |
| status | string | No | pet status in the store |


#### Responses

### When `x-explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.explorer-enabled` then the `x-readme.explorer-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

When `x-explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.explorer-enabled` then the `x-readme.explorer-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

```http
PATCH /x-explorer-enabled
```

**Operation ID:** `x-explorer-enabled`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | integer | No | No description |
| name | string | Yes | No description |
| photoUrls | array | Yes | No description |
| tags | array | No | No description |
| status | string | No | pet status in the store |


#### Responses

## Designate code sample languages

https://docs.readme.com/docs/openapi-extensions#code-sample-languages

### With an array of languages present in `x-readme.samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

With an array of languages present in `x-readme.samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

```http
GET /x-samples-languages
```

**Operation ID:** `x-readme_samples-languages`

#### Responses

### With an array of languages present in `x-samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

> If this is present alongside `x-readme.samples-languages` then the `x-readme.samples-languages` extension will take precedence over this extension.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

With an array of languages present in `x-samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

> If this is present alongside `x-readme.samples-languages` then the `x-readme.samples-languages` extension will take precedence over this extension.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

```http
POST /x-samples-languages
```

**Operation ID:** `x-samples-languages`

#### Responses

## Toggling our CORS proxy

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

### When `x-readme.proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

When `x-readme.proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

```http
POST /x-proxy-enabled
```

**Operation ID:** `x-readme_proxy-enabled`

#### Responses

### When `x-proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

> If this is present alongside `x-readme.proxy-enabled` then the `x-readme.proxy-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

When `x-proxy-enabled` is set to `false` all requests from the interactive API Explorer will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

> If this is present alongside `x-readme.proxy-enabled` then the `x-readme.proxy-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

```http
PATCH /x-proxy-enabled
```

**Operation ID:** `x-proxy-enabled`

#### Responses

## Toggling API Metrics

https://docs.readme.com/docs/openapi-extensions#disable-api-metrics

### When `x-readme.metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.

https://docs.readme.com/docs/openapi-extensions#disable-api-metrics

When `x-readme.metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.

https://docs.readme.com/docs/openapi-extensions#disable-api-metrics

```http
POST /x-metrics-enabled
```

**Operation ID:** `x-readme_metrics-enabled`

#### Responses

### When `x-metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.

https://docs.readme.com/docs/openapi-extensions#disable-api-metrics

When `x-metrics-enabled` is set to `false` all requests from the interactive API Explorer will not be tracked for you within our [API Metrics product](https://readme.com/metrics) and you will not see any requests on that operations reference page that may have been logged to API Metrics through one of our many SDKs.

https://docs.readme.com/docs/openapi-extensions#disable-api-metrics

```http
PATCH /x-metrics-enabled
```

**Operation ID:** `x-metrics-enabled`

#### Responses
