# ReadMe API 🦉

Create beautiful product and API documentation with our developer friendly platform.

**Version:** 5.319.0

## Servers

- **URL:** https://dash.readme.com/api/v1

## API Registry

### Get an API definition file that's been uploaded to ReadMe.

Get an API definition file that's been uploaded to ReadMe.

```http
GET /api-registry/{uuid}
```

**Operation ID:** `getAPIRegistry`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| uuid | path | string | Yes | An API Registry UUID. This can be found by navigating to your API Reference page and viewing code snippets for Node with the `api` library. |

#### Responses

**Status Code:** 200

**Description:** Successfully retrieved API registry entry.

**Content Type:** `application/json`

object

**Status Code:** 404

**Description:** The registry entry couldn't be found.

**Content Type:** `application/json`

Unknown type

## API Specification

### Get API specification metadata.

Get API specification metadata.

```http
GET /api-specification
```

**Operation ID:** `getAPISpecification`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 400

**Description:** No version was supplied.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/main/docs/rdme.

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/main/docs/rdme.

```http
POST /api-specification
```

**Operation ID:** `uploadAPISpecification`

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
| spec | string | No | An OpenAPI/Swagger file. We accept JSON or YAML. |
| url | string | No | A public URL to an OpenAPI/Swagger definition. We accept JSON or YAML. |


#### Responses

**Status Code:** 400

**Description:** There was a validation error during upload.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 408

**Description:** The spec upload timed out.

**Content Type:** `application/json`

Unknown type

### Update an API specification in ReadMe.

Update an API specification in ReadMe.

```http
PUT /api-specification/{id}
```

**Operation ID:** `updateAPISpecification`

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
| spec | string | No | An OpenAPI/Swagger file. We accept JSON or YAML. |
| url | string | No | A public URL to an OpenAPI/Swagger definition. We accept JSON or YAML. |


#### Responses

**Status Code:** 400

**Description:** There was a validation error during upload.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 408

**Description:** The spec upload timed out.

**Content Type:** `application/json`

Unknown type

### Delete an API specification in ReadMe.

Delete an API specification in ReadMe.

```http
DELETE /api-specification/{id}
```

**Operation ID:** `deleteAPISpecification`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| id | path | string | Yes | ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page. |

#### Responses

**Status Code:** 400

**Description:** The spec ID isn't valid.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The spec couldn't be found.

**Content Type:** `application/json`

Unknown type

### Validate an API specification.

Validate an API specification.

```http
POST /api-validation
```

**Operation ID:** `validateAPISpecification`

#### Request Body

**Content Type:** `multipart/form-data`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| spec | string | No | An OpenAPI/Swagger file. We accept JSON or YAML. |
| url | string | No | A public URL to an OpenAPI/Swagger definition. We accept JSON or YAML. |


#### Responses

**Status Code:** 400

**Description:** The API specification is not valid.

**Content Type:** `application/json`

Unknown type

**Status Code:** 408

**Description:** The spec upload timed out.

**Content Type:** `application/json`

Unknown type

### Returns a copy of our OpenAPI Definition.

Returns a copy of our OpenAPI Definition.

```http
GET /schema
```

**Operation ID:** `getAPISchema`

#### Responses

**Status Code:** 200

**Description:** OpenAPI Definition data

**Content Type:** `application/json`

object

## Apply to ReadMe

### Returns all the roles we're hiring for at ReadMe!

Returns all the roles we're hiring for at ReadMe!

```http
GET /apply
```

**Operation ID:** `getOpenRoles`

#### Responses

**Status Code:** 200

**Description:** All the roles that we're hiring for.

**Content Type:** `application/json`

Array, item type: object

### This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!

This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!

```http
POST /apply
```

**Operation ID:** `applyToReadMe`

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


#### Responses

## Categories

### Returns all the categories for a specified version.

Returns all the categories for a specified version.

```http
GET /categories
```

**Operation ID:** `getCategories`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

#### Responses

### Create a new category inside of this project.

Create a new category inside of this project.

```http
POST /categories
```

**Operation ID:** `createCategory`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

Unknown type

#### Responses

**Status Code:** 400

**Description:** The category couldn't be saved.

**Content Type:** `application/json`

Unknown type

### Returns the category with this slug.

Returns the category with this slug.

```http
GET /categories/{slug}
```

**Operation ID:** `getCategory`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 404

**Description:** The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Change the properties of a category.

Change the properties of a category.

```http
PUT /categories/{slug}
```

**Operation ID:** `updateCategory`

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

**Status Code:** 400

**Description:** The category couldn't be saved.

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete the category with this slug.

Delete the category with this slug.

```http
DELETE /categories/{slug}
```

**Operation ID:** `deleteCategory`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 404

**Description:** The category couldn't be found.

**Content Type:** `application/json`

Unknown type

### Returns the docs and children docs within this category.

Returns the docs and children docs within this category.

```http
GET /categories/{slug}/docs
```

**Operation ID:** `getCategoryDocs`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 404

**Description:** The category couldn't be found.

**Content Type:** `application/json`

Unknown type

## Changelog

### Returns a list of changelogs.

Returns a list of changelogs.

```http
GET /changelogs
```

**Operation ID:** `getChangelogs`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

#### Responses

### Create a new changelog entry.

Create a new changelog entry.

```http
POST /changelogs
```

**Operation ID:** `createChangelog`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Title of the changelog. |
| type | string | No | No description |
| body | string | Yes | Body content of the changelog. |
| hidden | boolean | No | Visibility of the changelog. |


#### Responses

### Returns the changelog with this slug.

Returns the changelog with this slug.

```http
GET /changelogs/{slug}
```

**Operation ID:** `getChangelog`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Update", enter the slug "owlet-update". |

#### Responses

### Update a changelog with this slug.

Update a changelog with this slug.

```http
PUT /changelogs/{slug}
```

**Operation ID:** `updateChangelog`

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
| type | string | No | No description |
| body | string | Yes | Body content of the changelog. |
| hidden | boolean | No | Visibility of the changelog. |


#### Responses

### Delete the changelog with this slug.

Delete the changelog with this slug.

```http
DELETE /changelogs/{slug}
```

**Operation ID:** `deleteChangelog`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update". |

#### Responses

## Custom Pages

### Returns a list of custom pages.

Returns a list of custom pages.

```http
GET /custompages
```

**Operation ID:** `getCustomPages`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| perPage | query | integer | No | Number of items to include in pagination (up to 100, defaults to 10). |
| page | query | integer | No | Used to specify further pages (starts at 1). |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

### Create a new custom page inside of this project.

Create a new custom page inside of this project.

```http
POST /custompages
```

**Operation ID:** `createCustomPage`

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

**Status Code:** 400

**Description:** The page couldn't be saved.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

### Returns the custom page with this slug.

Returns the custom page with this slug.

```http
GET /custompages/{slug}
```

**Operation ID:** `getCustomPage`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update a custom page with this slug.

Update a custom page with this slug.

```http
PUT /custompages/{slug}
```

**Operation ID:** `updateCustomPage`

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

**Status Code:** 400

**Description:** The page couldn't be saved.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete the custom page with this slug.

Delete the custom page with this slug.

```http
DELETE /custompages/{slug}
```

**Operation ID:** `deleteCustomPage`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The custom page couldn't be found.

**Content Type:** `application/json`

Unknown type

## Docs

### Create a new doc inside of this project.

Create a new doc inside of this project.

```http
POST /docs
```

**Operation ID:** `createDoc`

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
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |
| categorySlug | string | No | The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field. |
| parentDocSlug | string | No | If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field. |


#### Responses

**Status Code:** 201

**Description:** The doc was successfully created.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |


**Status Code:** 400

**Description:** The doc couldn't be saved.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

### Returns all docs that match the search.

Returns all docs that match the search.

```http
POST /docs/search
```

**Operation ID:** `searchDocs`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| search | query | string | Yes | Search string to look for. |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

### Returns the doc with this slug.

Returns the doc with this slug.

```http
GET /docs/{slug}
```

**Operation ID:** `getDoc`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 200

**Description:** The doc exists and has been returned.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |


**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update a doc with this slug.

Update a doc with this slug.

```http
PUT /docs/{slug}
```

**Operation ID:** `updateDoc`

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
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |
| categorySlug | string | No | The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field. |
| parentDocSlug | string | No | If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field. |


#### Responses

**Status Code:** 200

**Description:** The doc was successfully updated.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |


**Status Code:** 400

**Description:** The doc couldn't be saved.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete the doc with this slug.

Delete the doc with this slug.

```http
DELETE /docs/{slug}
```

**Operation ID:** `deleteDoc`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

### This is intended for use by enterprise users with staging enabled. This endpoint will return the live version of your document, whereas the standard endpoint will always return staging.

This is intended for use by enterprise users with staging enabled. This endpoint will return the live version of your document, whereas the standard endpoint will always return staging.

```http
GET /docs/{slug}/production
```

**Operation ID:** `getProductionDoc`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| slug | path | string | Yes | A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started". |
| x-readme-version | header | string | No | Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions. |

#### Responses

**Status Code:** 200

**Description:** The doc exists and has been returned.

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | No | Title of the page. |
| type | string | No | Type of the page. This can be one of the following:
- `basic` (most common)
- `link` (page that redirects to an external link)
- `error` (page describing an API error) [DEPRECATED] |
| body | string | No | Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs). |
| category | string | No | Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). |
| hidden | boolean | No | Visibility of the page. |
| order | integer | No | The position of the page in your project sidebar. |
| parentDoc | string | No | The parent doc's ID, if the page is a subpage. |
| error | object | No | This is used for docs with the `type` set to `error`. The `error` page type and this `error` object have been deprecated. |


**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The doc couldn't be found.

**Content Type:** `application/json`

Unknown type

## Errors

## IP Addresses

### Returns all of ReadMe’s IP addresses used for outbound webhook requests and the “Try It!” button on the API Explorer.

Although ReadMe’s outbound IP addresses may change, the IPs in this API response will be valid for at least 7 days. If you configure your API or webhooks to limit access based on these IPs, you should refresh the IP list from this endpoint weekly.


Returns all of ReadMe’s IP addresses used for outbound webhook requests and the “Try It!” button on the API Explorer.

Although ReadMe’s outbound IP addresses may change, the IPs in this API response will be valid for at least 7 days. If you configure your API or webhooks to limit access based on these IPs, you should refresh the IP list from this endpoint weekly.


```http
GET /outbound-ips
```

**Operation ID:** `getOutboundIPs`

#### Responses

**Status Code:** 200

**Description:** List of current IP addresses used for webhook and “Try It!” proxy requests.

**Content Type:** `application/json`

Array, item type: object

## Projects

### Returns project data for the API key.

Returns project data for the API key.

```http
GET /
```

**Operation ID:** `getProject`

#### Responses

**Status Code:** 200

**Description:** Project data

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| name | string | No | No description |
| subdomain | string | No | No description |
| jwtSecret | string | No | No description |
| baseUrl | string | No | The base URL for the project. If the project is not running under a custom domain, it will be `https://projectSubdomain.readme.io`, otherwise it can either be or `https://example.com` or, in the case of an enterprise child project `https://example.com/projectSubdomain`. |
| plan | string | No | No description |


**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

## Version

### Retrieve a list of versions associated with a project API key.

Retrieve a list of versions associated with a project API key.

```http
GET /version
```

**Operation ID:** `getVersions`

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

### Create a new version.

Create a new version.

```http
POST /version
```

**Operation ID:** `createVersion`

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
| is_beta | boolean | No | No description |
| is_hidden | boolean | No | Should this be publically accessible? |
| is_deprecated | boolean | No | Should this be deprecated? Only allowed in PUT operations. |
| pdfStatus | string | No | Status of pdf generations. |


#### Responses

**Status Code:** 400

**Description:** There was a validation error during creation.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Returns the version with this version ID.

Returns the version with this version ID.

```http
GET /version/{versionId}
```

**Operation ID:** `getVersion`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| versionId | path | string | Yes | Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions). |

#### Responses

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Update an existing version.

Update an existing version.

```http
PUT /version/{versionId}
```

**Operation ID:** `updateVersion`

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
| is_beta | boolean | No | No description |
| is_hidden | boolean | No | Should this be publically accessible? |
| is_deprecated | boolean | No | Should this be deprecated? Only allowed in PUT operations. |
| pdfStatus | string | No | Status of pdf generations. |


#### Responses

**Status Code:** 400

**Description:** A stable version can't be demoted.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The version couldn't be found.

**Content Type:** `application/json`

Unknown type

### Delete a version

Delete a version

```http
DELETE /version/{versionId}
```

**Operation ID:** `deleteVersion`

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| versionId | path | string | Yes | Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions). |

#### Responses

**Status Code:** 400

**Description:** A stable version can't be removed.

**Content Type:** `application/json`

Unknown type

**Status Code:** 401

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 403

**Description:** Unauthorized

**Content Type:** `application/json`

Unknown type

**Status Code:** 404

**Description:** The version couldn't be found.

**Content Type:** `application/json`

Unknown type

## Owlbot AI

### Ask Owlbot a question about the content of your docs.

Ask Owlbot a question about the content of your docs.

```http
POST /owlbot/ask
```

**Operation ID:** `askOwlbot`

#### Request Body

**Content Type:** `application/json`

**Required:** Yes

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| question | string | Yes | The question being asked to Owlbot. |
| stream | boolean | No | If true the response will be streamed as it is generated. |


#### Responses

**Status Code:** 200

**Description:** The answer to the question that was asked.

**Content Type:** `text/event-stream`

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| answer | string | No | No description |
| sources | array | No | No description |
