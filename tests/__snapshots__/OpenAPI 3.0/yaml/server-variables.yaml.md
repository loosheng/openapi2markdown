# Server variables

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#serverVariableObject

**Version:** 1.0.0

## Servers

- **URL:** https://{name}.example.com:{port}/{basePath}

- **URL:** http://{name}.local/{basePath}

- **URL:** https://{name}.readme.io:{port}/{basePath}

## Global

### Global servers + variables

Support and handling of servers and server variables.

📚 OpenAPI specification references:

* [3.0.3 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#serverObject)

* [3.1.0 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#serverObject)

```http
POST /global
```

## Operation

### Operation-level servers + variables

Support and handling of servers and server variables set at the operation level.

📚 OpenAPI specification references:

* [3.0.3 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject)

* [3.1.0 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject)

```http
POST /operation
```

## Path

### Path-common level operation servers

Support and handling of servers and server variables set at the path level.

📚 OpenAPI specification references:

* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)

* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)

```http
PUT /path
```

### Path-common level and operation-level operation servers

Support and handling of servers and server variables set at the path **and** operation level.

📚 OpenAPI specification references:

* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)

* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)

```http
PUT /combo
```
