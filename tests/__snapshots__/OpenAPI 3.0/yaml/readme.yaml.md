# ReadMe API 🦉

Create beautiful product and API documentation with our developer friendly platform.

**Version:** 4.355.0

## Servers

- **URL:** https://dash.readme.com/api/v1

## API Registry

### Retrieve an entry from the API Registry

Get an API definition file that's been uploaded to ReadMe.

```http
GET /api-registry/{uuid}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uuid | path | string | Yes | An API Registry UUID. This can be found by navigating to your API Reference page and viewing code snippets for Node with the `api` library. |

#### Responses

**200** - Successfully retrieved API registry entry.

**Content Type:** `application/json`

object

**404** - The registry entry couldn't be found.

**Content Type:** `application/json`

Unknown type

## API Specification

### Get metadata

Get API specification metadata.

```http
GET /api-specification
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**400** - No version was supplied.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Upload specification

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/main/docs/rdme.

```http
POST /api-specification
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `multipart/form-data`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spec | string | No | OpenAPI/Swagger file. We accept JSON or YAML. |


#### Responses

**400** - There was a validation error during upload.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**408** - The spec upload timed out.

**Content Type:** `application/json`

Unknown type

### Update specification

Update an API specification in ReadMe.

```http
PUT /api-specification/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page. |

#### Request Body

**Content Type:** `multipart/form-data`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spec | string | No | OpenAPI/Swagger file. We accept JSON or YAML. |


#### Responses

**400** - There was a validation error during upload.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**408** - The spec upload timed out.

**Content Type:** `application/json`

Unknown type

### Delete specification

Delete an API specification in ReadMe.

```http
DELETE /api-specification/{id}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page. |

#### Responses

**400** - The spec ID isn't valid.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The spec couldn't be found.

**Content Type:** `application/json`

Unknown type

### Get our OpenAPI Definition

Returns a copy of our OpenAPI Definition.

```http
GET /schema
```

#### Responses

**200** - OpenAPI Definition data

**Content Type:** `application/json`

object

## Apply to ReadMe

### Get open roles

Returns all the roles we're hiring for at ReadMe!

```http
GET /apply
```

#### Responses

**200** - All the roles that we're hiring for.

**Content Type:** `application/json`

Array, item type: object

### Submit your application!

This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!

```http
POST /apply
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | Yes | Your full name |
| email | string | Yes | A valid email we can reach you at. |
| job | string | Yes | The job you're looking to apply for (https://readme.com/careers). |
| pronouns | string | No | Learn more at https://lgbtlifecenter.org/pronouns/ |
| linkedin | string | No | What have you been up to the past few years? |
| github | string | No | Or Bitbucket, Gitlab or anywhere else your code is hosted! |
| coverLetter | string | No | What should we know about you? |
| dontReallyApply | boolean | No | Want to play with the API but not actually apply? Set this to true. |


## Categories

### Get all categories

Returns all the categories for a specified version.

```http
GET /categories
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

### Create category

Create a new category inside of this project.

```http
POST /categories
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Unknown type

#### Responses

**400** - The category couldn't be saved.

**Content Type:** `application/json`

Unknown type

### Get category

Returns the category with this slug.

```http
GET /categories/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**404** - The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update category

Change the properties of a category.

```http
PUT /categories/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | A short title for the category. This is what will show in the sidebar. |
| type | string | No | A category can be part of your reference or guide documentation, which is determined by this field. |


#### Responses

**400** - The category couldn't be saved.

**Content Type:** `application/json`

Unknown type

**404** - The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete category

Delete the category with this slug.
>⚠️Heads Up!
> This will also delete all of the docs within this category.

```http
DELETE /categories/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**404** - The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Get docs for category

Returns the docs and children docs within this category.

```http
GET /categories/{slug}/docs
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**404** - The category couldn't be found.

**Content Type:** `application/json`

Unknown type

## Changelog

### Get changelogs

Returns a list of changelogs.

```http
GET /changelogs
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

### Create changelog

Create a new changelog entry.

```http
POST /changelogs
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Title of the changelog. |
| type | string | No | - |
| body | string | Yes | Body content of the changelog. |
| hidden | boolean | No | Visibility of the changelog. |


### Get changelog

Returns the changelog with this slug.

```http
GET /changelogs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Update", enter the slug "owlet-update". |

### Update changelog

Update a changelog with this slug.

```http
PUT /changelogs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update". |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Title of the changelog. |
| type | string | No | - |
| body | string | Yes | Body content of the changelog. |
| hidden | boolean | No | Visibility of the changelog. |


### Delete changelog

Delete the changelog with this slug.

```http
DELETE /changelogs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update". |

## Custom Pages

### Get custom pages

Returns a list of custom pages.

```http
GET /custompages
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

### Create custom page

Create a new custom page inside of this project.

```http
POST /custompages
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Title of the custom page. |
| body | string | No | Body formatted in Markdown (displayed by default). |
| html | string | No | Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**). |
| htmlmode | boolean | No | **true** if `html` should be displayed, **false** if `body` should be displayed. |
| hidden | boolean | No | Visibility of the custom page. |


#### Responses

**400** - The page couldn't be saved.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

### Get custom page

Returns the custom page with this slug.

```http
GET /custompages/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update custom page

Update a custom page with this slug.

```http
PUT /custompages/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Title of the custom page. |
| body | string | No | Body formatted in Markdown (displayed by default). |
| html | string | No | Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**). |
| htmlmode | boolean | No | **true** if `html` should be displayed, **false** if `body` should be displayed. |
| hidden | boolean | No | Visibility of the custom page. |


#### Responses

**400** - The page couldn't be saved.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete custom page

Delete the custom page with this slug.

```http
DELETE /custompages/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

## Docs

### Get doc

Returns the doc with this slug.

```http
GET /docs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**200** - The doc exists and has been returned.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update doc

Update a doc with this slug.

```http
PUT /docs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |
| categorySlug | string | No | The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field. |
| parentDocSlug | string | No | If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field. |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


#### Responses

**200** - The doc was successfully updated.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


**400** - The doc couldn't be saved.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete doc

Delete the doc with this slug.

```http
DELETE /docs/{slug}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Get production doc

This is intended for use by enterprise users with staging enabled. This endpoint will return the live version of your document, whereas the standard endpoint will always return staging.

```http
GET /docs/{slug}/production
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**200** - The doc exists and has been returned.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Create doc

Create a new doc inside of this project.

```http
POST /docs
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |
| categorySlug | string | No | The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field. |
| parentDocSlug | string | No | If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field. |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


#### Responses

**201** - The doc was successfully created.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link). |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | - |


**error 对象结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| code | string | No | The error code for docs with the "error" type. |


**400** - The doc couldn't be saved.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

### Search docs

Returns all docs that match the search.

```http
POST /docs/search
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| search | query | string | Yes | Search string to look for. |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

## Errors

## Projects

### Get metadata about the current project

Returns project data for the API key.

```http
GET /
```

#### Responses

**200** - Project data

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | - |
| subdomain | string | No | - |
| jwtSecret | string | No | - |
| baseUrl | string | No | The base URL for the project. If the project is not running under a custom domain, it will be `https://projectSubdomain.readme.io`, otherwise it can either be or `https://example.com` or, in the case of an enterprise child project `https://example.com/projectSubdomain`. |
| plan | string | No | - |


**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

## Version

### Get versions

Retrieve a list of versions associated with a project API key.

```http
GET /version
```

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

### Create version

Create a new version.

```http
POST /version
```

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| version | string | Yes | Semantic Version |
| codename | string | No | Dubbed name of version. |
| from | string | Yes | Semantic Version to use as the base fork. |
| is_stable | boolean | No | Should this be the **main** version? |
| is_beta | boolean | No | - |
| is_hidden | boolean | No | Should this be publically accessible? |
| is_deprecated | boolean | No | Should this be deprecated? Only allowed in PUT operations. |


#### Responses

**400** - There was a validation error during creation.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Get version

Returns the version with this version ID.

```http
GET /version/{versionId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| versionId | path | string | Yes | Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions). |

#### Responses

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update version

Update an existing version.

```http
PUT /version/{versionId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| versionId | path | string | Yes | Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions). |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| version | string | Yes | Semantic Version |
| codename | string | No | Dubbed name of version. |
| from | string | Yes | Semantic Version to use as the base fork. |
| is_stable | boolean | No | Should this be the **main** version? |
| is_beta | boolean | No | - |
| is_hidden | boolean | No | Should this be publically accessible? |
| is_deprecated | boolean | No | Should this be deprecated? Only allowed in PUT operations. |


#### Responses

**400** - A stable version can't be demoted.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete version

Delete a version

```http
DELETE /version/{versionId}
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| versionId | path | string | Yes | Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions). |

#### Responses

**400** - A stable version can't be removed.

**Content Type:** `application/json`

Unknown type

**401** - Unauthorized

**Content Type:** `application/json`

Unknown type

**403** - Unauthorized

**Content Type:** `application/json`

Unknown type

**404** - The version couldn't be found.

**Content Type:** `application/json`

Unknown type
