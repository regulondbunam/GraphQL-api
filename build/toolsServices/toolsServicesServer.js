'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _toolServicesSchema = require('./common/toolServicesSchema');

var _toolsServicesResolver = require('./common/toolsServicesResolver');

var _apolloServerCore = require('apollo-server-core');

var _toolsServicesPlaygroundOptions = require('../config/toolsServicesPlaygroundOptions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { buildSubgraphSchema } = require("@apollo/federation"); /** 
                                                               # toolsServicesServer.js
                                                               
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

const conectarDB = require('../config/dbConnection');
require('dotenv').config();

// Make the connection to MongoDB using mongoose
conectarDB();

const configApolloServer = async () => {
    const federatedSchema = buildSubgraphSchema([{
        typeDefs: _toolServicesSchema.typeDefsClosed,
        resolvers: _toolsServicesResolver.resolversClosed
    }]);

    // Defining graphql server
    const serverToolsServices = new _apolloServerExpress.ApolloServer({
        schema: federatedSchema,
        plugins: [process.env.NODE_ENV === 'production' ? (0, _apolloServerCore.ApolloServerPluginLandingPageDisabled)() : (0, _apolloServerCore.ApolloServerPluginLandingPageGraphQLPlayground)()],
        playground: _toolsServicesPlaygroundOptions.playgroundTabs,
        introspection: true,
        formatError: err => ({
            message: err.message,
            statusCode: err.extensions.exception.statusCode
        })
    });

    // create an instance of express to be used with ApolloServer
    const app = (0, _express2.default)();

    //Set a variable to limit requests
    const limiter = (0, _expressRateLimit2.default)({
        windowMs: 60000,
        max: 1000,
        message: {
            message: 'Too many requests',
            statusCode: 429
        }
    });
    //Assign limit to the API
    app.use(limiter);

    //adding an await to start the closedToolsServer
    await serverToolsServices.start();

    // apply express instance to apolloserver
    serverToolsServices.applyMiddleware({
        app,
        cors: {
            origin: '*',
            methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
        }
    });

    //Set an enviroment variable for the port (4000 by default)
    const PORT = process.env.GRAPHQL_TOOLS_SERVICES_PORT || 4002;

    //Server start
    const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${serverToolsServices.graphqlPath}`));
};

configApolloServer();