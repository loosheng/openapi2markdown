# STAPI

**Version:** 1.0.0

## Servers

- **URL:** http://stapi.co/api/v1/rest

## Animal

### Retrival of a single animal

Retrival of a single animal

```http
GET /animal
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Animal unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| animal | object | No | Full animal, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over animals

Pagination over animals

```http
GET /animal/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| animals | array | No | List of animals matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching animals

Searching animals

```http
POST /animal/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| animals | array | No | List of animals matching given criteria |


## AstronomicalObject

### Retrival of a single astronomical object

Retrival of a single astronomical object

```http
GET /astronomicalObject
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Astronomical object's unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| astronomicalObject | object | No | Full astronomical object, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over astronomical objects

Pagination over astronomical objects

```http
GET /astronomicalObject/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| astronomicalObjects | array | No | List of astronomical objects matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching astronomical objects

Searching astronomical objects

```http
POST /astronomicalObject/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| astronomicalObjects | array | No | List of astronomical objects matching given criteria |


## Book

### Retrival of a single book

Retrival of a single book

```http
GET /book
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| book | object | No | Full book, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over books

Pagination over books

```http
GET /book/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| books | array | No | List of books matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching books

Searching books

```http
POST /book/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| books | array | No | List of books matching given criteria |


## BookCollection

### Retrival of a single book collection

Retrival of a single book collection

```http
GET /bookCollection
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book collection unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| bookCollection | object | No | Full book collection, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over book collections

Pagination over book collections

```http
GET /bookCollection/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookCollections | array | No | List of book collections matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching book collections

Searching book collections

```http
POST /bookCollection/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookCollections | array | No | List of book collections matching given criteria |


## BookSeries

### Retrival of a single book series

Retrival of a single book series

```http
GET /bookSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| bookSeries | object | No | Full book series, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over book series

Pagination over book series

```http
GET /bookSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookSeries | array | No | List of book series matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching book series

Searching book series

```http
POST /bookSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookSeries | array | No | List of book series matching given criteria |


## Character

### Retrival of a single character

Retrival of a single character

```http
GET /character
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Character unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| character | object | No | Full character, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over characters

Pagination over characters

```http
GET /character/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| characters | array | No | List of characters matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching characters

Searching characters

```http
POST /character/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| characters | array | No | List of characters matching given criteria |


## Comics

### Retrival of a single comics

Retrival of a single comics

```http
GET /comics
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comics unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comics | object | No | Full comics, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comics

Pagination over comics

```http
GET /comics/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comics | array | No | List of comics matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comics

Searching comics

```http
POST /comics/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comics | array | No | List of comics matching given criteria |


## ComicCollection

### Retrival of a single comic collection

Retrival of a single comic collection

```http
GET /comicCollection
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic collection unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicCollection | object | No | Full comic collection, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic collections

Pagination over comic collections

```http
GET /comicCollection/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicCollections | array | No | List of comic collections matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic collections

Searching comic collections

```http
POST /comicCollection/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicCollections | array | No | List of comic collections matching given criteria |


## ComicSeries

### Retrival of a single comic series

Retrival of a single comic series

```http
GET /comicSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicSeries | object | No | Full comic series, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic series

Pagination over comic series

```http
GET /comicSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicSeries | array | No | List of comic series matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic series

Searching comic series

```http
POST /comicSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicSeries | array | No | List of comic series matching given criteria |


## ComicStrip

### Retrival of a single comic strip

Retrival of a single comic strip

```http
GET /comicStrip
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic strip unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicStrip | object | No | Full comic strip, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic strips

Pagination over comic strips

```http
GET /comicStrip/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicStrips | array | No | List of comic strips matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic strips

Searching comic strips

```http
POST /comicStrip/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicStrips | array | No | List of comic strips matching given criteria |


## Company

### Retrival of a single company

Retrival of a single company

```http
GET /company
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Company unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| company | object | No | Full company, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over companies

Pagination over companies

```http
GET /company/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| companies | array | No | List of companies matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching companies

Searching companies

```http
POST /company/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| companies | array | No | List of companies matching given criteria |


## Conflict

### Retrival of a single conflict

Retrival of a single conflict

```http
GET /conflict
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Conflict unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| conflict | object | No | Base conflict, returned in search results |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over conflicts

Pagination over conflicts

```http
GET /conflict/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| conflicts | array | No | List of conflicts matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching conflicts

Searching conflicts

```http
POST /conflict/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| conflicts | array | No | List of conflicts matching given criteria |


## Element

### Retrival of a single element

Retrival of a single element

```http
GET /element
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Element unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| element | object | No | Full element, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over elements

Pagination over elements

```http
GET /element/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| elements | array | No | List of elements matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching elements

Searching elements

```http
POST /element/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| elements | array | No | List of elements matching given criteria |


## Episode

### Retrival of a single episode

Retrival of a single episode

```http
GET /episode
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Episode unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| episode | object | No | Full episode, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over episodes

Pagination over episodes

```http
GET /episode/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| episodes | array | No | List of episodes matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching episodes

Searching episodes

```http
POST /episode/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| episodes | array | No | List of episodes matching given criteria |


## Food

### Retrival of a single food

Retrival of a single food

```http
GET /food
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Food unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| food | object | No | Full food, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over foods

Pagination over foods

```http
GET /food/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| foods | array | No | List of foods matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching foods

Searching foods

```http
POST /food/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| foods | array | No | List of foods matching given criteria |


## Literature

### Retrival of a single literature

Retrival of a single literature

```http
GET /literature
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Literature unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| literature | object | No | Full literature, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over literature

Pagination over literature

```http
GET /literature/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| literature | array | No | List of literature matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching literature

Searching literature

```http
POST /literature/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| literature | array | No | List of literature matching given criteria |


## Location

### Retrival of a single location

Retrival of a single location

```http
GET /location
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Location unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| location | object | No | Full location, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over locations

Pagination over locations

```http
GET /location/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| locations | array | No | List of locations matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching locations

Searching locations

```http
POST /location/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| locations | array | No | List of locations matching given criteria |


## Magazine

### Retrival of a single magazine

Retrival of a single magazine

```http
GET /magazine
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Magazine unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| magazine | object | No | Full magazine, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over magazines

Pagination over magazines

```http
GET /magazine/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazines | array | No | List of magazines matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching magazines

Searching magazines

```http
POST /magazine/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazines | array | No | List of magazines matching given criteria |


## MagazineSeries

### Retrival of a single magazine series

Retrival of a single magazine series

```http
GET /magazineSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Magazine series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| magazineSeries | object | No | Full magazine series, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over magazine series

Pagination over magazine series

```http
GET /magazineSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazineSeries | array | No | List of magazine series matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching magazine series

Searching magazine series

```http
POST /magazineSeries/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazineSeries | array | No | List of magazine series matching given criteria |


## Material

### Retrival of a single material

Retrival of a single material

```http
GET /material
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Material unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| material | object | No | Full material, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over materials

Pagination over materials

```http
GET /material/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| materials | array | No | List of materials matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching materials

Searching materials

```http
POST /material/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| materials | array | No | List of materials matching given criteria |


## MedicalCondition

### Retrival of a single medical condition

Retrival of a single medical condition

```http
GET /medicalCondition
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Medical condition unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| medicalCondition | object | No | Full medical condition, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over medical conditions

Pagination over medical conditions

```http
GET /medicalCondition/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| medicalConditions | array | No | List of medical conditions matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching medical conditions

Searching medical conditions

```http
POST /medicalCondition/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| medicalConditions | array | No | List of medical conditions matching given criteria |


## Movie

### Retrival of a single movie

Retrival of a single movie

```http
GET /movie
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Movie unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| movie | object | No | Full movie, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over movies

Pagination over movies

```http
GET /movie/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| movies | array | No | List of movies matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching movies

Searching movies

```http
POST /movie/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| movies | array | No | List of movies matching given criteria |


## Occupation

### Retrival of a single occupation

Retrival of a single occupation

```http
GET /occupation
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Occupation unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| occupation | object | No | Full occupation, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over occupations

Pagination over occupations

```http
GET /occupation/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| occupations | array | No | List of occupations matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching occupations

Searching occupations

```http
POST /occupation/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| occupations | array | No | List of occupations matching given criteria |


## Organization

### Retrival of a single organization

Retrival of a single organization

```http
GET /organization
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Organization unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| organization | object | No | Full organization, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over organizations

Pagination over organizations

```http
GET /organization/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| organizations | array | No | List of organizations matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching organizations

Searching organizations

```http
POST /organization/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| organizations | array | No | List of organizations matching given criteria |


## Performer

### Retrival of a single performer

Retrival of a single performer

```http
GET /performer
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Performer unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| performer | object | No | Full performer, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over performers

Pagination over performers

```http
GET /performer/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| performers | array | No | List of performers matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching performers

Searching performers

```http
POST /performer/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| performers | array | No | List of performers matching given criteria |


## Season

### Retrival of a single season

Retrival of a single season

```http
GET /season
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Season unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| season | object | No | Full location, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over seasons

Pagination over seasons

```http
GET /season/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| seasons | array | No | List of seasons matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching seasons

Searching seasons

```http
POST /season/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| seasons | array | No | List of seasons matching given criteria |


## Series

### Retrival of a single series

Retrival of a single series

```http
GET /series
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| series | object | No | Full series, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over series

Pagination over series

```http
GET /series/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| series | array | No | List of series matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching series

Searching series

```http
POST /series/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| series | array | No | List of series matching given criteria |


## Soundtrack

### Retrival of a single soundtrack

Retrival of a single soundtrack

```http
GET /soundtrack
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Soundtrack unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| soundtrack | object | No | Full soundtrack, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over soundtracks

Pagination over soundtracks

```http
GET /soundtrack/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| soundtracks | array | No | List of soundtracks matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching soundtracks

Searching soundtracks

```http
POST /soundtrack/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| soundtracks | array | No | List of soundtracks matching given criteria |


## Spacecraft

### Retrival of a single spacecraft

Retrival of a single spacecraft

```http
GET /spacecraft
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Spacecraft unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spacecraft | object | No | Full spacecraft, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over spacecrafts

Pagination over spacecrafts

```http
GET /spacecraft/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecrafts | array | No | List of spacecrafts matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching spacecrafts

Searching spacecrafts

```http
POST /spacecraft/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecrafts | array | No | List of spacecrafts matching given criteria |


## SpacecraftClass

### Retrival of a single spacecraft class

Retrival of a single spacecraft class

```http
GET /spacecraftClass
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | SpacecraftClass unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spacecraftClass | object | No | Full spacecraft class, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over spacecraft classes

Pagination over spacecraft classes

```http
GET /spacecraftClass/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecraftClasses | array | No | List of spacecraft classes matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching spacecraft classes

Searching spacecraft classes

```http
POST /spacecraftClass/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecraftClasses | array | No | List of spacecraft classes matching given criteria |


## Species

### Retrival of a single species

Retrival of a single species

```http
GET /species
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Species unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| species | object | No | Full species, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over species

Pagination over species

```http
GET /species/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| species | array | No | List of species matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching species

Searching species

```http
POST /species/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| species | array | No | List of species matching given criteria |


## Staff

### Retrival of a single staff

Retrival of a single staff

```http
GET /staff
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Staff unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| staff | object | No | Full staff, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over staff

Pagination over staff

```http
GET /staff/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| staff | array | No | List of staff matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching staff

Searching staff

```http
POST /staff/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| staff | array | No | List of staff matching given criteria |


## Technology

### Retrival of a single technology

Retrival of a single technology

```http
GET /technology
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Technology unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| technology | object | No | Full technology, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over technology

Pagination over technology

```http
GET /technology/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| technology | array | No | List of technology matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching technology

Searching technology

```http
POST /technology/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| technology | array | No | List of technology matching given criteria |


## Title

### Retrival of a single title

Retrival of a single title

```http
GET /title
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Title unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | object | No | Full title, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over titles

Pagination over titles

```http
GET /title/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| titles | array | No | List of titles matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching titles

Searching titles

```http
POST /title/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| titles | array | No | List of titles matching given criteria |


## TradingCard

### Retrival of a single trading card

Retrival of a single trading card

```http
GET /tradingCard
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Trading card unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCard | object | No | Full trading card, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading cards

Pagination over trading cards

```http
GET /tradingCard/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCards | array | No | List of trading cards matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading cards

Searching trading cards

```http
POST /tradingCard/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCards | array | No | List of trading cards matching given criteria |


## TradingCardDeck

### Retrival of a single trading card deck

Retrival of a single trading card deck

```http
GET /tradingCardDeck
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | trading card deck unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCardDeck | object | No | Full trading card deck, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading card decks

Pagination over trading card decks

```http
GET /tradingCardDeck/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardDecks | array | No | List of trading card decks matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading card decks

Searching trading card decks

```http
POST /tradingCardDeck/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardDecks | array | No | List of trading card decks matching given criteria |


## TradingCardSet

### Retrival of a single trading card set

Retrival of a single trading card set

```http
GET /tradingCardSet
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Trading card set unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCardSet | object | No | Full trading card set, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading card sets

Pagination over trading card sets

```http
GET /tradingCardSet/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardSets | array | No | List of trading card sets matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading card sets

Searching trading card sets

```http
POST /tradingCardSet/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardSets | array | No | List of trading card sets matching given criteria |


## VideoGame

### Retrival of a single video game

Retrival of a single video game

```http
GET /videoGame
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | VideoGame unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| videoGame | object | No | Full video game, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over video games

Pagination over video games

```http
GET /videoGame/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoGames | array | No | List of video games matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching video games

Searching video games

```http
POST /videoGame/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoGames | array | No | List of video games matching given criteria |


## VideoRelease

### Retrival of a single video release

Retrival of a single video release

```http
GET /videoRelease
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Video release unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| videoRelease | object | No | Full video release, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over video releases

Pagination over video releases

```http
GET /videoRelease/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoReleases | array | No | List of video releases matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching video releases

Searching video releases

```http
POST /videoRelease/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoReleases | array | No | List of video releases matching given criteria |


## Weapon

### Retrival of a single weapon

Retrival of a single weapon

```http
GET /weapon
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Weapon unique ID |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| weapon | object | No | Full weapon, returned when queried using UID |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over weapons

Pagination over weapons

```http
GET /weapon/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| apiKey | query | string | No | API key |

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| weapons | array | No | List of weapons matching given criteria |


**Status Code:** default

**Description:** Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching weapons

Searching weapons

```http
POST /weapon/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| pageNumber | query | integer | No | Zero-based page number |
| pageSize | query | integer | No | Page size |
| sort | query | string | No | Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC |
| apiKey | query | string | No | API key |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

Unknown type

#### Responses

**Status Code:** 200

**Description:** OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| weapons | array | No | List of weapons matching given criteria |
