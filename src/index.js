import express from 'express';
/** query cost analyzer */
import { createComplexityLimitRule } from 'graphql-validation-complexity';
/** graphql libraries importation */
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
/** GraphQL server set up requirements */
import { GraphQLError } from 'graphql';
import { typeDefs } from './common/schemas';
import { resolvers } from './common/resolvers';

/**  enviroment variables require */
require('dotenv').config();

/** Conecction to mongoDB with the credentials on .env file */
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

/** creating a limitRule for GraphQL queries */
const complexLimitRule = createComplexityLimitRule(1000, {
  scalarCost: 1,
  objectCost: 5,
  listFactor: 5,
  onCost: cost => {
    console.log(`query cost: ${cost}`);
  },
  formatErrorMessage: cost =>
    `Your query with cost ${cost} exceeds limit complexity, use less fields`,
});

/** Setting up the GraphQL - Apollo Server Express Playground
 * @param typeDefs are the merged .graphql schemas
 * @param resolvers are the merged resolvers
 */

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // debug: false,
  validationRules: [complexLimitRule],
});

/** set up the ApolloServer with an express middleware */
const app = express();
server.applyMiddleware({ app });

const serv = app.listen({ port: 4000 }, () =>
  console.log(
    `El servidor está corriendo http://localhost:4000${server.graphqlPath}`
  )
);

serv.setTimeout(10000);
