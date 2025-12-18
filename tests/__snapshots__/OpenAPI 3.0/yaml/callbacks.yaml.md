# Callback Example

**Version:** 1.0.0

## Default

### subscribes a client to receive out-of-band data

```http
POST /streams
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| callbackUrl | query | string | Yes | the location where data will be sent. Must be network accessible by the source server |

#### Responses

**201** - subscription successfully created

**Content Type:** `application/json`

Unknown type
