import express, {query} from 'express';
import rateLimit from 'express-rate-limit';
/** graphql libraries importation */
import {gql, ApolloServer} from 'apollo-server-express';
/** GraphQL server set up requirements */
import {typeDefs} from './common/schemas';
import {resolvers} from './common/resolvers';
import {playgroundTabs} from './playground_Options';
import {buildFederatedSchema} from "@apollo/federation"
import connection from './dbConnection';

/**  enviroment variables require */
require('dotenv').config();

/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */

 const federatedSchema = buildFederatedSchema({
   typeDefs: gql`${typeDefs}`,
   resolvers,
 })

const server = new ApolloServer({
  schema: federatedSchema,
  introspection: true,
  playground: playgroundTabs,
  debug: true,
  formatError: (err) => ({
    message: err.message,
    status: err.extensions.exception.status,
    statusCode: err.extensions.exception.statusCode,
  }),
});

// Create an Instance of express to be used with ApolloServer
const app = express();

// set up the ApolloServer with an express middleware
const apiLimiter = rateLimit({
  windowMs: 60000,
  max: 1000,
  message: {
    message: 'Too many requests',
    statusCode: '429',
  },
});
app.use(apiLimiter);

// Apply Cors and Express instance to ApolloServer
server.applyMiddleware({
  app,
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || process.env.GRAPHQl_PORT || 4000 ;
const servExpress = app.listen(PORT, () => {
  console.log(`The server is running in http://localhost:${servExpress.address().port}${server.graphqlPath}`);
});
