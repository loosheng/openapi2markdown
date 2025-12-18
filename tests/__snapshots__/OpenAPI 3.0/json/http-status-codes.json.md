# HTTP Status Codes

Demos how we handle various status codes. Documentation pulled from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

**Version:** 1.0.0

## Servers

- **URL:** https://httpbin.org

## Successful responses

### Returns a "200 OK"

The request has succeeded. The meaning of the success depends on the HTTP method:
* `GET`: The resource has been fetched and is transmitted in the message body.
* `HEAD`: The representation headers are included in the response without any message body.
* `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
* `TRACE`: The message body contains the request message as received by the server.

```http
GET /status/200
```

### Returns a "201 Created"

The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

```http
GET /status/201
```

### Returns a "202 Accepted"

The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

```http
GET /status/202
```

### Returns a "203 Non-Authoritative Information"

This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

```http
GET /status/203
```

### Returns a "204 No Content"

There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

```http
GET /status/204
```

### Returns a "205 Reset Content"

Tells the user-agent to reset the document which sent this request.

```http
GET /status/205
```

### Returns a "206 Partial Content"

This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

```http
GET /status/206
```

### Returns a "200 Multi-Status"

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

```http
GET /status/207
```

### Returns a "208 Already Reported"

Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

```http
GET /status/208
```

### Returns a "218 This is fine"

```http
GET /status/218
```

### Returns a "226 IM Used"

The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

```http
GET /status/226
```

## Redirection messages

### Returns a "300 Multiple Choice"

The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

```http
GET /status/300
```

### Returns a "301 Moved Permanently"

The URL of the requested resource has been changed permanently. The new URL is given in the response.

```http
GET /status/301
```

### Returns a "302 Found"

This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

```http
GET /status/302
```

### Returns a "303 See Other"

The server sent this response to direct the client to get the requested resource at another URI with a GET request.

```http
GET /status/303
```

### Returns a "304 Not Modified"

This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

```http
GET /status/304
```

### Returns a "305 Use Proxy"

Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

```http
GET /status/305
```

### Returns a "306 Switch Proxy"

This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

```http
GET /status/306
```

### Returns a "307 Temporary Redirect"

The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/307
```

### Returns a "308 Permanent Redirect"

This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/308
```

## Client error responses

### Returns a "400 Bad Request"

The server could not understand the request due to invalid syntax.

```http
GET /status/400
```

### Returns a "401 Unauthorized"

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

```http
GET /status/401
```

### Returns a "402 Payment Required"

This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

```http
GET /status/402
```

### Returns a "403 Forbidden"

The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

```http
GET /status/403
```

### Returns a "404 Not Found"

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

```http
GET /status/404
```

### Returns a "405 Method Not Allowed"

The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

```http
GET /status/405
```

### Returns a "406 Not Acceptable"

This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

```http
GET /status/406
```

### Returns a "407 Proxy Authentication Required"

This is similar to 401 but authentication is needed to be done by a proxy.

```http
GET /status/407
```

### Returns a "408 Request Timeout"

This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

```http
GET /status/408
```

### Returns a "409 Conflict"

This response is sent when a request conflicts with the current state of the server.

```http
GET /status/409
```

### Returns a "410 Gone"

This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

```http
GET /status/410
```

### Returns a "411 Length Required"

Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

```http
GET /status/411
```

### Returns a "412 Precondition Failed"

The client has indicated preconditions in its headers which the server does not meet.

```http
GET /status/412
```

### Returns a "413 Payload Too Large"

Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

```http
GET /status/413
```

### Returns a "414 URI Too Long"

The URI requested by the client is longer than the server is willing to interpret.

```http
GET /status/414
```

### Returns a "415 Unsupported Media Type"

The media format of the requested data is not supported by the server, so the server is rejecting the request.

```http
GET /status/415
```

### Returns a "416 Range Not Satisfiable"

The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

```http
GET /status/416
```

### Returns a "417 Expectation Failed"

This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

```http
GET /status/417
```

### Returns a "418 I'm a teapot"

The server refuses the attempt to brew coffee with a teapot.

```http
GET /status/418
```

### Returns a "419 Page Expired"

> ⚠️ Unofficial Status Code

```http
GET /status/419
```

### Returns a "420 Enhance Your Calm"

> ⚠️ Unofficial Status Code

```http
GET /status/420
```

### Returns a "421 Misdirected Request"

The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

```http
GET /status/421
```

### Returns a "422 Unprocessable Entity"

The request was well-formed but was unable to be followed due to semantic errors.

```http
GET /status/422
```

### Returns a "423 Locked"

The resource that is being accessed is locked.

```http
GET /status/423
```

### Returns a "424 Failed Dependency"

The request failed due to failure of a previous request.

```http
GET /status/424
```

### Returns a "425 Too Early"

Indicates that the server is unwilling to risk processing a request that might be replayed.

```http
GET /status/425
```

### Returns a "426 Upgrade Required"

The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

```http
GET /status/426
```

### Returns a "428 Precondition Required"

The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

```http
GET /status/428
```

### Returns a "429 Too Many Requests"

The user has sent too many requests in a given amount of time ("rate limiting").

```http
GET /status/429
```

### > ⚠️ Unofficial Status Code
Returns a "430 Request Header Fields Too Large"

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/430
```

### Returns a "431 Request Header Fields Too Large"

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/431
```

### Returns a "440 Login Time-out"

> ⚠️ Unofficial Status Code

```http
GET /status/440
```

### Returns a "444 No Response"

> ⚠️ Unofficial Status Code

```http
GET /status/444
```

### Returns a "449 Retry With"

> ⚠️ Unofficial Status Code

```http
GET /status/449
```

### Returns a "450 Blocked by Windows Parental Controls"

> ⚠️ Unofficial Status Code

```http
GET /status/450
```

### Returns a "451 Unavailable For Legal Reasons"

The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

```http
GET /status/451
```

### Returns a "494 Request Header Too Large"

> ⚠️ Unofficial Status Code

```http
GET /status/494
```

### Returns a "495 SSL Certificate Error"

> ⚠️ Unofficial Status Code

```http
GET /status/495
```

### Returns a "496 SSL Certificate Required"

> ⚠️ Unofficial Status Code

```http
GET /status/496
```

### Returns a "497 HTTP Request Sent to HTTPS Port"

> ⚠️ Unofficial Status Code

```http
GET /status/497
```

### Returns a "498 Invalid Token"

> ⚠️ Unofficial Status Code

```http
GET /status/498
```

### Returns a "499 Client Error"

"Token Request" on ArcGIS, "Client Closed Request" on nginx

```http
GET /status/499
```

## Server error responses

### Returns a "500 Internal Server Error"

The server has encountered a situation it doesn't know how to handle.

```http
GET /status/500
```

### Returns a "501 Not Implemented"

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

```http
GET /status/501
```

### Returns a "502 Bad Gateway"

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

```http
GET /status/502
```

### Returns a "503 Service Unavailable"

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

```http
GET /status/503
```

### Returns a "504 Gateway Timeout"

This error response is given when the server is acting as a gateway and cannot get a response in time.

```http
GET /status/504
```

### Returns a "505 HTTP Version Not Supported"

```http
GET /status/505
```

### Returns a "506 Variant Also Negotiates"

The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

```http
GET /status/506
```

### Returns a "507 Insufficient Storage"

The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

```http
GET /status/507
```

### Returns a "508 Loop Detected"

The server detected an infinite loop while processing the request.

```http
GET /status/508
```

### Returns a "508 Bandwidth Limit Exceeded"

```http
GET /status/509
```

### Returns a "510 Not Extended"

Further extensions to the request are required for the server to fulfill it.

```http
GET /status/510
```

### Returns a "511 Network Authentication Required"

The 511 status code indicates that the client needs to authenticate to gain network access.

```http
GET /status/511
```

### Returns a "520 Web Server Returned an Unknown Error"

> ⚠️ Unofficial Status Code

```http
GET /status/520
```

### Returns a "512 Web Server Is Down"

> ⚠️ Unofficial Status Code

```http
GET /status/512
```

### Returns a "522 Connection Timed Out"

> ⚠️ Unofficial Status Code

```http
GET /status/522
```

### Returns a "523 Origin Is Unreachable"

> ⚠️ Unofficial Status Code

```http
GET /status/523
```

### Returns a "524 A Timeout Occurred"

> ⚠️ Unofficial Status Code

```http
GET /status/524
```

### Returns a "525 SSL Handshake Failed"

> ⚠️ Unofficial Status Code

```http
GET /status/525
```

### Returns a "526 Invalid SSL Certificate"

> ⚠️ Unofficial Status Code

```http
GET /status/526
```

### Returns a "527 Railgun Error"

> ⚠️ Unofficial Status Code

```http
GET /status/527
```

### Returns a "529 Site is Overloaded"

> ⚠️ Unofficial Status Code

```http
GET /status/529
```

### Returns a "530 Site is Frozen"

> ⚠️ Unofficial Status Code

```http
GET /status/530
```

### Returns a "598 Network Read Timeout Error"

> ⚠️ Unofficial Status Code

```http
GET /status/598
```

## Information responses

### Returns a "100 Continue"

This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

```http
GET /status/100
```

### Returns a "101 Switching Protocols"

This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

```http
GET /status/101
```

### Returns a "102 Processing"

This code indicates that the server has received and is processing the request, but no response is available yet.

```http
GET /status/102
```

### Returns a "103 Early Hints"

This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

```http
GET /status/103
```
