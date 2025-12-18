# Discriminator support

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#discriminatorObject

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org/anything

## Quirks

### This operation has a `discriminator` that's in reference to a property a level above it. **This is an improper use of discriminators.** Though this is improper, in this case we should ignore the discriminator instead of failing to render the operation.

This operation has a `discriminator` that's in reference to a property a level above it. **This is an improper use of discriminators.** Though this is improper, in this case we should ignore the discriminator instead of failing to render the operation.

```http
PATCH /improper-discriminator-placement
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| connector_type | string | No | - |
| connector_properties | object | No | - |


### Redocly allows users to define [a discriminator mapping without an `anyOf` or `oneOf` that contains the discriminated objects](https://redocly.com/docs/resources/discriminator#allof-for-inheritance). This endpoint demonstrates that.

Redocly allows users to define [a discriminator mapping without an `anyOf` or `oneOf` that contains the discriminated objects](https://redocly.com/docs/resources/discriminator#allof-for-inheritance). This endpoint demonstrates that.

```http
PATCH /redocly-flavored-discriminator
```

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| vehicle | object | No | Vehicle (from [Redocly example](https://redocly.com/docs/resources/discriminator#when-to-use-the-openapi-discriminator)) |
| some_other_property | string | No | Some other property that should render alongside the discriminated property |


**vehicle 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| vehicleType | string | No | The type of vehicle. |
| idealTerrain | string | No | A road, river, air... Where does this vehicle thrive? |
| powerSource | string | No | How is the vehicle powered. |
| topSpeed | integer | No | The top speed in kilometers per hour rounded to the nearest integer. |
| range | integer | No | The 95th percentile range of a trip in kilometers. |


### This operation contains a schema that at one point produced an edgecase within the form system where `formData` was `undefined`.

This operation contains a schema that at one point produced an edgecase within the form system where `formData` was `undefined`.

```http
POST /potentially-undefined-formData
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Unknown type
