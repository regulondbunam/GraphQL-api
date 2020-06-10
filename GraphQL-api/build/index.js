'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _graphqlRateLimitDirective = require('graphql-rate-limit-directive');

var _schemas = require('./common/schemas');

var _resolvers = require('./common/resolvers');

var _dbConnection = require('./dbConnection');

var _dbConnection2 = _interopRequireDefault(_dbConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */

const server = new _apolloServerExpress.ApolloServer({
	typeDefs: [(0, _graphqlRateLimitDirective.createRateLimitTypeDef)(), _schemas.typeDefs],
	resolvers: _resolvers.resolvers,
	introspection: true,
	playground: true,
	debug: true,
	schemaDirectives: {
		rateLimit: (0, _graphqlRateLimitDirective.createRateLimitDirective)()
	},
	// tracing: true,
	formatError: err => ({
		message: err.message,
		status: err.extensions.exception.status,
		statusCode: err.extensions.exception.statusCode
	})
});

/** set up the ApolloServer with an express middleware */

/** GraphQL server set up requirements */

/** graphql libraries importation */
const app = (0, _express2.default)();
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

/*const servExpress = app.listen({ port: 4000 || 0 }, () =>
	console.log(`The server is running in http://localhost:${servExpress.address().port}${server.graphqlPath}`)
);*/