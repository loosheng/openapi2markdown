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

### The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

```http
GET /status/201
```

### The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

```http
GET /status/202
```

### This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

```http
GET /status/203
```

### There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

```http
GET /status/204
```

### Tells the user-agent to reset the document which sent this request.

Tells the user-agent to reset the document which sent this request.

```http
GET /status/205
```

### This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

```http
GET /status/206
```

### Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

```http
GET /status/207
```

### Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

```http
GET /status/208
```

### Returns a "218 This is fine"

```http
GET /status/218
```

### The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

```http
GET /status/226
```

## Redirection messages

### The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

```http
GET /status/300
```

### The URL of the requested resource has been changed permanently. The new URL is given in the response.

The URL of the requested resource has been changed permanently. The new URL is given in the response.

```http
GET /status/301
```

### This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

```http
GET /status/302
```

### The server sent this response to direct the client to get the requested resource at another URI with a GET request.

The server sent this response to direct the client to get the requested resource at another URI with a GET request.

```http
GET /status/303
```

### This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

```http
GET /status/304
```

### Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

```http
GET /status/305
```

### This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

```http
GET /status/306
```

### The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/307
```

### This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

```http
GET /status/308
```

## Client error responses

### The server could not understand the request due to invalid syntax.

The server could not understand the request due to invalid syntax.

```http
GET /status/400
```

### Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

```http
GET /status/401
```

### This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

```http
GET /status/402
```

### The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

```http
GET /status/403
```

### The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

```http
GET /status/404
```

### The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

```http
GET /status/405
```

### This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

```http
GET /status/406
```

### This is similar to 401 but authentication is needed to be done by a proxy.

This is similar to 401 but authentication is needed to be done by a proxy.

```http
GET /status/407
```

### This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

```http
GET /status/408
```

### This response is sent when a request conflicts with the current state of the server.

This response is sent when a request conflicts with the current state of the server.

```http
GET /status/409
```

### This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

```http
GET /status/410
```

### Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

```http
GET /status/411
```

### The client has indicated preconditions in its headers which the server does not meet.

The client has indicated preconditions in its headers which the server does not meet.

```http
GET /status/412
```

### Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

```http
GET /status/413
```

### The URI requested by the client is longer than the server is willing to interpret.

The URI requested by the client is longer than the server is willing to interpret.

```http
GET /status/414
```

### The media format of the requested data is not supported by the server, so the server is rejecting the request.

The media format of the requested data is not supported by the server, so the server is rejecting the request.

```http
GET /status/415
```

### The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

```http
GET /status/416
```

### This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

```http
GET /status/417
```

### The server refuses the attempt to brew coffee with a teapot.

The server refuses the attempt to brew coffee with a teapot.

```http
GET /status/418
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/419
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/420
```

### The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

```http
GET /status/421
```

### The request was well-formed but was unable to be followed due to semantic errors.

The request was well-formed but was unable to be followed due to semantic errors.

```http
GET /status/422
```

### The resource that is being accessed is locked.

The resource that is being accessed is locked.

```http
GET /status/423
```

### The request failed due to failure of a previous request.

The request failed due to failure of a previous request.

```http
GET /status/424
```

### Indicates that the server is unwilling to risk processing a request that might be replayed.

Indicates that the server is unwilling to risk processing a request that might be replayed.

```http
GET /status/425
```

### The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

```http
GET /status/426
```

### The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

```http
GET /status/428
```

### The user has sent too many requests in a given amount of time ("rate limiting").

The user has sent too many requests in a given amount of time ("rate limiting").

```http
GET /status/429
```

### The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/430
```

### The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

```http
GET /status/431
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/440
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/444
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/449
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/450
```

### The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

```http
GET /status/451
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/494
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/495
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/496
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/497
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/498
```

### "Token Request" on ArcGIS, "Client Closed Request" on nginx

"Token Request" on ArcGIS, "Client Closed Request" on nginx

```http
GET /status/499
```

## Server error responses

### The server has encountered a situation it doesn't know how to handle.

The server has encountered a situation it doesn't know how to handle.

```http
GET /status/500
```

### The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

```http
GET /status/501
```

### This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

```http
GET /status/502
```

### The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

```http
GET /status/503
```

### This error response is given when the server is acting as a gateway and cannot get a response in time.

This error response is given when the server is acting as a gateway and cannot get a response in time.

```http
GET /status/504
```

### Returns a "505 HTTP Version Not Supported"

```http
GET /status/505
```

### The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

```http
GET /status/506
```

### The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

```http
GET /status/507
```

### The server detected an infinite loop while processing the request.

The server detected an infinite loop while processing the request.

```http
GET /status/508
```

### Returns a "508 Bandwidth Limit Exceeded"

```http
GET /status/509
```

### Further extensions to the request are required for the server to fulfill it.

Further extensions to the request are required for the server to fulfill it.

```http
GET /status/510
```

### The 511 status code indicates that the client needs to authenticate to gain network access.

The 511 status code indicates that the client needs to authenticate to gain network access.

```http
GET /status/511
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/520
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/512
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/522
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/523
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/524
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/525
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/526
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/527
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/529
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/530
```

### > ⚠️ Unofficial Status Code

> ⚠️ Unofficial Status Code

```http
GET /status/598
```

## Information responses

### This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

```http
GET /status/100
```

### This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

```http
GET /status/101
```

### This code indicates that the server has received and is processing the request, but no response is available yet.

This code indicates that the server has received and is processing the request, but no response is available yet.

```http
GET /status/102
```

### This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

```http
GET /status/103
```
