'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./common/schema');

var _resolvers = require('./common/resolvers');

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// make connection to MongoDB
// import connection from './dbConnection';

// Defining GraphQL server
const server = new _apolloServerExpress.ApolloServer({
	playground: true,
	typeDefs: _schema.typeDefs,
	resolvers: _resolvers.resolvers
});

// Create an instance of express to be used with ApolloServer
/**
# name: index.js version: 1.0

## synopsis

```shell
    npm start 
```

## description
Configures GraphQL server

## arguments
NA

* __Return:__
NA

## code

**/

// import needed libraries
const app = (0, _express2.default)();

// set up the ApolloServer with an express middleware
const apiLimiter = (0, _expressRateLimit2.default)({
	windowMs: 60000,
	max: 1000,
	message: {
		message: 'Too many requests',
		statusCode: '429'
	}
});
app.use(apiLimiter);

// Apply Cors and Express instance to ApolloServer
server.applyMiddleware({
	app,
	cors: {
		origin: '*'
	}
});

// when server start
const servExpress = app.listen(4000, () => console.log(`Server is available in http://localhost:${servExpress.address().port}${server.graphqlPath}`));