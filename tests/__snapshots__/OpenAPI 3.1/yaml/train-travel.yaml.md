# Train Travel API

API for finding and booking train trips across Europe.\n\nThis API definition was ported over from https://github.com/bump-sh-examples/train-travel-api.

**Version:** 1.0.0

## Servers

- **URL:** https://api.example.com

  **Description:** Production

## Stations

Find and filter train stations across Europe, including their location  and local timezone.

### Returns a list of all train stations in the system.

Returns a list of all train stations in the system.

```http
GET /stations
```

**Operation ID:** `get-stations`

#### Responses

**Status Code:** 200

**Description:** A list of train stations

**Content Type:** `application/json`

Unknown type

**Content Type:** `application/xml`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

## Trips

Timetables and routes for train trips between stations, including  pricing and availability.

### Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

```http
GET /trips
```

**Operation ID:** `get-trips`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| origin | query | string | Yes | The ID of the origin station |
| destination | query | string | Yes | The ID of the destination station |
| date | query | string | Yes | The date and time of the trip in ISO 8601 format in origin station's timezone. |
| bicycles | query | boolean | No | Only return trips where bicycles are known to be allowed |
| dogs | query | boolean | No | Only return trips where dogs are known to be allowed |

#### Responses

**Status Code:** 200

**Description:** A list of available train trips

**Content Type:** `application/json`

Unknown type

**Content Type:** `application/xml`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

## Bookings

Create and manage bookings for train trips, including passenger  details and optional extras.

### Returns a list of all trips booking by the authenticated user.

Returns a list of all trips booking by the authenticated user.

```http
GET /bookings
```

**Operation ID:** `get-bookings`

#### Responses

**Status Code:** 200

**Description:** A list of bookings

**Content Type:** `application/json`

Unknown type

**Content Type:** `application/xml`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

### A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

```http
POST /bookings
```

**Operation ID:** `create-booking`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | Unique identifier for the booking |
| trip_id | string | No | Identifier of the booked trip |
| passenger_name | string | No | Name of the passenger |
| has_bicycle | boolean | No | Indicates whether the passenger has a bicycle. |
| has_dog | boolean | No | Indicates whether the passenger has a dog. |


**Content Type:** `application/xml`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | Unique identifier for the booking |
| trip_id | string | No | Identifier of the booked trip |
| passenger_name | string | No | Name of the passenger |
| has_bicycle | boolean | No | Indicates whether the passenger has a bicycle. |
| has_dog | boolean | No | Indicates whether the passenger has a dog. |


#### Responses

**Status Code:** 201

**Description:** Booking successful

**Content Type:** `application/json`

Unknown type

**Content Type:** `application/xml`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 404

**Description:** Not Found

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 409

**Description:** Conflict

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

### Returns the details of a specific booking.

Returns the details of a specific booking.

```http
GET /bookings/{bookingId}
```

**Operation ID:** `get-booking`

#### Responses

**Status Code:** 200

**Description:** The booking details

**Content Type:** `application/json`

Unknown type

**Content Type:** `application/xml`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 404

**Description:** Not Found

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

### Deletes a booking, cancelling the hold on the trip.

Deletes a booking, cancelling the hold on the trip.

```http
DELETE /bookings/{bookingId}
```

**Operation ID:** `delete-booking`

#### Responses

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 404

**Description:** Not Found

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

## Payments

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date


### A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

```http
POST /bookings/{bookingId}/payment
```

**Operation ID:** `create-booking-payment`

#### Request Body

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | string | No | Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects. |
| amount | number | No | Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected. |
| currency | string | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| source | unknown | No | The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking. |
| status | string | No | The status of the payment, one of `pending`, `succeeded`, or `failed`. |


#### Responses

**Status Code:** 200

**Description:** Payment successful

**Content Type:** `application/json`

Unknown type

**Status Code:** 400

**Description:** Bad Request

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 403

**Description:** Forbidden

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 429

**Description:** Too Many Requests

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type

**Status Code:** 500

**Description:** Internal Server Error

**Content Type:** `application/problem+json`

Unknown type

**Content Type:** `application/problem+xml`

Unknown type
