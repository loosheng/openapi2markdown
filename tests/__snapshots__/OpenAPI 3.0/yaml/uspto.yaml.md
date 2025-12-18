# USPTO Data Set API

The Data Set API (DSAPI) allows the public users to discover and search USPTO exported data sets. This is a generic API that allows USPTO users to make any CSV based data files searchable through API. With the help of GET call, it returns the list of data fields that are searchable. With the help of POST call, data can be fetched based on the filters on the field names. Please note that POST call is used to search the actual data. The reason for the POST call is that it allows users to specify any complex search criteria without worry about the GET size limitations as well as encoding of the input parameters.

**Version:** 1.0.0

## Servers

- **URL:** {scheme}://developer.uspto.gov/ds-api

## metadata

Find out about the data sets

### List available data sets

```http
GET /
```

#### Responses

**200** - Returns a list of data sets

**Content Type:** `application/json`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| total | integer | No | - |
| apis | object[] | No | - |


**apis 数组项结构:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| apiKey | string | No | To be used as a dataset parameter value |
| apiVersionNumber | string | No | To be used as a version parameter value |
| apiUrl | string | No | The URL describing the dataset's fields |
| apiDocumentationUrl | string | No | A URL to the API console for each API |


### Provides the general information about the API and the list of fields that can be used to query the dataset.

This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.

```http
GET /{dataset}/{version}/fields
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| dataset | path | string | Yes | Name of the dataset. |
| version | path | string | Yes | Version of the dataset. |

#### Responses

**200** - The dataset API for the given version is found and it is accessible to consume.

**Content Type:** `application/json`

string

**404** - The combination of dataset name and version is not found in the system or it is not published yet to be consumed by public.

**Content Type:** `application/json`

string

## search

Search a data set

### Provides search capability for the data set with the given search criteria.

This API is based on Solr/Lucense Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.

```http
POST /{dataset}/{version}/records
```

#### Parameters

| Name | Location | Type | Required | Description |
| ---- | -------- | ---- | -------- | ----------- |
| version | path | string | Yes | Version of the dataset. |
| dataset | path | string | Yes | Name of the dataset. In this case, the default value is oa_citations |

#### Request Body

**Content Type:** `application/x-www-form-urlencoded`

**Properties:**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| criteria | string | Yes | Uses Lucene Query Syntax in the format of propertyName:value, propertyName:[num1 TO num2] and date range format: propertyName:[yyyyMMdd TO yyyyMMdd]. In the response please see the 'docs' element which has the list of record objects. Each record structure would consist of all the fields and their corresponding values. |
| start | integer | No | Starting record number. Default value is 0. |
| rows | integer | No | Specify number of rows to be returned. If you run the search with default values, in the response you will see 'numFound' attribute which will tell the number of records available in the dataset. |


#### Responses

**200** - successful operation

**Content Type:** `application/json`

Array, item type: object
