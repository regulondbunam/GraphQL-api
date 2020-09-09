import express from 'express';
import rateLimit from 'express-rate-limit';
/** graphql libraries importation */
import { ApolloServer } from 'apollo-server-express';
/** GraphQL server set up requirements */
import { typeDefs } from './common/schemas';
import { resolvers } from './common/resolvers';
import connection from './dbConnection';

/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */
const server = new ApolloServer({
	typeDefs: [ typeDefs ],
	resolvers,
	introspection: true,
	playground: true,
	debug: true,
	formatError: (err) => ({
		message: err.message,
		status: err.extensions.exception.status,
		statusCode: err.extensions.exception.statusCode
	})
});

// Create an Instance of express to be used with ApolloServer
const app = express();

// set up the ApolloServer with an express middleware
const apiLimiter = rateLimit({
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

const PORT = process.env.PORT || 4000;
const servExpress = app.listen(PORT, () => {
	console.log(`The server is running in http://localhost:${servExpress.address().port}${server.graphqlPath}`);
});
