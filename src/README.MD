# About the project structure

**index.js**

Principal class, setting up the GraphQL server and makes available the Graphi enviroment.

### Packages

**models**

In this package, the model of the MongoDB collection is defined, is recomended to have one file for each collection for example modelGene.js

**schemas**

This package stores the files which define the model that GraphQL receipts, the extension is .gql and as the same is recomended make a file for each collection.

**resolvers**

Stores the files which define all the Queries and Mutations used in the collections, can be create one file for queries and one for Mutations (both for each collection) being more scalable.

**controllers**

