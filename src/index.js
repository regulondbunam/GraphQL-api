import express from 'express';
// graphql
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
// GraphQL server set up requirements
import { typeDefs } from './schemas/schemas';
import { resolvers } from './resolvers/resolvers';

// enviroment variables require 
require('dotenv').config();

// Conecction to mongoDB with the credentials on .env file
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`, {useUnifiedTopology: true, useNewUrlParser: true}
);

// Setting up the GraphQL - Apollo Server Express Playground
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // debug: false,
});

server.applyMiddleware({ app });

const gqlServer = app.listen({ port: 4000 }, () =>
  console.log(
    `El servidor está corriendo http://localhost:4000${server.graphqlPath}`
  )
);
