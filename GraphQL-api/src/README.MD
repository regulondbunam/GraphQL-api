# About the project structure

**index.js**

Principal class, setting up the GraphQL server and makes available the Apollo Server Playground enviroment.

---

### Packages

Each feature has its own folder that contains the files required to build up the entire API. The files that contain each feature are:

**models**

In this file the model of the MongoDB collection is defined, is recomended to have one file for each collection for example modelGene.js

**schemas**

This file defines the model that GraphQL receipts, the extension is .gql and as the same is recomended make a file for each collection.

**resolvers**

Stores all the Queries and Mutations that are defined in schema and will used in the collections.

**controllers**

Makes the process required on resolver file and returns the result.

---

There exists a folder calld "Common", where the files with the common properties or types that can be inherited by feature-files. Also, merges the schemas and resolvers to make then one to be used in the index.js

