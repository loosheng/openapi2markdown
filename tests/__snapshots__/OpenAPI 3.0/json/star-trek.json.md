# STAPI

**Version:** 1.0.0

## Servers

- **URL:** http://stapi.co/api/v1/rest

## Animal

### Retrival of a single animal

```http
GET /animal
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Animal unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| animal | object | No | Full animal, returned when queried using UID |


**animal 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Animal unique ID |
| name | string | Yes | Animal name |
| earthAnimal | boolean | No | Whether it's an earth animal |
| earthInsect | boolean | No | Whether it's an earth insect |
| avian | boolean | No | Whether it's an avian |
| canine | boolean | No | Whether it's a canine |
| feline | boolean | No | Whether it's a feline |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over animals

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| animals | object[] | No | List of animals matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**animals 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Animal unique ID |
| name | string | Yes | Animal name |
| earthAnimal | boolean | No | Whether it's an earth animal |
| earthInsect | boolean | No | Whether it's an earth insect |
| avian | boolean | No | Whether it's an avian |
| canine | boolean | No | Whether it's a canine |
| feline | boolean | No | Whether it's a feline |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching animals

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| animals | object[] | No | List of animals matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**animals 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Animal unique ID |
| name | string | Yes | Animal name |
| earthAnimal | boolean | No | Whether it's an earth animal |
| earthInsect | boolean | No | Whether it's an earth insect |
| avian | boolean | No | Whether it's an avian |
| canine | boolean | No | Whether it's a canine |
| feline | boolean | No | Whether it's a feline |


## AstronomicalObject

### Retrival of a single astronomical object

```http
GET /astronomicalObject
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Astronomical object's unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| astronomicalObject | object | No | Full astronomical object, returned when queried using UID |


**astronomicalObject 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Base astronomical object, returned in search results |
| astronomicalObjects | object[] | No | Astronomical objects located in this astronomical object, like planets in a star system |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**astronomicalObjects 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over astronomical objects

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| astronomicalObjects | object[] | No | List of astronomical objects matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**astronomicalObjects 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching astronomical objects

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| astronomicalObjects | object[] | No | List of astronomical objects matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**astronomicalObjects 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


## Book

### Retrival of a single book

```http
GET /book
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| book | object | No | Full book, returned when queried using UID |


**book 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book unique ID |
| title | string | Yes | Book title |
| publishedYear | integer | No | Year the book was published |
| publishedMonth | integer | No | Month the book was published |
| publishedDay | integer | No | Day the book was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book story |
| stardateTo | number | No | Ending stardate of book story |
| yearFrom | integer | No | Starting year of book story |
| yearTo | integer | No | Ending year of book story |
| novel | boolean | Yes | Whether it's a novel |
| referenceBook | boolean | Yes | Whether it's a reference book |
| biographyBook | boolean | Yes | Whether it's a biography book |
| rolePlayingBook | boolean | Yes | Whether it's a role playing book |
| eBook | boolean | Yes | Whether it's an e-book |
| anthology | boolean | Yes | Whether it's an anthology |
| novelization | boolean | Yes | Whether it's a novelization |
| audiobook | boolean | Yes | Whether it's an audiobook, or has been release as an audiobook in addition to other form |
| audiobookAbridged | boolean | Yes | If it's an audiobook, whether it's been abridged |
| audiobookPublishedYear | integer | No | Year the audiobook was published |
| audiobookPublishedMonth | integer | No | Month the audiobook was published |
| audiobookPublishedDay | integer | No | Day the audiobook was published |
| audiobookRunTime | integer | No | Audiobook run time, in minutes |
| productionNumber | string | No | Book production number |
| bookSeries | object[] | No | Book series this book is included in |
| authors | object[] | No | Authors of the book |
| artists | object[] | No | Artists involved in the book |
| editors | object[] | No | Editors involved in the book |
| audiobookNarrators | object[] | No | Audiobook narrators |
| publishers | object[] | No | Book publishers |
| audiobookPublishers | object[] | No | Audiobook publishers |
| characters | object[] | No | Characters appearing the book |
| references | object[] | No | References |
| audiobookReferences | object[] | No | Audiobook references |
| bookCollections | object[] | No | Book collections this book is included in |


**bookSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


**authors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**artists 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**audiobookNarrators 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**audiobookPublishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**audiobookReferences 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**bookCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Book collection unique ID |
| title | string | No | Book collection title |
| publishedYear | integer | No | Year the book collection was published |
| publishedMonth | integer | No | Month the book collection was published |
| publishedDay | integer | No | Day the book collection was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book collection stories |
| stardateTo | number | No | Ending stardate of book collection stories |
| yearFrom | integer | No | Starting year of book collection stories |
| yearTo | integer | No | Ending year of book collection stories |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over books

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| books | object[] | No | List of books matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**books 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book unique ID |
| title | string | Yes | Book title |
| publishedYear | integer | No | Year the book was published |
| publishedMonth | integer | No | Month the book was published |
| publishedDay | integer | No | Day the book was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book story |
| stardateTo | number | No | Ending stardate of book story |
| yearFrom | integer | No | Starting year of book story |
| yearTo | integer | No | Ending year of book story |
| novel | boolean | Yes | Whether it's a novel |
| referenceBook | boolean | Yes | Whether it's a reference book |
| biographyBook | boolean | Yes | Whether it's a biography book |
| rolePlayingBook | boolean | Yes | Whether it's a role playing book |
| eBook | boolean | Yes | Whether it's an eBook |
| anthology | boolean | Yes | Whether it's an anthology |
| novelization | boolean | Yes | Whether it's a novelization |
| audiobook | boolean | Yes | Whether it's an audiobook, or has been release as an audiobook in addition to other form |
| audiobookAbridged | boolean | Yes | If it's an audiobook, whether it's been abridged |
| audiobookPublishedYear | integer | No | Year the audiobook was published |
| audiobookPublishedMonth | integer | No | Month the audiobook was published |
| audiobookPublishedDay | integer | No | Day the audiobook was published |
| audiobookRunTime | integer | No | Audiobook run time, in minutes |
| productionNumber | string | No | Book's production number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching books

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| books | object[] | No | List of books matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**books 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book unique ID |
| title | string | Yes | Book title |
| publishedYear | integer | No | Year the book was published |
| publishedMonth | integer | No | Month the book was published |
| publishedDay | integer | No | Day the book was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book story |
| stardateTo | number | No | Ending stardate of book story |
| yearFrom | integer | No | Starting year of book story |
| yearTo | integer | No | Ending year of book story |
| novel | boolean | Yes | Whether it's a novel |
| referenceBook | boolean | Yes | Whether it's a reference book |
| biographyBook | boolean | Yes | Whether it's a biography book |
| rolePlayingBook | boolean | Yes | Whether it's a role playing book |
| eBook | boolean | Yes | Whether it's an eBook |
| anthology | boolean | Yes | Whether it's an anthology |
| novelization | boolean | Yes | Whether it's a novelization |
| audiobook | boolean | Yes | Whether it's an audiobook, or has been release as an audiobook in addition to other form |
| audiobookAbridged | boolean | Yes | If it's an audiobook, whether it's been abridged |
| audiobookPublishedYear | integer | No | Year the audiobook was published |
| audiobookPublishedMonth | integer | No | Month the audiobook was published |
| audiobookPublishedDay | integer | No | Day the audiobook was published |
| audiobookRunTime | integer | No | Audiobook run time, in minutes |
| productionNumber | string | No | Book's production number |


## BookCollection

### Retrival of a single book collection

```http
GET /bookCollection
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book collection unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| bookCollection | object | No | Full book collection, returned when queried using UID |


**bookCollection 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Book collection unique ID |
| title | string | No | Book collection title |
| publishedYear | integer | No | Year the book collection was published |
| publishedMonth | integer | No | Month the book collection was published |
| publishedDay | integer | No | Day the book collection was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book collection stories |
| stardateTo | number | No | Ending stardate of book collection stories |
| yearFrom | integer | No | Starting year of book collection stories |
| yearTo | integer | No | Ending year of book collection stories |
| bookSeries | object[] | No | Book series this book collection is included in |
| authors | object[] | No | Authors of the book collection |
| artists | object[] | No | Artists involved in the book collection |
| editors | object[] | No | Editors involved in the book collection |
| publishers | object[] | No | Book collection publishers |
| characters | object[] | No | Characters appearing in the book collection |
| references | object[] | No | References |
| books | object[] | No | Books included in this book collection |


**bookSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


**authors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**artists 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**books 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book unique ID |
| title | string | Yes | Book title |
| publishedYear | integer | No | Year the book was published |
| publishedMonth | integer | No | Month the book was published |
| publishedDay | integer | No | Day the book was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book story |
| stardateTo | number | No | Ending stardate of book story |
| yearFrom | integer | No | Starting year of book story |
| yearTo | integer | No | Ending year of book story |
| novel | boolean | Yes | Whether it's a novel |
| referenceBook | boolean | Yes | Whether it's a reference book |
| biographyBook | boolean | Yes | Whether it's a biography book |
| rolePlayingBook | boolean | Yes | Whether it's a role playing book |
| eBook | boolean | Yes | Whether it's an eBook |
| anthology | boolean | Yes | Whether it's an anthology |
| novelization | boolean | Yes | Whether it's a novelization |
| audiobook | boolean | Yes | Whether it's an audiobook, or has been release as an audiobook in addition to other form |
| audiobookAbridged | boolean | Yes | If it's an audiobook, whether it's been abridged |
| audiobookPublishedYear | integer | No | Year the audiobook was published |
| audiobookPublishedMonth | integer | No | Month the audiobook was published |
| audiobookPublishedDay | integer | No | Day the audiobook was published |
| audiobookRunTime | integer | No | Audiobook run time, in minutes |
| productionNumber | string | No | Book's production number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over book collections

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookCollections | object[] | No | List of book collections matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**bookCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Book collection unique ID |
| title | string | No | Book collection title |
| publishedYear | integer | No | Year the book collection was published |
| publishedMonth | integer | No | Month the book collection was published |
| publishedDay | integer | No | Day the book collection was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book collection stories |
| stardateTo | number | No | Ending stardate of book collection stories |
| yearFrom | integer | No | Starting year of book collection stories |
| yearTo | integer | No | Ending year of book collection stories |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching book collections

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookCollections | object[] | No | List of book collections matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**bookCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Book collection unique ID |
| title | string | No | Book collection title |
| publishedYear | integer | No | Year the book collection was published |
| publishedMonth | integer | No | Month the book collection was published |
| publishedDay | integer | No | Day the book collection was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book collection stories |
| stardateTo | number | No | Ending stardate of book collection stories |
| yearFrom | integer | No | Starting year of book collection stories |
| yearTo | integer | No | Ending year of book collection stories |


## BookSeries

### Retrival of a single book series

```http
GET /bookSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Book series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| bookSeries | object | No | Full book series, returned when queried using UID |


**bookSeries 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of books in book series |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |
| parentSeries | object[] | No | Book series this book series is included in |
| childSeries | object[] | No | Child book series included in this book series |
| publishers | object[] | No | Companies that published this book series |
| books | object[] | No | Books included in this book series |


**parentSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


**childSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**books 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book unique ID |
| title | string | Yes | Book title |
| publishedYear | integer | No | Year the book was published |
| publishedMonth | integer | No | Month the book was published |
| publishedDay | integer | No | Day the book was published |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of book story |
| stardateTo | number | No | Ending stardate of book story |
| yearFrom | integer | No | Starting year of book story |
| yearTo | integer | No | Ending year of book story |
| novel | boolean | Yes | Whether it's a novel |
| referenceBook | boolean | Yes | Whether it's a reference book |
| biographyBook | boolean | Yes | Whether it's a biography book |
| rolePlayingBook | boolean | Yes | Whether it's a role playing book |
| eBook | boolean | Yes | Whether it's an eBook |
| anthology | boolean | Yes | Whether it's an anthology |
| novelization | boolean | Yes | Whether it's a novelization |
| audiobook | boolean | Yes | Whether it's an audiobook, or has been release as an audiobook in addition to other form |
| audiobookAbridged | boolean | Yes | If it's an audiobook, whether it's been abridged |
| audiobookPublishedYear | integer | No | Year the audiobook was published |
| audiobookPublishedMonth | integer | No | Month the audiobook was published |
| audiobookPublishedDay | integer | No | Day the audiobook was published |
| audiobookRunTime | integer | No | Audiobook run time, in minutes |
| productionNumber | string | No | Book's production number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over book series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookSeries | object[] | No | List of book series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**bookSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching book series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| bookSeries | object[] | No | List of book series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**bookSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Book series unique ID |
| title | string | Yes | Book series title |
| publishedYearFrom | integer | No | Year from which the book series was published |
| publishedMonthFrom | integer | No | Month from which the book series was published |
| publishedYearTo | integer | No | Year to which the book series was published |
| publishedMonthTo | integer | No | Month to which the book series was published |
| numberOfBooks | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of book series stories |
| yearTo | integer | No | Ending year of book series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| eBookSeries | boolean | No | Whether it's a e-book series |


## Character

### Retrival of a single character

```http
GET /character
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Character unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| character | object | No | Full character, returned when queried using UID |


**character 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |
| performers | object[] | No | Performers who played this character |
| episodes | object[] | No | Episodes in which this character appeared |
| movies | object[] | No | Movies in which this character appeared |
| characterSpecies | object[] | No | Species this character belongs to |
| characterRelations | object[] | No | Relations with other characters |
| titles | object[] | No | Titles this character holds |
| occupations | object[] | No | Occupations of this character |
| organizations | object[] | No | Organizations this character has affiliation with |


**performers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**movies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**characterSpecies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Entity unique ID |
| name | string | No | Species name |
| numerator | integer | No | Numerator |
| denominator | integer | No | Denominator |


**characterRelations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| type | string | No | Relation type |
| source | object | No | Header character, embedded in other objects |
| target | object | No | Header character, embedded in other objects |


**source 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |


**target 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |


**titles 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Title unique ID |
| name | string | Yes | Title name |
| militaryRank | boolean | No | Whether it's a military rank |
| fleetRank | boolean | No | Whether it's a fleet rank |
| religiousTitle | boolean | No | Whether it's a religious title |
| position | boolean | No | Whether it's a position |
| mirror | boolean | No | Whether this title is from mirror universe |


**occupations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Occupation unique ID |
| name | string | Yes | Occupation name |
| legalOccupation | boolean | No | Whether it's a legal occupation |
| medicalOccupation | boolean | No | Whether it's a medical occupation |
| scientificOccupation | boolean | No | Whether it's a scientific occupation |


**organizations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over characters

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| characters | object[] | No | List of characters matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching characters

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| characters | object[] | No | List of characters matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


## Comics

### Retrival of a single comics

```http
GET /comics
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comics unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comics | object | No | Full comics, returned when queried using UID |


**comics 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comics unique ID |
| title | string | Yes | Comics title |
| publishedYear | integer | No | Year the comics was published |
| publishedMonth | integer | No | Month the comics was published |
| publishedDay | integer | No | Day the comics was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic story |
| stardateTo | number | No | Ending stardate of comic story |
| yearFrom | integer | No | Starting year of comic  story |
| yearTo | integer | No | Ending year of comic story |
| photonovel | boolean | No | Whether it's a photonovel |
| adaptation | boolean | No | Whether it's an adaptation of an episode or a movie |
| comicSeries | object[] | No | Comic series this comics is included in |
| writers | object[] | No | Writers involved in the comics |
| artists | object[] | No | Artists involved in the comics |
| editors | object[] | No | Editors involved in the comics |
| staff | object[] | No | Other staff involved in the comics |
| publishers | object[] | No | Comics publishers |
| characters | object[] | No | Characters appearing in the comics |
| references | object[] | No | References |
| comicCollections | object[] | No | Comic collections this comics is included in |


**comicSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**writers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**artists 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**staff 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**comicCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic collection unique ID |
| title | string | Yes | Comic collection title |
| publishedYear | integer | No | Year the comic collection was published |
| publishedMonth | integer | No | Month the comic collection was published |
| publishedDay | integer | No | Day the comic collection was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic collection stories |
| stardateTo | number | No | Ending stardate of comic collection stories |
| yearFrom | integer | No | Starting year of comic collection stories |
| yearTo | integer | No | Ending year of comic collection stories |
| photonovel | boolean | No | Whether it's a photonovel collection |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comics

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comics | object[] | No | List of comics matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comics 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comics unique ID |
| title | string | Yes | Comics title |
| publishedYear | integer | No | Year the comics was published |
| publishedMonth | integer | No | Month the comics was published |
| publishedDay | integer | No | Day the comics was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic story |
| stardateTo | number | No | Ending stardate of comic story |
| yearFrom | integer | No | Starting year of comic story |
| yearTo | integer | No | Ending year of comic story |
| photonovel | boolean | No | Whether it's a photonovel |
| adaptation | boolean | No | Whether it's an adaptation of an episode or a movie |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comics

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comics | object[] | No | List of comics matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comics 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comics unique ID |
| title | string | Yes | Comics title |
| publishedYear | integer | No | Year the comics was published |
| publishedMonth | integer | No | Month the comics was published |
| publishedDay | integer | No | Day the comics was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic story |
| stardateTo | number | No | Ending stardate of comic story |
| yearFrom | integer | No | Starting year of comic story |
| yearTo | integer | No | Ending year of comic story |
| photonovel | boolean | No | Whether it's a photonovel |
| adaptation | boolean | No | Whether it's an adaptation of an episode or a movie |


## ComicCollection

### Retrival of a single comic collection

```http
GET /comicCollection
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic collection unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicCollection | object | No | Full comic collection, returned when queried using UID |


**comicCollection 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic collection unique ID |
| title | string | Yes | Comic collection title |
| publishedYear | integer | No | Year the comic collection was published |
| publishedMonth | integer | No | Month the comic collection was published |
| publishedDay | integer | No | Day the comic collection was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic collection stories |
| stardateTo | number | No | Ending stardate of comic collection stories |
| yearFrom | integer | No | Starting year of comic collection stories |
| yearTo | integer | No | Ending year of comic collection stories |
| photonovel | boolean | No | Whether it's a photonovel collection |
| comicSeries | object[] | No | Comic series this comic collection is included in |
| writers | object[] | No | Writers involved in the comic collection |
| artists | object[] | No | Artists involved in the comic collection |
| editors | object[] | No | Editors involved in the comic collection |
| staff | object[] | No | Other staff involved in the comic collection |
| publishers | object[] | No | Comic collection publishers |
| characters | object[] | No | Characters appearing in the comic collection |
| references | object[] | No | References |
| comics | object[] | No | Comics included in this comic collection |


**comicSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**writers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**artists 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**staff 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**comics 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comics unique ID |
| title | string | Yes | Comics title |
| publishedYear | integer | No | Year the comics was published |
| publishedMonth | integer | No | Month the comics was published |
| publishedDay | integer | No | Day the comics was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic story |
| stardateTo | number | No | Ending stardate of comic story |
| yearFrom | integer | No | Starting year of comic story |
| yearTo | integer | No | Ending year of comic story |
| photonovel | boolean | No | Whether it's a photonovel |
| adaptation | boolean | No | Whether it's an adaptation of an episode or a movie |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic collections

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicCollections | object[] | No | List of comic collections matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic collection unique ID |
| title | string | Yes | Comic collection title |
| publishedYear | integer | No | Year the comic collection was published |
| publishedMonth | integer | No | Month the comic collection was published |
| publishedDay | integer | No | Day the comic collection was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic collection stories |
| stardateTo | number | No | Ending stardate of comic collection stories |
| yearFrom | integer | No | Starting year of comic collection stories |
| yearTo | integer | No | Ending year of comic collection stories |
| photonovel | boolean | No | Whether it's a photonovel collection |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic collections

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicCollections | object[] | No | List of comic collections matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicCollections 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic collection unique ID |
| title | string | Yes | Comic collection title |
| publishedYear | integer | No | Year the comic collection was published |
| publishedMonth | integer | No | Month the comic collection was published |
| publishedDay | integer | No | Day the comic collection was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic collection stories |
| stardateTo | number | No | Ending stardate of comic collection stories |
| yearFrom | integer | No | Starting year of comic collection stories |
| yearTo | integer | No | Ending year of comic collection stories |
| photonovel | boolean | No | Whether it's a photonovel collection |


## ComicSeries

### Retrival of a single comic series

```http
GET /comicSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicSeries | object | No | Full comic series, returned when queried using UID |


**comicSeries 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |
| parentSeries | object[] | No | Comic series this comic series is included in |
| childSeries | object[] | No | Child comic series included in this comic series |
| publishers | object[] | No | Companies that published this comic series |
| comics | object[] | No | Comics included in this comic series |


**parentSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**childSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**comics 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comics unique ID |
| title | string | Yes | Comics title |
| publishedYear | integer | No | Year the comics was published |
| publishedMonth | integer | No | Month the comics was published |
| publishedDay | integer | No | Day the comics was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| stardateFrom | number | No | Starting stardate of comic story |
| stardateTo | number | No | Ending stardate of comic story |
| yearFrom | integer | No | Starting year of comic story |
| yearTo | integer | No | Ending year of comic story |
| photonovel | boolean | No | Whether it's a photonovel |
| adaptation | boolean | No | Whether it's an adaptation of an episode or a movie |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicSeries | object[] | No | List of comic series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicSeries | object[] | No | List of comic series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


## ComicStrip

### Retrival of a single comic strip

```http
GET /comicStrip
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Comic strip unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| comicStrip | object | No | Full comic strip, returned when queried using UID |


**comicStrip 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic strip unique ID |
| title | string | Yes | Comic strip title |
| periodical | string | No | Title of the periodical the comic strip was published in |
| publishedYearFrom | integer | No | Year from which the comic strip was published |
| publishedMonthFrom | integer | No | Month from which the comic strip was published |
| publishedDayFrom | integer | No | Day from which the comic strip was published |
| publishedYearTo | integer | No | Year to which the comic strip was published |
| publishedMonthTo | integer | No | Month to which the comic strip was published |
| publishedDayTo | integer | No | Day to which the comic strip was published |
| numberOfPages | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of comic strip stories |
| yearTo | integer | No | Ending year of comic strip stories |
| comicSeries | object[] | No | Comic series this comic strip is included in |
| writers | object[] | No | Writers involved in the comic strip |
| artists | object[] | No | Artists involved in the comic strip |
| characters | object[] | No | Characters appearing in the comic strip |


**comicSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic series unique ID |
| title | string | Yes | Comic series title |
| publishedYearFrom | integer | No | Year from which the comic series was published |
| publishedMonthFrom | integer | No | Month from which the comic series was published |
| publishedDayFrom | integer | No | Day from which the comic series was published |
| publishedYearTo | integer | No | Year to which the comic series was published |
| publishedMonthTo | integer | No | Month to which the comic series was published |
| publishedDayTo | integer | No | Day to which the comic series was published |
| numberOfIssues | integer | No | Number of issues |
| stardateFrom | number | No | Starting stardate of comic series stories |
| stardateTo | number | No | Ending stardate of comic series stories |
| yearFrom | integer | No | Starting year of comic series stories |
| yearTo | integer | No | Ending year of comic series stories |
| miniseries | boolean | No | Whether it's a miniseries |
| photonovelSeries | boolean | No | Whether it's a photonovel series |


**writers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**artists 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over comic strips

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicStrips | object[] | No | List of comic strips matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicStrips 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic strip unique ID |
| title | string | Yes | Comic strip title |
| periodical | string | No | Title of the periodical the comic strip was published in |
| publishedYearFrom | integer | No | Year from which the comic strip was published |
| publishedMonthFrom | integer | No | Month from which the comic strip was published |
| publishedDayFrom | integer | No | Day from which the comic strip was published |
| publishedYearTo | integer | No | Year to which the comic strip was published |
| publishedMonthTo | integer | No | Month to which the comic strip was published |
| publishedDayTo | integer | No | Day to which the comic strip was published |
| numberOfPages | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of comic strip story |
| yearTo | integer | No | Ending year of comic strip story |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching comic strips

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| comicStrips | object[] | No | List of comic strips matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**comicStrips 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Comic strip unique ID |
| title | string | Yes | Comic strip title |
| periodical | string | No | Title of the periodical the comic strip was published in |
| publishedYearFrom | integer | No | Year from which the comic strip was published |
| publishedMonthFrom | integer | No | Month from which the comic strip was published |
| publishedDayFrom | integer | No | Day from which the comic strip was published |
| publishedYearTo | integer | No | Year to which the comic strip was published |
| publishedMonthTo | integer | No | Month to which the comic strip was published |
| publishedDayTo | integer | No | Day to which the comic strip was published |
| numberOfPages | integer | No | Number of pages |
| yearFrom | integer | No | Starting year of comic strip story |
| yearTo | integer | No | Ending year of comic strip story |


## Company

### Retrival of a single company

```http
GET /company
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Company unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| company | object | No | Full company, returned when queried using UID |


**company 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over companies

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| companies | object[] | No | List of companies matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**companies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching companies

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| companies | object[] | No | List of companies matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**companies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


## Conflict

### Retrival of a single conflict

```http
GET /conflict
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Conflict unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| conflict | object | No | Base conflict, returned in search results |


**conflict 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Conflict unique ID |
| name | string | Yes | Conflict name |
| yearFrom | integer | No | Starting year of the conflict |
| yearTo | integer | No | Ending year of the conflict |
| earthConflict | boolean | No | Whether it is an Earth conflict |
| federationWar | boolean | No | Whether this conflict is a part of war involving Federation |
| klingonWar | boolean | No | Whether this conflict is a part of war involving the Klingons |
| dominionWarBattle | boolean | No | Whether this conflict is a Dominion war battle |
| alternateReality | boolean | No | Whether this conflict is from alternate reality |
| locations | object[] | No | Locations this conflict occurred at |
| firstSideBelligerents | object[] | No | Organization involved in conflict on first side |
| firstSideCommanders | object[] | No | Commanders involved in conflict on first side |
| secondSideBelligerents | object[] | No | Organization involved in conflict on second side |
| secondSideCommanders | object[] | No | Commanders involved in conflict on second side |


**locations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Location unique ID |
| name | string | Yes | Location name |
| earthlyLocation | boolean | No | Whether it's an earthly location |
| fictionalLocation | boolean | No | Whether it's a fictional location |
| religiousLocation | boolean | No | Whether it's a religious location |
| geographicalLocation | boolean | No | Whether it's a geographical location |
| bodyOfWater | boolean | No | Whether it's a body of water |
| country | boolean | No | Whether it's a country |
| subnationalEntity | boolean | No | Whether it's a subnational entity |
| settlement | boolean | No | Whether it's a settlement |
| usSettlement | boolean | No | Whether it's a US settlement |
| bajoranSettlement | boolean | No | Whether it's a Bajoran settlement |
| colony | boolean | No | Whether it's a colony |
| landform | boolean | No | Whether it's a landform |
| landmark | boolean | No | Whether it's a landmark |
| road | boolean | No | Whether it's a road |
| structure | boolean | No | Whether it's a structure |
| shipyard | boolean | No | Whether it's a shipyard |
| buildingInterior | boolean | No | Whether it's a building interior |
| establishment | boolean | No | Whether it's a establishment |
| medicalEstablishment | boolean | No | Whether it's a medical establishment |
| ds9Establishment | boolean | No | Whether it's a DS9 establishment |
| school | boolean | No | Whether it's a school |
| mirror | boolean | No | Whether this location is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**firstSideBelligerents 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**firstSideCommanders 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**secondSideBelligerents 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**secondSideCommanders 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over conflicts

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| conflicts | object[] | No | List of conflicts matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**conflicts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Conflict unique ID |
| name | string | Yes | Conflict name |
| yearFrom | integer | No | Starting year of the conflict |
| yearTo | integer | No | Ending year of the conflict |
| earthConflict | boolean | No | Whether it was an Earth conflict |
| federationWar | boolean | No | Whether this conflict is part of war involving Federation |
| klingonWar | boolean | No | Whether this conflict is part of war involving the Klingons |
| dominionWarBattle | boolean | No | Whether this conflict is a Dominion war battle |
| alternateReality | boolean | No | Whether this conflict is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching conflicts

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| conflicts | object[] | No | List of conflicts matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**conflicts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Conflict unique ID |
| name | string | Yes | Conflict name |
| yearFrom | integer | No | Starting year of the conflict |
| yearTo | integer | No | Ending year of the conflict |
| earthConflict | boolean | No | Whether it was an Earth conflict |
| federationWar | boolean | No | Whether this conflict is part of war involving Federation |
| klingonWar | boolean | No | Whether this conflict is part of war involving the Klingons |
| dominionWarBattle | boolean | No | Whether this conflict is a Dominion war battle |
| alternateReality | boolean | No | Whether this conflict is from alternate reality |


## Element

### Retrival of a single element

```http
GET /element
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Element unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| element | object | No | Full element, returned when queried using UID |


**element 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Element unique ID |
| name | string | Yes | Element name |
| symbol | string | No | Element symbol |
| atomicNumber | integer | No | Element atomic number |
| atomicWeight | integer | No | Element atomic weight |
| transuranium | boolean | No | Whether it's a transuranium |
| gammaSeries | boolean | No | Whether it belongs to Gamma series |
| hypersonicSeries | boolean | No | Whether it belongs to Hypersonic series |
| megaSeries | boolean | No | Whether it belongs to Mega series |
| omegaSeries | boolean | No | Whether it belongs to Omega series |
| transonicSeries | boolean | No | Whether it belongs to Transonic series |
| worldSeries | boolean | No | Whether it belongs to World series |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over elements

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| elements | object[] | No | List of elements matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**elements 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Element unique ID |
| name | string | Yes | Element name |
| symbol | string | No | Element symbol |
| atomicNumber | integer | No | Element atomic number |
| atomicWeight | integer | No | Element atomic weight |
| transuranium | boolean | No | Whether it's a transuranium |
| gammaSeries | boolean | No | Whether it belongs to Gamma series |
| hypersonicSeries | boolean | No | Whether it belongs to Hypersonic series |
| megaSeries | boolean | No | Whether it belongs to Mega series |
| omegaSeries | boolean | No | Whether it belongs to Omega series |
| transonicSeries | boolean | No | Whether it belongs to Transonic series |
| worldSeries | boolean | No | Whether it belongs to World series |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching elements

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| elements | object[] | No | List of elements matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**elements 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Element unique ID |
| name | string | Yes | Element name |
| symbol | string | No | Element symbol |
| atomicNumber | integer | No | Element atomic number |
| atomicWeight | integer | No | Element atomic weight |
| transuranium | boolean | No | Whether it's a transuranium |
| gammaSeries | boolean | No | Whether it belongs to Gamma series |
| hypersonicSeries | boolean | No | Whether it belongs to Hypersonic series |
| megaSeries | boolean | No | Whether it belongs to Mega series |
| omegaSeries | boolean | No | Whether it belongs to Omega series |
| transonicSeries | boolean | No | Whether it belongs to Transonic series |
| worldSeries | boolean | No | Whether it belongs to World series |


## Episode

### Retrival of a single episode

```http
GET /episode
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Episode unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| episode | object | No | Full episode, returned when queried using UID |


**episode 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Base series, returned in search results |
| season | object | No | Base season, returned in search results |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |
| writers | object[] | No | Writers involved in the episode |
| teleplayAuthors | object[] | No | Teleplay authors involved in the episode |
| storyAuthors | object[] | No | Story authors involved in the episode |
| directors | object[] | No | Directors authors involved in the episode |
| performers | object[] | No | Performers appearing in the episode |
| stuntPerformers | object[] | No | Stunt performers appearing in the episode |
| standInPerformers | object[] | No | Stand-in performers appearing in the episode |
| characters | object[] | No | Characters appearing in the episode |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Header company, embedded in other objects |
| originalBroadcaster | object | No | Header company, embedded in other objects |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Header series, embedded in other objects |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**writers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**teleplayAuthors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**storyAuthors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**directors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**performers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**stuntPerformers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**standInPerformers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over episodes

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| episodes | object[] | No | List of episodes matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching episodes

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| episodes | object[] | No | List of episodes matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


## Food

### Retrival of a single food

```http
GET /food
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Food unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| food | object | No | Full food, returned when queried using UID |


**food 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Food unique ID |
| name | string | Yes | Food name |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| dessert | boolean | No | Whether it's a dessert |
| fruit | boolean | No | Whether it's a fruit |
| herbOrSpice | boolean | No | Whether it's an herb or a spice |
| sauce | boolean | No | Whether it's a sauce |
| soup | boolean | No | Whether it's a soup |
| beverage | boolean | No | Whether it's a beverage |
| alcoholicBeverage | boolean | No | Whether it's an alcoholic beverage |
| juice | boolean | No | Whether it's a juice |
| tea | boolean | No | Whether it's a tea |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over foods

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| foods | object[] | No | List of foods matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**foods 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Food unique ID |
| name | string | Yes | Food name |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| dessert | boolean | No | Whether it's a dessert |
| fruit | boolean | No | Whether it's a fruit |
| herbOrSpice | boolean | No | Whether it's a herb or a spice |
| sauce | boolean | No | Whether it's a sauce |
| soup | boolean | No | Whether it's a soup |
| beverage | boolean | No | Whether it's a beverage |
| alcoholicBeverage | boolean | No | Whether it's an alcoholic beverage |
| juice | boolean | No | Whether it's a juice |
| tea | boolean | No | Whether it's a tea |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching foods

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| foods | object[] | No | List of foods matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**foods 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Food unique ID |
| name | string | Yes | Food name |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| dessert | boolean | No | Whether it's a dessert |
| fruit | boolean | No | Whether it's a fruit |
| herbOrSpice | boolean | No | Whether it's a herb or a spice |
| sauce | boolean | No | Whether it's a sauce |
| soup | boolean | No | Whether it's a soup |
| beverage | boolean | No | Whether it's a beverage |
| alcoholicBeverage | boolean | No | Whether it's an alcoholic beverage |
| juice | boolean | No | Whether it's a juice |
| tea | boolean | No | Whether it's a tea |


## Literature

### Retrival of a single literature

```http
GET /literature
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Literature unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| literature | object | No | Full literature, returned when queried using UID |


**literature 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Literature unique ID |
| title | string | Yes | Literature title |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| shakespeareanWork | boolean | No | Whether it's a Shakespearean work |
| report | boolean | No | Whether it's a report |
| scientificLiterature | boolean | No | Whether it's a scientific literature |
| technicalManual | boolean | No | Whether it's a technical manual |
| religiousLiterature | boolean | No | Whether it's a religious literature |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over literature

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| literature | object[] | No | List of literature matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**literature 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Literature unique ID |
| title | string | Yes | Literature title |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| shakespeareanWork | boolean | No | Whether it's a Shakespearean work |
| report | boolean | No | Whether it's a report |
| scientificLiterature | boolean | No | Whether it's a scientific literature |
| technicalManual | boolean | No | Whether it's a technical manual |
| religiousLiterature | boolean | No | Whether it's a religious literature |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching literature

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| literature | object[] | No | List of literature matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**literature 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Literature unique ID |
| title | string | Yes | Literature title |
| earthlyOrigin | boolean | No | Whether it's of earthly origin |
| shakespeareanWork | boolean | No | Whether it's a Shakespearean work |
| report | boolean | No | Whether it's a report |
| scientificLiterature | boolean | No | Whether it's a scientific literature |
| technicalManual | boolean | No | Whether it's a technical manual |
| religiousLiterature | boolean | No | Whether it's a religious literature |


## Location

### Retrival of a single location

```http
GET /location
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Location unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| location | object | No | Full location, returned when queried using UID |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Location unique ID |
| name | string | Yes | Location name |
| earthlyLocation | boolean | No | Whether it's an earthly location |
| fictionalLocation | boolean | No | Whether it's a fictional location |
| religiousLocation | boolean | No | Whether it's a religious location |
| geographicalLocation | boolean | No | Whether it's a geographical location |
| bodyOfWater | boolean | No | Whether it's a body of water |
| country | boolean | No | Whether it's a country |
| subnationalEntity | boolean | No | Whether it's a subnational entity |
| settlement | boolean | No | Whether it's a settlement |
| usSettlement | boolean | No | Whether it's a US settlement |
| bajoranSettlement | boolean | No | Whether it's a Bajoran settlement |
| colony | boolean | No | Whether it's a colony |
| landform | boolean | No | Whether it's a landform |
| landmark | boolean | No | Whether it's a landmark |
| road | boolean | No | Whether it's a road |
| structure | boolean | No | Whether it's a structure |
| shipyard | boolean | No | Whether it's a shipyard |
| buildingInterior | boolean | No | Whether it's a building interior |
| establishment | boolean | No | Whether it's a establishment |
| medicalEstablishment | boolean | No | Whether it's a medical establishment |
| ds9Establishment | boolean | No | Whether it's a DS9 establishment |
| school | boolean | No | Whether it's a school |
| mirror | boolean | No | Whether this location is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over locations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| locations | object[] | No | List of locations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**locations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Location unique ID |
| name | string | Yes | Location name |
| earthlyLocation | boolean | No | Whether it's an earthly location |
| fictionalLocation | boolean | No | Whether it's a fictional location |
| religiousLocation | boolean | No | Whether it's a religious location |
| geographicalLocation | boolean | No | Whether it's a geographical location |
| bodyOfWater | boolean | No | Whether it's a body of water |
| country | boolean | No | Whether it's a country |
| subnationalEntity | boolean | No | Whether it's a subnational entity |
| settlement | boolean | No | Whether it's a settlement |
| usSettlement | boolean | No | Whether it's a US settlement |
| bajoranSettlement | boolean | No | Whether it's a Bajoran settlement |
| colony | boolean | No | Whether it's a colony |
| landform | boolean | No | Whether it's a landform |
| landmark | boolean | No | Whether it's a landmark |
| road | boolean | No | Whether it's a road |
| structure | boolean | No | Whether it's a structure |
| shipyard | boolean | No | Whether it's a shipyard |
| buildingInterior | boolean | No | Whether it's a building interior |
| establishment | boolean | No | Whether it's a establishment |
| medicalEstablishment | boolean | No | Whether it's a medical establishment |
| ds9Establishment | boolean | No | Whether it's a DS9 establishment |
| school | boolean | No | Whether it's a school |
| mirror | boolean | No | Whether this location is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching locations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| locations | object[] | No | List of locations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**locations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Location unique ID |
| name | string | Yes | Location name |
| earthlyLocation | boolean | No | Whether it's an earthly location |
| fictionalLocation | boolean | No | Whether it's a fictional location |
| religiousLocation | boolean | No | Whether it's a religious location |
| geographicalLocation | boolean | No | Whether it's a geographical location |
| bodyOfWater | boolean | No | Whether it's a body of water |
| country | boolean | No | Whether it's a country |
| subnationalEntity | boolean | No | Whether it's a subnational entity |
| settlement | boolean | No | Whether it's a settlement |
| usSettlement | boolean | No | Whether it's a US settlement |
| bajoranSettlement | boolean | No | Whether it's a Bajoran settlement |
| colony | boolean | No | Whether it's a colony |
| landform | boolean | No | Whether it's a landform |
| landmark | boolean | No | Whether it's a landmark |
| road | boolean | No | Whether it's a road |
| structure | boolean | No | Whether it's a structure |
| shipyard | boolean | No | Whether it's a shipyard |
| buildingInterior | boolean | No | Whether it's a building interior |
| establishment | boolean | No | Whether it's a establishment |
| medicalEstablishment | boolean | No | Whether it's a medical establishment |
| ds9Establishment | boolean | No | Whether it's a DS9 establishment |
| school | boolean | No | Whether it's a school |
| mirror | boolean | No | Whether this location is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


## Magazine

### Retrival of a single magazine

```http
GET /magazine
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Magazine unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| magazine | object | No | Full magazine, returned when queried using UID |


**magazine 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine unique ID |
| title | string | Yes | Magazine title |
| publishedYear | integer | No | Year the magazine was published |
| publishedMonth | integer | No | Month the magazine was published |
| publishedDay | integer | No | Day the magazine was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| issueNumber | string | No | Magazine issue number |
| magazineSeries | object[] | No | Magazine series this magazine is included in |
| editors | object[] | No | Editors involved in the magazine |
| publishers | object[] | No | Magazine publishers |


**magazineSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine series unique ID |
| title | string | Yes | Magazine series title |
| publishedYearFrom | integer | No | Year from which the magazine series was published |
| publishedMonthFrom | integer | No | Month from which the magazine series was published |
| publishedYearTo | integer | No | Year to which the magazine series was published |
| publishedMonthTo | integer | No | Month to which the magazine series was published |
| numberOfIssues | integer | No | Number of issues |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over magazines

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazines | object[] | No | List of magazines matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**magazines 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine unique ID |
| title | string | Yes | Magazine title |
| publishedYear | integer | No | Year the magazine was published |
| publishedMonth | integer | No | Month the magazine was published |
| publishedDay | integer | No | Day the magazine was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| issueNumber | string | No | Magazine issue number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching magazines

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazines | object[] | No | List of magazines matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**magazines 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine unique ID |
| title | string | Yes | Magazine title |
| publishedYear | integer | No | Year the magazine was published |
| publishedMonth | integer | No | Month the magazine was published |
| publishedDay | integer | No | Day the magazine was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| issueNumber | string | No | Magazine issue number |


## MagazineSeries

### Retrival of a single magazine series

```http
GET /magazineSeries
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Magazine series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| magazineSeries | object | No | Full magazine series, returned when queried using UID |


**magazineSeries 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine series unique ID |
| title | string | Yes | Magazine series title |
| publishedYearFrom | integer | No | Year from which the magazine series was published |
| publishedMonthFrom | integer | No | Month from which the magazine series was published |
| publishedYearTo | integer | No | Year to which the magazine series was published |
| publishedMonthTo | integer | No | Month to which the magazine series was published |
| numberOfIssues | integer | No | Number of issues |
| publishers | object[] | No | Companies that published this magazine series |
| editors | object[] | No | Editors involved in the magazine series |
| magazines | object[] | No | Magazines included in this magazine series |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**editors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**magazines 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine unique ID |
| title | string | Yes | Magazine title |
| publishedYear | integer | No | Year the magazine was published |
| publishedMonth | integer | No | Month the magazine was published |
| publishedDay | integer | No | Day the magazine was published |
| coverYear | integer | No | Cover publication year |
| coverMonth | integer | No | Cover publication month |
| coverDay | integer | No | Cover publication day |
| numberOfPages | integer | No | Number of pages |
| issueNumber | string | No | Magazine issue number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over magazine series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazineSeries | object[] | No | List of magazine series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**magazineSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine series unique ID |
| title | string | Yes | Magazine series title |
| publishedYearFrom | integer | No | Year from which the magazine series was published |
| publishedMonthFrom | integer | No | Month from which the magazine series was published |
| publishedYearTo | integer | No | Year to which the magazine series was published |
| publishedMonthTo | integer | No | Month to which the magazine series was published |
| numberOfIssues | integer | No | Number of issues |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching magazine series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| magazineSeries | object[] | No | List of magazine series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**magazineSeries 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Magazine series unique ID |
| title | string | Yes | Magazine series title |
| publishedYearFrom | integer | No | Year from which the magazine series was published |
| publishedMonthFrom | integer | No | Month from which the magazine series was published |
| publishedYearTo | integer | No | Year to which the magazine series was published |
| publishedMonthTo | integer | No | Month to which the magazine series was published |
| numberOfIssues | integer | No | Number of issues |


## Material

### Retrival of a single material

```http
GET /material
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Material unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| material | object | No | Full material, returned when queried using UID |


**material 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Material unique ID |
| name | string | Yes | Material name |
| chemicalCompound | boolean | No | Whether it's a chemical compound |
| biochemicalCompound | boolean | No | Whether it's a biochemical compound |
| drug | boolean | No | Whether it's a drug |
| poisonousSubstance | boolean | No | Whether it's a poisonous substance |
| explosive | boolean | No | Whether it's an explosive |
| gemstone | boolean | No | Whether it's a gemstone |
| alloyOrComposite | boolean | No | Whether it's an alloy or a composite |
| fuel | boolean | No | Whether it's a fuel |
| mineral | boolean | No | Whether it's a mineral |
| preciousMaterial | boolean | No | Whether it's a precious material |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over materials

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| materials | object[] | No | List of materials matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**materials 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Material unique ID |
| name | string | Yes | Material name |
| chemicalCompound | boolean | No | Whether it's a chemical compound |
| biochemicalCompound | boolean | No | Whether it's a biochemical compound |
| drug | boolean | No | Whether it's a drug |
| poisonousSubstance | boolean | No | Whether it's a poisonous substance |
| explosive | boolean | No | Whether it's an explosive |
| gemstone | boolean | No | Whether it's a gemstone |
| alloyOrComposite | boolean | No | Whether it's an alloy or a composite |
| fuel | boolean | No | Whether it's a fuel |
| mineral | boolean | No | Whether it's a mineral |
| preciousMaterial | boolean | No | Whether it's a precious material |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching materials

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| materials | object[] | No | List of materials matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**materials 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Material unique ID |
| name | string | Yes | Material name |
| chemicalCompound | boolean | No | Whether it's a chemical compound |
| biochemicalCompound | boolean | No | Whether it's a biochemical compound |
| drug | boolean | No | Whether it's a drug |
| poisonousSubstance | boolean | No | Whether it's a poisonous substance |
| explosive | boolean | No | Whether it's an explosive |
| gemstone | boolean | No | Whether it's a gemstone |
| alloyOrComposite | boolean | No | Whether it's an alloy or a composite |
| fuel | boolean | No | Whether it's a fuel |
| mineral | boolean | No | Whether it's a mineral |
| preciousMaterial | boolean | No | Whether it's a precious material |


## MedicalCondition

### Retrival of a single medical condition

```http
GET /medicalCondition
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Medical condition unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| medicalCondition | object | No | Full medical condition, returned when queried using UID |


**medicalCondition 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Medical condition unique ID |
| name | string | Yes | Medical condition name |
| psychologicalCondition | boolean | No | Whether it's a psychological condition |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over medical conditions

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| medicalConditions | object[] | No | List of medical conditions matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**medicalConditions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Medical condition unique ID |
| name | string | Yes | Medical condition name |
| psychologicalCondition | boolean | No | Whether it's a psychological condition |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching medical conditions

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| medicalConditions | object[] | No | List of medical conditions matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**medicalConditions 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Medical condition unique ID |
| name | string | Yes | Medical condition name |
| psychologicalCondition | boolean | No | Whether it's a psychological condition |


## Movie

### Retrival of a single movie

```http
GET /movie
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Movie unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| movie | object | No | Full movie, returned when queried using UID |


**movie 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Base staff, returned in search results |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |
| writers | object[] | No | Writers involved in the movie |
| screenplayAuthors | object[] | No | Screenplay authors involved in the movie |
| storyAuthors | object[] | No | Story authors authors involved in the movie |
| directors | object[] | No | Directors authors involved in the movie |
| producers | object[] | No | Producers authors involved in the movie |
| staff | object[] | No | Other staff involved in the movie |
| performers | object[] | No | Performers appearing in the movie |
| stuntPerformers | object[] | No | Stunt performers appearing in the movie |
| standInPerformers | object[] | No | Stand-in performers appearing in the movie |
| characters | object[] | No | Characters appearing in the movie |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**writers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**screenplayAuthors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**storyAuthors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**directors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**producers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**staff 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**performers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**stuntPerformers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**standInPerformers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over movies

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| movies | object[] | No | List of movies matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**movies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching movies

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| movies | object[] | No | List of movies matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**movies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


## Occupation

### Retrival of a single occupation

```http
GET /occupation
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Occupation unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| occupation | object | No | Full occupation, returned when queried using UID |


**occupation 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Occupation unique ID |
| name | string | Yes | Occupation name |
| legalOccupation | boolean | No | Whether it's a legal occupation |
| medicalOccupation | boolean | No | Whether it's a medical occupation |
| scientificOccupation | boolean | No | Whether it's a scientific occupation |
| characters | object[] | No | Characters with this occupation |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over occupations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| occupations | object[] | No | List of occupations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**occupations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Occupation unique ID |
| name | string | Yes | Occupation name |
| legalOccupation | boolean | No | Whether it's a legal occupation |
| medicalOccupation | boolean | No | Whether it's a medical occupation |
| scientificOccupation | boolean | No | Whether it's a scientific occupation |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching occupations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| occupations | object[] | No | List of occupations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**occupations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Occupation unique ID |
| name | string | Yes | Occupation name |
| legalOccupation | boolean | No | Whether it's a legal occupation |
| medicalOccupation | boolean | No | Whether it's a medical occupation |
| scientificOccupation | boolean | No | Whether it's a scientific occupation |


## Organization

### Retrival of a single organization

```http
GET /organization
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Organization unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| organization | object | No | Full organization, returned when queried using UID |


**organization 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this organization is from alternate reality |
| characters | object[] | No | Characters belonging to this organization |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over organizations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| organizations | object[] | No | List of organizations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**organizations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching organizations

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| organizations | object[] | No | List of organizations matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**organizations 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


## Performer

### Retrival of a single performer

```http
GET /performer
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Performer unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| performer | object | No | Full performer, returned when queried using UID |


**performer 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |
| episodesPerformances | object[] | No | Episodes in which this person appeared as a performer |
| episodesStuntPerformances | object[] | No | Episodes in which this person appeared as a stunt performer |
| episodesStandInPerformances | object[] | No | Episodes in which this person appeared as a stand-in performer |
| moviesPerformances | object[] | No | Movies in which this person appeared as a performer |
| moviesStuntPerformances | object[] | No | Movies in which this person appeared as a stunt performer |
| moviesStandInPerformances | object[] | No | Movies in which this person appeared as a stand-in performer |
| characters | object[] | No | Characters played by this performer |


**episodesPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**episodesStuntPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**episodesStandInPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**moviesPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**moviesStuntPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**moviesStandInPerformances 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over performers

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| performers | object[] | No | List of performers matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**performers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching performers

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| performers | object[] | No | List of performers matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**performers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Performer unique ID |
| name | string | Yes | Performer name |
| birthName | string | No | Performer birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the performer was born |
| placeOfBirth | string | No | Place the performer was born |
| dateOfDeath | string | No | Date the performer died |
| placeOfDeath | string | No | Place the performer died |
| animalPerformer | boolean | No | Whether it's an animal performer |
| disPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Discovery |
| ds9Performer | boolean | No | Whether it's a performer that appeared in Star Trek: Deep Space Nine |
| entPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Enterprise |
| filmPerformer | boolean | No | Whether it's a performer that appeared in a Star Trek movie |
| standInPerformer | boolean | No | Whether it's a stand-in performer |
| stuntPerformer | boolean | No | Whether it's a stunt performer |
| tasPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Animated Series |
| tngPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Next Generation |
| tosPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: The Original Series |
| videoGamePerformer | boolean | No | Whether it's a video game performer |
| voicePerformer | boolean | No | Whether it's a voice performer |
| voyPerformer | boolean | No | Whether it's a performer that appeared in Star Trek: Voyager |


## Season

### Retrival of a single season

```http
GET /season
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Season unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| season | object | No | Full location, returned when queried using UID |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Base series, returned in search results |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |
| episodes | object[] | No | Episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Header company, embedded in other objects |
| originalBroadcaster | object | No | Header company, embedded in other objects |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over seasons

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| seasons | object[] | No | List of seasons matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**seasons 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Header series, embedded in other objects |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching seasons

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| seasons | object[] | No | List of seasons matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**seasons 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Header series, embedded in other objects |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


## Series

### Retrival of a single series

```http
GET /series
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Series unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| series | object | No | Full series, returned when queried using UID |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Base company, returned in search results |
| originalBroadcaster | object | No | Base company, returned in search results |
| episodes | object[] | No | Episodes in the series |
| seasons | object[] | No | Seasons in the series |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**seasons 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Header series, embedded in other objects |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| series | object[] | No | List of series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**series 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Header company, embedded in other objects |
| originalBroadcaster | object | No | Header company, embedded in other objects |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching series

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| series | object[] | No | List of series matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**series 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Header company, embedded in other objects |
| originalBroadcaster | object | No | Header company, embedded in other objects |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


## Soundtrack

### Retrival of a single soundtrack

```http
GET /soundtrack
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Soundtrack unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| soundtrack | object | No | Full soundtrack, returned when queried using UID |


**soundtrack 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Soundtrack unique ID |
| title | string | Yes | Soundtrack title |
| releaseDate | string | No | Release date |
| length | integer | No | Length, in seconds |
| labels | object[] | No | Labels this soundtrack was relesed by |
| composers | object[] | No | Composers |
| contributors | object[] | No | Other musicians that contributed to this soundtrack |
| orchestrators | object[] | No | Orchestrators |
| references | object[] | No | References |


**labels 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**composers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**contributors 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**orchestrators 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over soundtracks

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| soundtracks | object[] | No | List of soundtracks matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**soundtracks 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Soundtrack unique ID |
| title | string | Yes | Soundtrack title |
| releaseDate | string | No | Release date |
| length | integer | No | Length, in seconds |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching soundtracks

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| soundtracks | object[] | No | List of soundtracks matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**soundtracks 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Soundtrack unique ID |
| title | string | Yes | Soundtrack title |
| releaseDate | string | No | Release date |
| length | integer | No | Length, in seconds |


## Spacecraft

### Retrival of a single spacecraft

```http
GET /spacecraft
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Spacecraft unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spacecraft | object | No | Full spacecraft, returned when queried using UID |


**spacecraft 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft unique ID |
| name | string | Yes | Spacecraft name |
| registry | string | No | Spacecraft registry |
| status | string | No | Status of a spacecraft (in prime reality, if spacecraft was in more than one realities) |
| dateStatus | string | No | Date the spacecraft status was last known |
| spacecraftClass | object | No | Base spacecraft class, returned in search results |
| owner | object | No | Base organization, returned in search results |
| operator | object | No | Base organization, returned in search results |
| spacecraftTypes | object[] | No | Spacecraft types |


**spacecraftClass 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |
| numberOfDecks | integer | No | Number of decks |
| warpCapable | boolean | No | Whether it's a warp-capable spacecraft class |
| alternateReality | boolean | No | Whether this spacecraft class is from alternate reality |
| activeFrom | string | No | Starting period when this spacecraft class was in use |
| activeTo | string | No | Ending period when this spacecraft class was in use |
| species | object | No | Header species, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |
| affiliation | object | No | Header organization, embedded in other objects |


**species 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**affiliation 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**spacecraftTypes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Spacecraft type unique ID |
| name | string | No | Spacecraft type name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over spacecrafts

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecrafts | object[] | No | List of spacecrafts matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**spacecrafts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft unique ID |
| name | string | Yes | Spacecraft name |
| registry | string | No | Spacecraft registry |
| status | string | No | Status of a spacecraft (in prime reality, if spacecraft was in more than one realities) |
| dateStatus | string | No | Date the spacecraft status was last known |
| spacecraftClass | object | No | Header spacecraft class, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |


**spacecraftClass 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching spacecrafts

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecrafts | object[] | No | List of spacecrafts matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**spacecrafts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft unique ID |
| name | string | Yes | Spacecraft name |
| registry | string | No | Spacecraft registry |
| status | string | No | Status of a spacecraft (in prime reality, if spacecraft was in more than one realities) |
| dateStatus | string | No | Date the spacecraft status was last known |
| spacecraftClass | object | No | Header spacecraft class, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |


**spacecraftClass 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


## SpacecraftClass

### Retrival of a single spacecraft class

```http
GET /spacecraftClass
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | SpacecraftClass unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spacecraftClass | object | No | Full spacecraft class, returned when queried using UID |


**spacecraftClass 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |
| numberOfDecks | integer | No | Number of decks |
| warpCapable | boolean | No | Whether it's a warp-capable spacecraft class |
| alternateReality | boolean | No | Whether this spacecraft class is from alternate reality |
| activeFrom | string | No | Starting period when this spacecraft class was in use |
| activeTo | string | No | Ending period when this spacecraft class was in use |
| species | object | No | Header species, embedded in other objects |
| owner | object | No | Base organization, returned in search results |
| operator | object | No | Base organization, returned in search results |
| affiliation | object | No | Base organization, returned in search results |
| spacecraftTypes | object[] | No | Spacecraft types |
| spacecrafts | object[] | No | Spacecrafts |


**species 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**affiliation 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |
| government | boolean | No | Whether it's a government |
| intergovernmentalOrganization | boolean | No | Whether it's an intergovernmental organization |
| researchOrganization | boolean | No | Whether it's a research organization |
| sportOrganization | boolean | No | Whether it's a sport organization |
| medicalOrganization | boolean | No | Whether it's a medical organization |
| militaryOrganization | boolean | No | Whether it's a military organization |
| militaryUnit | boolean | No | Whether it's a military unit |
| governmentAgency | boolean | No | Whether it's a government agency |
| lawEnforcementAgency | boolean | No | Whether it's a law enforcement agency |
| prisonOrPenalColony | boolean | No | Whether it's a prison or penal colony |
| mirror | boolean | No | Whether this organization is from mirror universe |
| alternateReality | boolean | No | Whether this location is from alternate reality |


**spacecraftTypes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Spacecraft type unique ID |
| name | string | No | Spacecraft type name |


**spacecrafts 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft unique ID |
| name | string | Yes | Spacecraft name |
| registry | string | No | Spacecraft registry |
| status | string | No | Status of a spacecraft (in prime reality, if spacecraft was in more than one realities) |
| dateStatus | string | No | Date the spacecraft status was last known |
| spacecraftClass | object | No | Header spacecraft class, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |


**spacecraftClass 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over spacecraft classes

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecraftClasses | object[] | No | List of spacecraft classes matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**spacecraftClasses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |
| numberOfDecks | integer | No | Number of decks |
| warpCapable | boolean | No | Whether it's a warp-capable spacecraft class |
| alternateReality | boolean | No | Whether this spacecraft class is from alternate reality |
| activeFrom | string | No | Starting period when this spacecraft class was in use |
| activeTo | string | No | Ending period when this spacecraft class was in use |
| species | object | No | Header species, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |
| affiliation | object | No | Header organization, embedded in other objects |


**species 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**affiliation 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching spacecraft classes

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| spacecraftClasses | object[] | No | List of spacecraft classes matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**spacecraftClasses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Spacecraft class unique ID |
| name | string | Yes | Spacecraft class name |
| numberOfDecks | integer | No | Number of decks |
| warpCapable | boolean | No | Whether it's a warp-capable spacecraft class |
| alternateReality | boolean | No | Whether this spacecraft class is from alternate reality |
| activeFrom | string | No | Starting period when this spacecraft class was in use |
| activeTo | string | No | Ending period when this spacecraft class was in use |
| species | object | No | Header species, embedded in other objects |
| owner | object | No | Header organization, embedded in other objects |
| operator | object | No | Header organization, embedded in other objects |
| affiliation | object | No | Header organization, embedded in other objects |


**species 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |


**owner 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**operator 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


**affiliation 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Organization unique ID |
| name | string | Yes | Organization name |


## Species

### Retrival of a single species

```http
GET /species
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Species unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| species | object | No | Full species, returned when queried using UID |


**species 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |
| homeworld | object | No | Base astronomical object, returned in search results |
| quadrant | object | No | Base astronomical object, returned in search results |
| extinctSpecies | boolean | No | Whether it's an extinct species |
| warpCapableSpecies | boolean | No | Whether it's a warp-capable species |
| extraGalacticSpecies | boolean | No | Whether it's an extra-galactic species |
| humanoidSpecies | boolean | No | Whether it's a humanoid species |
| reptilianSpecies | boolean | No | Whether it's a reptilian species |
| nonCorporealSpecies | boolean | No | Whether it's a non-corporeal species |
| shapeshiftingSpecies | boolean | No | Whether it's a shapeshifting species |
| spaceborneSpecies | boolean | No | Whether it's a spaceborne species |
| telepathicSpecies | boolean | No | Whether it's a telepathic species |
| transDimensionalSpecies | boolean | No | Whether it's a trans-dimensional species |
| unnamedSpecies | boolean | No | Whether it's a unnamed species |
| alternateReality | boolean | No | Whether this species is from alternate reality |
| characters | object[] | No | Characters belonging to the species |


**homeworld 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**quadrant 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |
| astronomicalObjectType | string | Yes | Astronomical object type |
| location | object | No | Header astronomical object, embedded in other objects |


**location 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over species

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| species | object[] | No | List of species matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**species 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |
| homeworld | object | No | Header astronomical object, embedded in other objects |
| quadrant | object | No | Header astronomical object, embedded in other objects |
| extinctSpecies | boolean | No | Whether it's an extinct species |
| warpCapableSpecies | boolean | No | Whether it's a warp-capable species |
| extraGalacticSpecies | boolean | No | Whether it's an extra-galactic species |
| humanoidSpecies | boolean | No | Whether it's a humanoid species |
| reptilianSpecies | boolean | No | Whether it's a reptilian species |
| nonCorporealSpecies | boolean | No | Whether it's a non-corporeal species |
| shapeshiftingSpecies | boolean | No | Whether it's a shapeshifting species |
| spaceborneSpecies | boolean | No | Whether it's a spaceborne species |
| telepathicSpecies | boolean | No | Whether it's a telepathic species |
| transDimensionalSpecies | boolean | No | Whether it's a trans-dimensional species |
| unnamedSpecies | boolean | No | Whether it's a unnamed species |
| alternateReality | boolean | No | Whether this species is from alternate reality |


**homeworld 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**quadrant 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching species

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| species | object[] | No | List of species matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**species 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Species unique ID |
| name | string | Yes | Species name |
| homeworld | object | No | Header astronomical object, embedded in other objects |
| quadrant | object | No | Header astronomical object, embedded in other objects |
| extinctSpecies | boolean | No | Whether it's an extinct species |
| warpCapableSpecies | boolean | No | Whether it's a warp-capable species |
| extraGalacticSpecies | boolean | No | Whether it's an extra-galactic species |
| humanoidSpecies | boolean | No | Whether it's a humanoid species |
| reptilianSpecies | boolean | No | Whether it's a reptilian species |
| nonCorporealSpecies | boolean | No | Whether it's a non-corporeal species |
| shapeshiftingSpecies | boolean | No | Whether it's a shapeshifting species |
| spaceborneSpecies | boolean | No | Whether it's a spaceborne species |
| telepathicSpecies | boolean | No | Whether it's a telepathic species |
| transDimensionalSpecies | boolean | No | Whether it's a trans-dimensional species |
| unnamedSpecies | boolean | No | Whether it's a unnamed species |
| alternateReality | boolean | No | Whether this species is from alternate reality |


**homeworld 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


**quadrant 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Astronomical object's unique ID |
| name | string | Yes | Astronomical object name |


## Staff

### Retrival of a single staff

```http
GET /staff
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Staff unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| staff | object | No | Full staff, returned when queried using UID |


**staff 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person is from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and attraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publicity artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |
| writtenEpisodes | object[] | No | Episodes written by this person |
| teleplayAuthoredEpisodes | object[] | No | Episodes to which this person has written teleplay |
| storyAuthoredEpisodes | object[] | No | Episodes to which this person has written story |
| directedEpisodes | object[] | No | Episodes directed by this person |
| episodes | object[] | No | Episodes on which this person worked |
| writtenMovies | object[] | No | Movies written by this person |
| screenplayAuthoredMovies | object[] | No | Movies to which this person has written screenplay |
| storyAuthoredMovies | object[] | No | Movies to which this person has written story |
| directedMovies | object[] | No | Movies directed by this person |
| producedMovies | object[] | No | Movies produced by this person |
| movies | object[] | No | Movies on which this person worked |


**writtenEpisodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**teleplayAuthoredEpisodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**storyAuthoredEpisodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**directedEpisodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**episodes 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Episode unique ID |
| title | string | Yes | Episode title |
| titleGerman | string | No | Episode title in German |
| titleItalian | string | No | Episode title in Italian |
| titleJapanese | string | No | Episode title in Japanese |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| seasonNumber | integer | No | Season number |
| episodeNumber | integer | No | Episode number in season |
| productionSerialNumber | string | No | Production serial number |
| featureLength | boolean | No | Whether it's a feature length episode |
| stardateFrom | number | No | Starting stardate of episode story |
| stardateTo | number | No | Ending stardate of episode story |
| yearFrom | integer | No | Starting year of episode story |
| yearTo | integer | No | Ending year of episode story |
| usAirDate | string | No | Date the episode was first aired in the United States |
| finalScriptDate | string | No | Date the episode script was completed |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**writtenMovies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**screenplayAuthoredMovies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**storyAuthoredMovies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**directedMovies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**producedMovies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**movies 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Movie unique ID |
| title | string | Yes | Movie title |
| mainDirector | object | No | Header staff, embedded in other objects |
| titleBulgarian | string | No | Movie title in Bulgarian |
| titleCatalan | string | No | Movie title in Catalan |
| titleChineseTraditional | string | No | Movie title in Chinese traditional |
| titleGerman | string | No | Movie title in German |
| titleItalian | string | No | Movie title in Italian |
| titleJapanese | string | No | Movie title in Japanese |
| titlePolish | string | No | Movie title in Polish |
| titleRussian | string | No | Movie title in Russian |
| titleSerbian | string | No | Movie title in Serbian |
| titleSpanish | string | No | Movie title in Spanish |
| stardateFrom | number | No | Starting stardate of movie story |
| stardateTo | number | No | Ending stardate of movie story |
| yearFrom | integer | No | Starting year of movie story |
| yearTo | integer | No | Ending year of movie story |
| usReleaseDate | string | No | Date the movie was first released in the United States |


**mainDirector 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over staff

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| staff | object[] | No | List of staff matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**staff 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching staff

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| staff | object[] | No | List of staff matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**staff 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Staff unique ID |
| name | string | Yes | Staff name |
| birthName | string | No | Staff birth name |
| gender | string | No | Gender |
| dateOfBirth | string | No | Date the staff was born |
| placeOfBirth | string | No | Place the staff was born |
| dateOfDeath | string | No | Date the staff died |
| placeOfDeath | string | No | Place the staff died |
| artDepartment | boolean | No | Whether this person if from art department |
| artDirector | boolean | No | Whether this person is an art director |
| productionDesigner | boolean | No | Whether this person is a production designer |
| cameraAndElectricalDepartment | boolean | No | Whether this person is from camera and electrical department |
| cinematographer | boolean | No | Whether this person is a cinematographer |
| castingDepartment | boolean | No | Whether this person is from casting department |
| costumeDepartment | boolean | No | Whether this person is from costume department |
| costumeDesigner | boolean | No | Whether this person is a custume designer |
| director | boolean | No | Whether this person is a director |
| assistantOrSecondUnitDirector | boolean | No | Whether this person is an assistant or secound unit director director |
| exhibitAndAttractionStaff | boolean | No | Whether this person is an exhibit and tttraction staff |
| filmEditor | boolean | No | Whether this person is a film editor |
| linguist | boolean | No | Whether this person is a linguist |
| locationStaff | boolean | No | Whether this person is a location staff |
| makeupStaff | boolean | No | Whether this person is a make-up staff |
| musicDepartment | boolean | No | Whether this person is from music department |
| composer | boolean | No | Whether this person is a composer |
| personalAssistant | boolean | No | Whether this person is a personal assistant |
| producer | boolean | No | Whether this person is a producer |
| productionAssociate | boolean | No | Whether this person is a production associate |
| productionStaff | boolean | No | Whether this person is a production staff |
| publicationStaff | boolean | No | Whether this person is a publication staff |
| scienceConsultant | boolean | No | Whether this person is a science consultant |
| soundDepartment | boolean | No | Whether this person is from sound department |
| specialAndVisualEffectsStaff | boolean | No | Whether this person is a special and visual effects staff |
| author | boolean | No | Whether this person is an author |
| audioAuthor | boolean | No | Whether this person is an audio author |
| calendarArtist | boolean | No | Whether this person is a calendar artist |
| comicArtist | boolean | No | Whether this person is a comic artist |
| comicAuthor | boolean | No | Whether this person is a comic author |
| comicColorArtist | boolean | No | Whether this person is a comic color artist |
| comicInteriorArtist | boolean | No | Whether this person is a comic interior artist |
| comicInkArtist | boolean | No | Whether this person is a comic ink artist |
| comicPencilArtist | boolean | No | Whether this person is a comic pencil artist |
| comicLetterArtist | boolean | No | Whether this person is a comic letter artist |
| comicStripArtist | boolean | No | Whether this person is a comic strip artist |
| gameArtist | boolean | No | Whether this person is a game artist |
| gameAuthor | boolean | No | Whether this person is a game author |
| novelArtist | boolean | No | Whether this person is a novel artist |
| novelAuthor | boolean | No | Whether this person is a novel author |
| referenceArtist | boolean | No | Whether this person is a reference artist |
| referenceAuthor | boolean | No | Whether this person is a reference author |
| publicationArtist | boolean | No | Whether this person is a publication artist |
| publicationDesigner | boolean | No | Whether this person is a publication designer |
| publicationEditor | boolean | No | Whether this person is a publication editor |
| publicityArtist | boolean | No | Whether this person is a publication artist |
| cbsDigitalStaff | boolean | No | Whether this person is a part of CBS digital staff |
| ilmProductionStaff | boolean | No | Whether this person is a part of ILM production staff |
| specialFeaturesStaff | boolean | No | Whether this person is a special features artist |
| storyEditor | boolean | No | Whether this person is a story editor |
| studioExecutive | boolean | No | Whether this person is a studio executive |
| stuntDepartment | boolean | No | Whether this person is from stunt department |
| transportationDepartment | boolean | No | Whether this person is from transportation department |
| videoGameProductionStaff | boolean | No | Whether this person is video game production staff |
| writer | boolean | No | Whether this person is a writer |


## Technology

### Retrival of a single technology

```http
GET /technology
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Technology unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| technology | object | No | Full technology, returned when queried using UID |


**technology 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Technology unique ID |
| name | string | Yes | Technology name |
| borgTechnology | boolean | No | Whether it's a Borg technology |
| borgComponent | boolean | No | Whether it's a Borg component |
| communicationsTechnology | boolean | No | Whether it's a communications technology |
| computerTechnology | boolean | No | Whether it's a computer technology |
| computerProgramming | boolean | No | Whether it's a technology related to computer programming |
| subroutine | boolean | No | Whether it's a subroutine |
| database | boolean | No | Whether it's a database |
| energyTechnology | boolean | No | Whether it's a energy technology |
| fictionalTechnology | boolean | No | Whether it's a fictional technology |
| holographicTechnology | boolean | No | Whether it's a holographic technology |
| identificationTechnology | boolean | No | Whether it's a identification technology |
| lifeSupportTechnology | boolean | No | Whether it's a life support technology |
| sensorTechnology | boolean | No | Whether it's a sensor technology |
| shieldTechnology | boolean | No | Whether it's a shield technology |
| tool | boolean | No | Whether it's a tool |
| culinaryTool | boolean | No | Whether it's a culinary tool |
| engineeringTool | boolean | No | Whether it's a engineering tool |
| householdTool | boolean | No | Whether it's a household tool |
| medicalEquipment | boolean | No | Whether it's a medical equipment |
| transporterTechnology | boolean | No | Whether it's a transporter technology |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over technology

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| technology | object[] | No | List of technology matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**technology 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Technology unique ID |
| name | string | Yes | Technology name |
| borgTechnology | boolean | No | Whether it's a Borg technology |
| borgComponent | boolean | No | Whether it's a Borg component |
| communicationsTechnology | boolean | No | Whether it's a communications technology |
| computerTechnology | boolean | No | Whether it's a computer technology |
| computerProgramming | boolean | No | Whether it's a technology related to computer programming |
| subroutine | boolean | No | Whether it's a subroutine |
| database | boolean | No | Whether it's a database |
| energyTechnology | boolean | No | Whether it's a energy technology |
| fictionalTechnology | boolean | No | Whether it's a fictional technology |
| holographicTechnology | boolean | No | Whether it's a holographic technology |
| identificationTechnology | boolean | No | Whether it's a identification technology |
| lifeSupportTechnology | boolean | No | Whether it's a life support technology |
| sensorTechnology | boolean | No | Whether it's a sensor technology |
| shieldTechnology | boolean | No | Whether it's a shield technology |
| tool | boolean | No | Whether it's a tool |
| culinaryTool | boolean | No | Whether it's a culinary tool |
| engineeringTool | boolean | No | Whether it's a engineering tool |
| householdTool | boolean | No | Whether it's a household tool |
| medicalEquipment | boolean | No | Whether it's a medical equipment |
| transporterTechnology | boolean | No | Whether it's a transporter technology |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching technology

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| technology | object[] | No | List of technology matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**technology 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Technology unique ID |
| name | string | Yes | Technology name |
| borgTechnology | boolean | No | Whether it's a Borg technology |
| borgComponent | boolean | No | Whether it's a Borg component |
| communicationsTechnology | boolean | No | Whether it's a communications technology |
| computerTechnology | boolean | No | Whether it's a computer technology |
| computerProgramming | boolean | No | Whether it's a technology related to computer programming |
| subroutine | boolean | No | Whether it's a subroutine |
| database | boolean | No | Whether it's a database |
| energyTechnology | boolean | No | Whether it's a energy technology |
| fictionalTechnology | boolean | No | Whether it's a fictional technology |
| holographicTechnology | boolean | No | Whether it's a holographic technology |
| identificationTechnology | boolean | No | Whether it's a identification technology |
| lifeSupportTechnology | boolean | No | Whether it's a life support technology |
| sensorTechnology | boolean | No | Whether it's a sensor technology |
| shieldTechnology | boolean | No | Whether it's a shield technology |
| tool | boolean | No | Whether it's a tool |
| culinaryTool | boolean | No | Whether it's a culinary tool |
| engineeringTool | boolean | No | Whether it's a engineering tool |
| householdTool | boolean | No | Whether it's a household tool |
| medicalEquipment | boolean | No | Whether it's a medical equipment |
| transporterTechnology | boolean | No | Whether it's a transporter technology |


## Title

### Retrival of a single title

```http
GET /title
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Title unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | object | No | Full title, returned when queried using UID |


**title 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Title unique ID |
| name | string | Yes | Title name |
| militaryRank | boolean | No | Whether it's a military rank |
| fleetRank | boolean | No | Whether it's a fleet rank |
| religiousTitle | boolean | No | Whether it's a religious title |
| position | boolean | No | Whether it's a position |
| mirror | boolean | No | Whether this title is from mirror universe |
| characters | object[] | No | Characters that holds this title |


**characters 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Character unique ID |
| name | string | Yes | Character name |
| gender | string | No | Gender |
| yearOfBirth | integer | No | Year the character was born |
| monthOfBirth | integer | No | Month the character was born |
| dayOfBirth | integer | No | Day the character was born |
| placeOfBirth | string | No | Place of birth |
| yearOfDeath | integer | No | Year the character died |
| monthOfDeath | integer | No | Month the character died |
| dayOfDeath | integer | No | Day the character died |
| placeOfDeath | string | No | Place of death |
| height | integer | No | Height in centimeters |
| weight | integer | No | Weight in kilograms |
| deceased | boolean | No | Whether this character is deceased |
| bloodType | string | No | Blood type |
| maritalStatus | string | No | Marital status |
| serialNumber | string | No | Serial number |
| hologramActivationDate | string | No | Hologram activation date |
| hologramStatus | string | No | Hologram status |
| hologramDateStatus | string | No | Hologram date status |
| hologram | boolean | No | Whether this character is a hologram |
| fictionalCharacter | boolean | No | Whether this character is a fictional character (from universe point of view) |
| mirror | boolean | No | Whether this character is from mirror universe |
| alternateReality | boolean | No | Whether this character is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over titles

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| titles | object[] | No | List of titles matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**titles 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Title unique ID |
| name | string | Yes | Title name |
| militaryRank | boolean | No | Whether it's a military rank |
| fleetRank | boolean | No | Whether it's a fleet rank |
| religiousTitle | boolean | No | Whether it's a religious title |
| position | boolean | No | Whether it's a position |
| mirror | boolean | No | Whether this title is from mirror universe |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching titles

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| titles | object[] | No | List of titles matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**titles 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Title unique ID |
| name | string | Yes | Title name |
| militaryRank | boolean | No | Whether it's a military rank |
| fleetRank | boolean | No | Whether it's a fleet rank |
| religiousTitle | boolean | No | Whether it's a religious title |
| position | boolean | No | Whether it's a position |
| mirror | boolean | No | Whether this title is from mirror universe |


## TradingCard

### Retrival of a single trading card

```http
GET /tradingCard
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Trading card unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCard | object | No | Full trading card, returned when queried using UID |


**tradingCard 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card unique ID |
| name | string | Yes | Trading card name |
| tradingCardSet | object | No | Base trading card set, returned in search results |
| tradingCardDeck | object | No | Base trading card deck, returned in search results |
| number | string | No | Trading card number |
| releaseYear | integer | No | Release year, if set was releases over multiple years |
| productionRun | integer | No | Production run, if different from trading card set production run |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |
| releaseYear | integer | No | Release year |
| releaseMonth | integer | No | Release month |
| releaseDay | integer | No | Release day |
| cardsPerPack | integer | No | Cards per deck |
| packsPerBox | integer | No | Packs per box |
| boxesPerCase | integer | No | Boxes per case |
| productionRun | integer | No | Production run |
| productionRunUnit | string | No | Production run unit |
| cardWidth | number | No | Card width, in inches |
| cardHeight | number | No | Card height, in inches |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |
| frequency | string | No | Frequency with which this deck occur in it's set |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading cards

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCards | object[] | No | List of trading cards matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCards 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card unique ID |
| name | string | Yes | Trading card name |
| number | string | No | Trading card number |
| releaseYear | integer | No | Release year, if set was releases over multiple years |
| productionRun | integer | No | Production run, if different from trading card set production run |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |
| tradingCardDeck | object | No | Header trading card deck, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading cards

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCards | object[] | No | List of trading cards matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCards 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card unique ID |
| name | string | Yes | Trading card name |
| number | string | No | Trading card number |
| releaseYear | integer | No | Release year, if set was releases over multiple years |
| productionRun | integer | No | Production run, if different from trading card set production run |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |
| tradingCardDeck | object | No | Header trading card deck, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |


## TradingCardDeck

### Retrival of a single trading card deck

```http
GET /tradingCardDeck
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | trading card deck unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCardDeck | object | No | Full trading card deck, returned when queried using UID |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |
| frequency | string | No | Frequency with which this deck occur in it's set |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |
| tradingCards | object[] | No | Trading cards in this deck |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCards 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card unique ID |
| name | string | Yes | Trading card name |
| number | string | No | Trading card number |
| releaseYear | integer | No | Release year, if set was releases over multiple years |
| productionRun | integer | No | Production run, if different from trading card set production run |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |
| tradingCardDeck | object | No | Header trading card deck, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading card decks

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardDecks | object[] | No | List of trading card decks matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCardDecks 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |
| frequency | string | No | Frequency with which this deck occur in it's set |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading card decks

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardDecks | object[] | No | List of trading card decks matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCardDecks 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |
| frequency | string | No | Frequency with which this deck occur in it's set |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


## TradingCardSet

### Retrival of a single trading card set

```http
GET /tradingCardSet
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Trading card set unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| tradingCardSet | object | No | Full trading card set, returned when queried using UID |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |
| releaseYear | integer | No | Release year |
| releaseMonth | integer | No | Release month |
| releaseDay | integer | No | Release day |
| cardsPerPack | integer | No | Cards per deck |
| packsPerBox | integer | No | Packs per box |
| boxesPerCase | integer | No | Boxes per case |
| productionRun | integer | No | Production run |
| productionRunUnit | string | No | Production run unit |
| cardWidth | number | No | Card width, in inches |
| cardHeight | number | No | Card height, in inches |
| manufacturers | object[] | No | Manufacturers |
| tradingCardDecks | object[] | No | Trading card decks in this set |
| tradingCards | object[] | No | Trading cards in this set |
| countriesOfOrigin | object[] | No | Countries of origin |


**manufacturers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**tradingCardDecks 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |
| frequency | string | No | Frequency with which this deck occur in it's set |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCards 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card unique ID |
| name | string | Yes | Trading card name |
| number | string | No | Trading card number |
| releaseYear | integer | No | Release year, if set was releases over multiple years |
| productionRun | integer | No | Production run, if different from trading card set production run |
| tradingCardSet | object | No | Header trading card set, embedded in other objects |
| tradingCardDeck | object | No | Header trading card deck, embedded in other objects |


**tradingCardSet 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |


**tradingCardDeck 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card deck unique ID |
| name | string | Yes | Trading card deck name |


**countriesOfOrigin 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Country unique ID |
| name | string | No | Country name |
| iso31661Alpha2Code | string | No | ISO 3166-1 alpha-2 code |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over trading card sets

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardSets | object[] | No | List of trading card sets matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCardSets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |
| releaseYear | integer | No | Release year |
| releaseMonth | integer | No | Release month |
| releaseDay | integer | No | Release day |
| cardsPerPack | integer | No | Cards per deck |
| packsPerBox | integer | No | Packs per box |
| boxesPerCase | integer | No | Boxes per case |
| productionRun | integer | No | Production run |
| productionRunUnit | string | No | Production run unit |
| cardWidth | number | No | Card width, in inches |
| cardHeight | number | No | Card height, in inches |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching trading card sets

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| tradingCardSets | object[] | No | List of trading card sets matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**tradingCardSets 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Trading card set unique ID |
| name | string | Yes | Trading card set name |
| releaseYear | integer | No | Release year |
| releaseMonth | integer | No | Release month |
| releaseDay | integer | No | Release day |
| cardsPerPack | integer | No | Cards per deck |
| packsPerBox | integer | No | Packs per box |
| boxesPerCase | integer | No | Boxes per case |
| productionRun | integer | No | Production run |
| productionRunUnit | string | No | Production run unit |
| cardWidth | number | No | Card width, in inches |
| cardHeight | number | No | Card height, in inches |


## VideoGame

### Retrival of a single video game

```http
GET /videoGame
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | VideoGame unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| videoGame | object | No | Full video game, returned when queried using UID |


**videoGame 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video game unique ID |
| title | string | Yes | Video game title |
| releaseDate | string | No | Release date |
| stardateFrom | number | No | Starting stardate of video game story |
| stardateTo | number | No | Ending stardate of video game story |
| yearFrom | integer | No | Starting year of video game story |
| yearTo | integer | No | Ending year of video game story |
| systemRequirements | string | No | System requirements |
| publishers | object[] | No | Publishers |
| developers | object[] | No | Developers |
| platforms | object[] | No | Platforms |
| genres | object[] | No | Genres |
| ratings | object[] | No | Ratings |
| references | object[] | No | References |


**publishers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**developers 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company name |
| broadcaster | boolean | No | Whether it's a broadcaster |
| collectibleCompany | boolean | No | Whether it's a collectible company |
| conglomerate | boolean | No | Whether it's a conglomerate |
| digitalVisualEffectsCompany | boolean | No | Whether it's a digital visual effects company |
| distributor | boolean | No | Whether it's a distributor |
| gameCompany | boolean | No | Whether it's a game company |
| filmEquipmentCompany | boolean | No | Whether it's a film equipment company |
| makeUpEffectsStudio | boolean | No | Whether it's a make-up effects studio |
| mattePaintingCompany | boolean | No | Whether it's a matte painting company |
| modelAndMiniatureEffectsCompany | boolean | No | Whether it's a model and miniature effects company |
| postProductionCompany | boolean | No | Whether it's a post-production company |
| productionCompany | boolean | No | Whether it's a production company |
| propCompany | boolean | No | Whether it's a prop company |
| recordLabel | boolean | No | Whether it's a record label |
| specialEffectsCompany | boolean | No | Whether it's a special effects company |
| tvAndFilmProductionCompany | boolean | No | Whether it's a TV and film production company |
| videoGameCompany | boolean | No | Whether it's a video game company |


**platforms 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Platform unique ID |
| name | string | No | Platform name |


**genres 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Genre unique ID |
| name | string | No | Genre name |


**ratings 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Rating unique ID |
| contentRatingSystem | string | No | Content rating system |
| rating | string | No | Rating within specified content rating system |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over video games

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoGames | object[] | No | List of video games matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**videoGames 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video game unique ID |
| title | string | Yes | Video game title |
| releaseDate | string | No | Release date |
| stardateFrom | number | No | Starting stardate of video game story |
| stardateTo | number | No | Ending stardate of video game story |
| yearFrom | integer | No | Starting year of video game story |
| yearTo | integer | No | Ending year of video game story |
| systemRequirements | string | No | System requirements |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching video games

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoGames | object[] | No | List of video games matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**videoGames 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video game unique ID |
| title | string | Yes | Video game title |
| releaseDate | string | No | Release date |
| stardateFrom | number | No | Starting stardate of video game story |
| stardateTo | number | No | Ending stardate of video game story |
| yearFrom | integer | No | Starting year of video game story |
| yearTo | integer | No | Ending year of video game story |
| systemRequirements | string | No | System requirements |


## VideoRelease

### Retrival of a single video release

```http
GET /videoRelease
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Video release unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| videoRelease | object | No | Full video release, returned when queried using UID |


**videoRelease 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video release unique ID |
| title | string | Yes | Video release title |
| series | object | No | Base series, returned in search results |
| season | object | No | Base season, returned in search results |
| format | string | No | Video release format |
| numberOfEpisodes | integer | No | Number of episodes |
| numberOfFeatureLengthEpisodes | integer | No | Number of feature-length episodes |
| numberOfDataCarriers | integer | No | Number of data carriers (like DVD, VCD, VHS etc.) |
| runTime | integer | No | Run time, in minutes |
| yearFrom | integer | No | Starting year of video release story |
| yearTo | integer | No | Ending year of video release story |
| regionFreeReleaseDate | string | No | Region free release date |
| region1AReleaseDate | string | No | Region 1/A release date |
| region1SlimlineReleaseDate | string | No | Region 1 slimline release date |
| region2BReleaseDate | string | No | Region 2/B release date |
| region2SlimlineReleaseDate | string | No | Region 2 slimline release date |
| region4AReleaseDate | string | No | Region 4 release date |
| region4SlimlineReleaseDate | string | No | Region 4 slimline release date |
| amazonDigitalRelease | boolean | No | Whether this video has been release on Amazon.com |
| dailymotionDigitalRelease | boolean | No | Whether this video has been release on Dailymotion |
| googlePlayDigitalRelease | boolean | No | Whether this video has been release on Google Play |
| iTunesDigitalRelease | boolean | No | Whether this video has been release on iTunes |
| ultraVioletDigitalRelease | boolean | No | Whether this video has been release on UltraViolet |
| vimeoDigitalRelease | boolean | No | Whether this video has been release on Vimeo |
| vuduDigitalRelease | boolean | No | Whether this video has been release on VUDU |
| xboxSmartGlassDigitalRelease | boolean | No | Whether this video has been release on Xbox SmartGlass |
| youTubeDigitalRelease | boolean | No | Whether this video has been release on YouTube |
| netflixDigitalRelease | boolean | No | Whether this video has been release on Netflix |
| references | object[] | No | References |
| ratings | object[] | No | Ratings |
| languages | object[] | No | Languages of audio track |
| languagesSubtitles | object[] | No | Languages of subtitles |
| languagesDubbed | object[] | No | Languages that are available with dubbing |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |
| abbreviation | string | Yes | Series abbreviation |
| productionStartYear | integer | No | Year the series production started |
| productionEndYear | integer | No | Year the series production ended |
| originalRunStartDate | string | No | Date the series originally ran from |
| originalRunEndDate | string | No | Date the series originally ran to |
| seasonsCount | integer | No | Number of seasons |
| episodesCount | integer | No | Number of episodes |
| featureLengthEpisodesCount | integer | No | Number of feature length episodes |
| productionCompany | object | No | Header company, embedded in other objects |
| originalBroadcaster | object | No | Header company, embedded in other objects |


**productionCompany 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**originalBroadcaster 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Company unique ID |
| name | string | Yes | Company title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |
| series | object | No | Header series, embedded in other objects |
| seasonNumber | integer | No | Season number in series |
| numberOfEpisodes | integer | No | Number of episodes in this season |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**references 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Reference unique ID |
| referenceType | string | No | Reference type |
| referenceNumber | string | No | Reference number |


**ratings 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Rating unique ID |
| contentRatingSystem | string | No | Content rating system |
| rating | string | No | Rating within specified content rating system |


**languages 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Language unique ID |
| name | string | No | Language name |
| iso6391Code | string | No | ISO 639-1 code |


**languagesSubtitles 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Language unique ID |
| name | string | No | Language name |
| iso6391Code | string | No | ISO 639-1 code |


**languagesDubbed 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | No | Language unique ID |
| name | string | No | Language name |
| iso6391Code | string | No | ISO 639-1 code |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over video releases

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoReleases | object[] | No | List of video releases matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**videoReleases 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video release unique ID |
| title | string | Yes | Video release title |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| format | string | No | Video release format |
| numberOfEpisodes | integer | No | Number of episodes |
| numberOfFeatureLengthEpisodes | integer | No | Number of feature-length episodes |
| numberOfDataCarriers | integer | No | Number of data carriers (like DVD, VCD, VHS etc.) |
| runTime | integer | No | Run time, in minutes |
| yearFrom | integer | No | Starting year of video release story |
| yearTo | integer | No | Ending year of video release story |
| regionFreeReleaseDate | string | No | Region free release date |
| region1AReleaseDate | string | No | Region 1/A release date |
| region1SlimlineReleaseDate | string | No | Region 1 slimline release date |
| region2BReleaseDate | string | No | Region 2/B release date |
| region2SlimlineReleaseDate | string | No | Region 2 slimline release date |
| region4AReleaseDate | string | No | Region 4 release date |
| region4SlimlineReleaseDate | string | No | Region 4 slimline release date |
| amazonDigitalRelease | boolean | No | Whether this video has been release on Amazon.com |
| dailymotionDigitalRelease | boolean | No | Whether this video has been release on Dailymotion |
| googlePlayDigitalRelease | boolean | No | Whether this video has been release on Google Play |
| iTunesDigitalRelease | boolean | No | Whether this video has been release on iTunes |
| ultraVioletDigitalRelease | boolean | No | Whether this video has been release on UltraViolet |
| vimeoDigitalRelease | boolean | No | Whether this video has been release on Vimeo |
| vuduDigitalRelease | boolean | No | Whether this video has been release on VUDU |
| xboxSmartGlassDigitalRelease | boolean | No | Whether this video has been release on Xbox SmartGlass |
| youTubeDigitalRelease | boolean | No | Whether this video has been release on YouTube |
| netflixDigitalRelease | boolean | No | Whether this video has been release on Netflix |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching video releases

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| videoReleases | object[] | No | List of video releases matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**videoReleases 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Video release unique ID |
| title | string | Yes | Video release title |
| series | object | No | Header series, embedded in other objects |
| season | object | No | Header season, embedded in other objects |
| format | string | No | Video release format |
| numberOfEpisodes | integer | No | Number of episodes |
| numberOfFeatureLengthEpisodes | integer | No | Number of feature-length episodes |
| numberOfDataCarriers | integer | No | Number of data carriers (like DVD, VCD, VHS etc.) |
| runTime | integer | No | Run time, in minutes |
| yearFrom | integer | No | Starting year of video release story |
| yearTo | integer | No | Ending year of video release story |
| regionFreeReleaseDate | string | No | Region free release date |
| region1AReleaseDate | string | No | Region 1/A release date |
| region1SlimlineReleaseDate | string | No | Region 1 slimline release date |
| region2BReleaseDate | string | No | Region 2/B release date |
| region2SlimlineReleaseDate | string | No | Region 2 slimline release date |
| region4AReleaseDate | string | No | Region 4 release date |
| region4SlimlineReleaseDate | string | No | Region 4 slimline release date |
| amazonDigitalRelease | boolean | No | Whether this video has been release on Amazon.com |
| dailymotionDigitalRelease | boolean | No | Whether this video has been release on Dailymotion |
| googlePlayDigitalRelease | boolean | No | Whether this video has been release on Google Play |
| iTunesDigitalRelease | boolean | No | Whether this video has been release on iTunes |
| ultraVioletDigitalRelease | boolean | No | Whether this video has been release on UltraViolet |
| vimeoDigitalRelease | boolean | No | Whether this video has been release on Vimeo |
| vuduDigitalRelease | boolean | No | Whether this video has been release on VUDU |
| xboxSmartGlassDigitalRelease | boolean | No | Whether this video has been release on Xbox SmartGlass |
| youTubeDigitalRelease | boolean | No | Whether this video has been release on YouTube |
| netflixDigitalRelease | boolean | No | Whether this video has been release on Netflix |


**series 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Series unique ID |
| title | string | Yes | Series title |


**season 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Season unique ID |
| title | string | Yes | Season title |


## Weapon

### Retrival of a single weapon

```http
GET /weapon
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uid | query | string | Yes | Weapon unique ID |
| apiKey | query | string | No | API key |

#### Responses

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| weapon | object | No | Full weapon, returned when queried using UID |


**weapon 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Weapon unique ID |
| name | string | Yes | Weapon name |
| handHeldWeapon | boolean | No | Whether it's a hand-help weapon |
| laserTechnology | boolean | No | Whether it's a laser technology |
| plasmaTechnology | boolean | No | Whether it's a plasma technology |
| photonicTechnology | boolean | No | Whether it's a photonic technology |
| phaserTechnology | boolean | No | Whether it's a phaser technology |
| mirror | boolean | No | Whether this weapon is from mirror universe |
| alternateReality | boolean | No | Whether this weapon is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Pagination over weapons

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| weapons | object[] | No | List of weapons matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**weapons 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Weapon unique ID |
| name | string | Yes | Weapon name |
| handHeldWeapon | boolean | No | Whether it's hand-help weapon |
| laserTechnology | boolean | No | Whether it's a laser technology |
| plasmaTechnology | boolean | No | Whether it's a plasma technology |
| photonicTechnology | boolean | No | Whether it's a photonic technology |
| phaserTechnology | boolean | No | Whether it's a phaser technology |
| mirror | boolean | No | Whether this weapon is from mirror universe |
| alternateReality | boolean | No | Whether this weapon is from alternate reality |


**default** - Unexpected error

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | Error code |
| message | string | No | Error message |


### Searching weapons

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

**200** - OK

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| page | object | No | Object describing response page |
| sort | object | No | Response sort |
| weapons | object[] | No | List of weapons matching given criteria |


**page 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| pageNumber | integer | No | Zero-based page number |
| pageSize | integer | No | Page size |
| numberOfElements | integer | No | Number of elements in page |
| totalElements | integer | No | Total elements found |
| totalPages | integer | No | Total pages found |
| firstPage | boolean | No | Whether it is the first page |
| lastPage | boolean | No | Whether it is the last page |


**sort 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| clauses | object[] | No | List of response sort rules |


**clauses 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Field name results are sorted by |
| direction | string | Yes | Sort direction |
| clauseOrder | integer | Yes | Order in which this clause was applied |


**weapons 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| uid | string | Yes | Weapon unique ID |
| name | string | Yes | Weapon name |
| handHeldWeapon | boolean | No | Whether it's hand-help weapon |
| laserTechnology | boolean | No | Whether it's a laser technology |
| plasmaTechnology | boolean | No | Whether it's a plasma technology |
| photonicTechnology | boolean | No | Whether it's a photonic technology |
| phaserTechnology | boolean | No | Whether it's a phaser technology |
| mirror | boolean | No | Whether this weapon is from mirror universe |
| alternateReality | boolean | No | Whether this weapon is from alternate reality |
