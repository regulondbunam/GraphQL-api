'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _closedToolsSchema = require('./common/closedToolsSchema');

var _closedToolsResolver = require('./common/closedToolsResolver');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { buildFederatedSchema } = require("@apollo/federation"); /** 
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

const conectarDB = require('../config/dbConnection');
require('dotenv').config();

// Make the connection to MongoDB using mongoose
conectarDB();

const federatedSchema = buildFederatedSchema([{
    typeDefs: _apolloServerExpress.gql`${_closedToolsSchema.typeDefsClosed}`,
    resolvers: _closedToolsResolver.resolversClosed
}]);

// Defining graphql server
const server = new _apolloServerExpress.ApolloServer({
    playground: true,
    schema: federatedSchema,
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

// apply express instance to apolloserver
server.applyMiddleware({
    app,
    cors: {
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.PORT || 4002;

//Server start
const servExpress = app.listen(PORT, () => console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${server.graphqlPath}`));