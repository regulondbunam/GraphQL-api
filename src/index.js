import express from 'express';
/** graphql libraries importation */
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
/** GraphQL server set up requirements */
import { typeDefs } from './common/schemas';
import { resolvers } from './common/resolvers';

/**  enviroment variables require */
const enviroment = require('../config-module').config();

/** Conecction to mongoDB with the credentials on .env file */
mongoose.connect(
  `mongodb://${enviroment.DB_USER}:${enviroment.DB_PASS}@${enviroment.DB_URL}`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  formatError: err => ({
    message: err.message,
    status: err.extensions.exception.status,
    statusCode: err.extensions.exception.statusCode,
  }),
});

/** set up the ApolloServer with an express middleware */
const app = express();
server.applyMiddleware({
  app,
  cors: {
    origin: '*',
  },
});

const serv = app.listen({ port: 4000 }, () =>
  console.log(
    `The server is running in http://localhost:4000${server.graphqlPath}`
  )
);

serv.setTimeout(10000);
