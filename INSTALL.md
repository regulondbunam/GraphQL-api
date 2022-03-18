# RegulonDB-WS-API

## Installation instructions

1. Step 1

Clone repo from the following [link](https://github.com/regulondbunam/GraphQL-api)

```shell
$ git clone https://github.com/regulondbunam/GraphQL-api
```

2. Step 2

Once the repo is cloned, use this command to install all libraries dependencies of the API

```bash
$ npm install
```

3. Step 3

Use the following command and edit the ".env-sample" file to add credentials to access the MongoDB collections (keeping the variable name) and the ports for GraphQL servers (by default is used port 4001 for the gateway, 4002 for private services, and 4003 for public services).

```bash
# On Unix
nano .env-sample

# On Windows
notepad .\.env-sample
```

Then use the next command for rename the file to ".env"

```bash
# On Unix
mv .env-sample .env

# On Windows
REN .env-sample .env
```


## Expected Directory Structure 

The src directory contains every RegulonDB Web Service separated in it own directory and service type (open for datasets and closed for tools) that contains the following files: 

**Model**. In this file the model of the MongoDB collection is defined, is recomended to have one file for each collection for example modelGene.js

**Schema**. This file defines the model that GraphQL receipts, the extension is .gql and as the same is recomended make a file for each collection.

**Resolver**. Stores all the Queries and Mutations that are defined in schema and will used in the collections.

**Controller**. It has the code to perform the required processing in the solve file and returns the result.


## Dependencies

Required software

- Node JS ^16.13.0
- NPM ^8.1.4


### Errors & Tips
Any bug or error in the web services start up, responses or any other problem related to web services functionality please report on the issues page of the [RegulondDB-WS-API repo](https://github.com/regulondbunam/GraphQL-api/issues)
