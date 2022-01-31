/** 
# closedTools.js

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
RegulonDB drawing traces tool web service

## License

## Author 


**/

// imports needed libraries
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import rateLimit from 'express-rate-limit';
import {typeDefsClosed} from './common/closedToolsSchema';
import {resolversClosed} from './common/closedToolsResolver';
const {buildSubgraphSchema} = require("@apollo/federation");
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import {playgroundTabs} from '../config/closedServicesPlaygroundOptions';
const conectarDB = require('../config/dbConnection');
require('dotenv').config();


// Make the connection to MongoDB using mongoose
conectarDB();

const configApolloServer = async () => {
    const federatedSchema = buildSubgraphSchema([{
        typeDefs: typeDefsClosed,
        resolvers: resolversClosed
    }]);

    // Defining graphql server
    const serverClosedTools = new ApolloServer({
        schema: federatedSchema,
        plugins: [
            process.env.NODE_ENV === 'production'
              ? ApolloServerPluginLandingPageDisabled()
              : ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        playground: playgroundTabs,
        introspection: true,
        formatError: (err) => ({
            message: err.message,
            statusCode: err.extensions.exception.statusCode
        })
    });

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

    //adding an await to start the closedToolsServer
    await serverClosedTools.start()

    // apply express instance to apolloserver
    serverClosedTools.applyMiddleware({
        app,
        cors:{
            origin: '*',
            methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
        }
    });

    //Set an enviroment variable for the port (4000 by default)
    const PORT = process.env.GRAPHQL_CLOSED_SERVICES_PORT || 4002;

    //Server start
    const servExpress = app.listen(PORT, ()=> console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverClosedTools.graphqlPath}`));
}

configApolloServer();
