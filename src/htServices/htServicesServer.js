/** 
# openTools.js

## Description
Configures Graphql server

## Usage
```shell
npm start
```

## Arguments/Parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License

## Author 


**/

// imports needed libraries
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import rateLimit from 'express-rate-limit';
import {types} from './common/schemaHTServices';
import {resolvers} from './common/resolverHTServices';
const {buildFederatedSchema} = require("@apollo/federation");
import {playgroundTabs} from '../config/htPlaygroundOptions';
const conectarDB = require('../config/dbConnection');
require('dotenv').config();

//Make the connection to mongoDB
conectarDB();

const federatedSchema = buildFederatedSchema([{
    typeDefs: gql`${types}`,
    resolvers: resolvers
}]);

//Defining graphql server
const serverOpenTools = new ApolloServer({
    playground: true,
    schema: federatedSchema,
    playground: playgroundTabs,
    introspection: true,
    formatError: (err) => ({
        message: err.message,
        status: err.extensions.exception.status,
        statusCode: err.extensions.exception.statusCode,
    })
})

// create an instance of express to be used with ApolloServer
const app = express();

//Set a variable to limit requests
const limiter = rateLimit({
    windowMs: 60000,
    max: 1000,
    message:{
        message: 'Too many requests',
        statusCode: 429
    }
});
//Assign limit to the API
app.use(limiter);

// apply express instance to apolloserver
serverOpenTools.applyMiddleware({
    app,
    cors:{
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.GRAPHQL_HT_SERVICES_PORT || 4004;

//Server start
const servExpress = app.listen(PORT);
console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverOpenTools.graphqlPath}`)

