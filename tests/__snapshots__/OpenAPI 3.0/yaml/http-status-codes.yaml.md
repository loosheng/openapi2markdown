# HTTP Status Codes

Demos how we handle various status codes. Documentation pulled from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Successful responses

### The request has succeeded. The meaning of the success depends on the HTTP method:
* `GET`: The resource has been fetched and is transmitted in the message body.
* `HEAD`: The representation headers are included in the response without any message body.
* `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
* `TRACE`: The message body contains the request message as received by the server.

The request has succeeded. The meaning of the success depends on the HTTP method:
* `GET`: The resource has been fetched and is transmitted in the message body.
* `HEAD`: The representation headers are included in the response without any message body.
* `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
* `TRACE`: The message body contains the request message as received by the server.

```http
GET /status/200
```

#### Responses

**Status Code:** 200

**Description:** OK

### The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

```http
GET /status/201
```

#### Responses

**Status Code:** 201

**Description:** Created

### The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

```http
GET /status/202
```

#### Responses

**Status Code:** 202

**Description:** Accepted

### This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

```http
GET /status/203
```

#### Responses

**Status Code:** 203

**Description:** Non-Authoritative Information

### There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

```http
GET /status/204
```

#### Responses

**Status Code:** 204

**Description:** No Content

### Tells the user-agent to reset the document which sent this request.

Tells the user-agent to reset the document which sent this request.

```http
GET /status/205
```

#### Responses

**Status Code:** 205

**Description:** Reset Content

### This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

```http
GET /status/206
```

#### Responses

**Status Code:** 206

**Description:** Partial Content

### Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

```http
GET /status/207
```

#### Responses

**Status Code:** 207

**Description:** Multi-Status

### Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

```http
GET /status/208
```

#### Responses

**Status Code:** 208

**Description:** Already Reported

### Returns a "218 This is fine"

Returns a "218 This is fine"

```http
GET /status/218
```

#### Responses

**Status Code:** 218

**Description:** This is fine

### The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

```http
GET /status/226
```

#### Responses

**Status Code:** 226

**Description:** IM Used

## Redirection messages

### The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

```http
GET /status/300
```

#### Responses

**Status Code:** 300

**Description:** Multiple Choice

### The URL of the requested resource has been changed permanently. The new URL is given in the response.

The URL of the requested resource has been changed permanently. The new URL is given in the response.

```http
GET /status/301
```

#### Responses

**Status Code:** 301

**Description:** Moved Permanently

### This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

```http
GET /status/302
```

#### Responses

**Status Code:** 302

**Description:** Found

### The server sent this response to direct the client to get the requested resource at another URI with a GET request.

The server sent this response to direct the client to get the requested resource at another URI with a GET request.

```http
GET /status/303
```

#### Responses

**Status Code:** 303

**Description:** See Other

### This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

```http
GET /status/304
```

#### Responses

**Status Code:** 304

**Description:** Not Modified

### Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

```http
GET /status/305
```

#### Responses

**Status Code:** 305

**Description:** Use Proxy

### This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

```http
GET /status/306
```

#### Responses

**Status Code:** 306

**Description:** Switch Proxy

### The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/307
```

#### Responses

**Status Code:** 307

**Description:** Temporary Redirect

### This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/308
```

#### Responses

**Status Code:** 308

**Description:** Permanent Redirect

## Client error responses

### The server could not understand the request due to invalid syntax.

The server could not understand the request due to invalid syntax.

```http
GET /status/400
```

#### Responses

**Status Code:** 400

**Description:** Bad Request

### Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

```http
GET /status/401
```

#### Responses

**Status Code:** 401

**Description:** Unauthorized

### This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

```http
GET /status/402
```

#### Responses

**Status Code:** 402

**Description:** Payment Required

### The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

```http
GET /status/403
```

#### Responses

**Status Code:** 403

**Description:** Forbidden

### The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

```http
GET /status/404
```

#### Responses

**Status Code:** 404

**Description:** Not Found

### The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

```http
GET /status/405
```

#### Responses

**Status Code:** 405

**Description:** Method Not Allowed

### This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

```http
GET /status/406
```

#### Responses

**Status Code:** 406

**Description:** Not Acceptable

### This is similar to 401 but authentication is needed to be done by a proxy.

This is similar to 401 but authentication is needed to be done by a proxy.

```http
GET /status/407
```

#### Responses

**Status Code:** 407

**Description:** Proxy Authentication Required

### This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

```http
GET /status/408
```

#### Responses

**Status Code:** 408

**Description:** Request Timeout

### This response is sent when a request conflicts with the current state of the server.

This response is sent when a request conflicts with the current state of the server.

```http
GET /status/409
```

#### Responses

**Status Code:** 409

**Description:** Conflict

### This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

```http
GET /status/410
```

#### Responses

**Status Code:** 410

**Description:** Gone

### Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

```http
GET /status/411
```

#### Responses

**Status Code:** 411

**Description:** Length Required

### The client has indicated preconditions in its headers which the server does not meet.

The client has indicated preconditions in its headers which the server does not meet.

```http
GET /status/412
```

#### Responses

**Status Code:** 412

**Description:** Precondition Failed

### Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

```http
GET /status/413
```

#### Responses

**Status Code:** 413

**Description:** Payload Too Large

### The URI requested by the client is longer than the server is willing to interpret.

The URI requested by the client is longer than the server is willing to interpret.

```http
GET /status/414
```

#### Responses

**Status Code:** 414

**Description:** URI Too Long

### The media format of the requested data is not supported by the server, so the server is rejecting the request.

The media format of the requested data is not supported by the server, so the server is rejecting the request.

```http
GET /status/415
```

#### Responses

**Status Code:** 415

**Description:** Unsupported Media Type

### The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

```http
GET /status/416
```

#### Responses

**Status Code:** 416

**Description:** Range Not Satisfiable

### This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

```http
GET /status/417
```

#### Responses

**Status Code:** 417

**Description:** Expectation Failed

### The server refuses the attempt to brew coffee with a teapot.

The server refuses the attempt to brew coffee with a teapot.

```http
GET /status/418
```

#### Responses

**Status Code:** 418

**Description:** I'm a teapot

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/419
```

#### Responses

**Status Code:** 419

**Description:** Page Expired

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/420
```

#### Responses

**Status Code:** 420

**Description:** Enhance Your Calm

### The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

```http
GET /status/421
```

#### Responses

**Status Code:** 421

**Description:** Misdirected Request

### The request was well-formed but was unable to be followed due to semantic errors.

The request was well-formed but was unable to be followed due to semantic errors.

```http
GET /status/422
```

#### Responses

**Status Code:** 422

**Description:** Unprocessable Entity

### The resource that is being accessed is locked.

The resource that is being accessed is locked.

```http
GET /status/423
```

#### Responses

**Status Code:** 423

**Description:** Locked

### The request failed due to failure of a previous request.

The request failed due to failure of a previous request.

```http
GET /status/424
```

#### Responses

**Status Code:** 424

**Description:** Failed Dependency

### Indicates that the server is unwilling to risk processing a request that might be replayed.

Indicates that the server is unwilling to risk processing a request that might be replayed.

```http
GET /status/425
```

#### Responses

**Status Code:** 425

**Description:** Too Early

### The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

```http
GET /status/426
```

#### Responses

**Status Code:** 426

**Description:** Upgrade REquired

### The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

```http
GET /status/428
```

#### Responses

**Status Code:** 428

**Description:** Precondition Required

### The user has sent too many requests in a given amount of time ("rate limiting").

The user has sent too many requests in a given amount of time ("rate limiting").

```http
GET /status/429
```

#### Responses

**Status Code:** 429

**Description:** Too Many Requests

### The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/430
```

#### Responses

**Status Code:** 430

**Description:** Request Header Fields Too Large

### The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/431
```

#### Responses

**Status Code:** 431

**Description:** Request Header Fields Too Large

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/440
```

#### Responses

**Status Code:** 440

**Description:** Login Time-out

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/444
```

#### Responses

**Status Code:** 444

**Description:** No Response

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/449
```

#### Responses

**Status Code:** 449

**Description:** Retry With

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/450
```

#### Responses

**Status Code:** 450

**Description:** Blocked by Windows Parental Controls

### The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

```http
GET /status/451
```

#### Responses

**Status Code:** 451

**Description:** Unavailable For Legal Reasons

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/494
```

#### Responses

**Status Code:** 494

**Description:** Request Header Too Large

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/495
```

#### Responses

**Status Code:** 495

**Description:** SSL Certificate Error

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/496
```

#### Responses

**Status Code:** 496

**Description:** SSL Certificate Required

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/497
```

#### Responses

**Status Code:** 497

**Description:** HTTP Request Sent to HTTPS Port

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/498
```

#### Responses

**Status Code:** 498

**Description:** Invalid Token

### "Token Request" on ArcGIS, "Client Closed Request" on nginx

"Token Request" on ArcGIS, "Client Closed Request" on nginx

```http
GET /status/499
```

#### Responses

**Status Code:** 499

**Description:** Client Error

## Server error responses

### The server has encountered a situation it doesn't know how to handle.

The server has encountered a situation it doesn't know how to handle.

```http
GET /status/500
```

#### Responses

**Status Code:** 500

**Description:** Internal Server Error

### The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

```http
GET /status/501
```

#### Responses

**Status Code:** 501

**Description:** Not Implemented

### This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

```http
GET /status/502
```

#### Responses

**Status Code:** 502

**Description:** Bad Gateway

### The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

```http
GET /status/503
```

#### Responses

**Status Code:** 503

**Description:** Service Unavailable

### This error response is given when the server is acting as a gateway and cannot get a response in time.

This error response is given when the server is acting as a gateway and cannot get a response in time.

```http
GET /status/504
```

#### Responses

**Status Code:** 504

**Description:** Gateway Timeout

### Returns a "505 HTTP Version Not Supported"

Returns a "505 HTTP Version Not Supported"

```http
GET /status/505
```

#### Responses

**Status Code:** 505

**Description:** HTTP Version Not Supported

### The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

```http
GET /status/506
```

#### Responses

**Status Code:** 506

**Description:** Variant Also Negotiates

### The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

```http
GET /status/507
```

#### Responses

**Status Code:** 507

**Description:** Insufficient Storage

### The server detected an infinite loop while processing the request.

The server detected an infinite loop while processing the request.

```http
GET /status/508
```

#### Responses

**Status Code:** 508

**Description:** Loop Detected

### Returns a "508 Bandwidth Limit Exceeded"

Returns a "508 Bandwidth Limit Exceeded"

```http
GET /status/509
```

#### Responses

**Status Code:** 509

**Description:** Bandwidth Limit Exceeded

### Further extensions to the request are required for the server to fulfill it.

Further extensions to the request are required for the server to fulfill it.

```http
GET /status/510
```

#### Responses

**Status Code:** 510

**Description:** Not Extended

### The 511 status code indicates that the client needs to authenticate to gain network access.

The 511 status code indicates that the client needs to authenticate to gain network access.

```http
GET /status/511
```

#### Responses

**Status Code:** 511

**Description:** Network Authentication Required

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/520
```

#### Responses

**Status Code:** 520

**Description:** Web Server Returned an Unknown Error

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/512
```

#### Responses

**Status Code:** 521

**Description:** Web Server Is Down

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/522
```

#### Responses

**Status Code:** 522

**Description:** Connection Timed Out

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/523
```

#### Responses

**Status Code:** 523

**Description:** Origin Is Unreachable

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/524
```

#### Responses

**Status Code:** 524

**Description:** A Timeout Occurred

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/525
```

#### Responses

**Status Code:** 525

**Description:** SSL Handshake Failed

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/526
```

#### Responses

**Status Code:** 526

**Description:** Invalid SSL Certificate

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/527
```

#### Responses

**Status Code:** 527

**Description:** Railgun Error

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/529
```

#### Responses

**Status Code:** 529

**Description:** Site is Overloaded

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/530
```

#### Responses

**Status Code:** 530

**Description:** Site is Frozen

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/598
```

#### Responses

**Status Code:** 598

**Description:** Network Read Timeout Error

## Information responses

### This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

```http
GET /status/100
```

#### Responses

**Status Code:** 100

**Description:** Continue

### This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

```http
GET /status/101
```

#### Responses

**Status Code:** 101

**Description:** Switching Protocols

### This code indicates that the server has received and is processing the request, but no response is available yet.

This code indicates that the server has received and is processing the request, but no response is available yet.

```http
GET /status/102
```

#### Responses

**Status Code:** 102

**Description:** Processing

### This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

```http
GET /status/103
```

#### Responses

**Status Code:** 103

**Description:** Early Hints
