"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressRateLimit = require("express-rate-limit");

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _apolloServerExpress = require("apollo-server-express");

var _schemas = require("./common/schemas");

var _resolvers = require("./common/resolvers");

var _playground_Options = require("./playground_Options");

var _dbConnection = require("./dbConnection");

var _dbConnection2 = _interopRequireDefault(_dbConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** graphql libraries importation */

/** GraphQL server set up requirements */

/**  enviroment variables require */
require('dotenv').config();
/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */


const server = new _apolloServerExpress.ApolloServer({
  typeDefs: [_schemas.typeDefs],
  resolvers: _resolvers.resolvers,
  introspection: true,
  playground: _playground_Options.playgroundTabs,
  debug: true,
  formatError: err => ({
    message: err.message,
    status: err.extensions.exception.status,
    statusCode: err.extensions.exception.statusCode
  })
}); // Create an Instance of express to be used with ApolloServer

const app = (0, _express2.default)(); // set up the ApolloServer with an express middleware

const apiLimiter = (0, _expressRateLimit2.default)({
  windowMs: 60000,
  max: 1000,
  message: {
    message: 'Too many requests',
    statusCode: '429'
  }
});
app.use(apiLimiter); // Apply Cors and Express instance to ApolloServer

server.applyMiddleware({
  app,
  cors: {
    origin: '*'
  }
});
const PORT = process.env.PORT || 4000;
const servExpress = app.listen(PORT, () => {
  console.log(`The server is running in http://localhost:${servExpress.address().port}${server.graphqlPath}`);
});