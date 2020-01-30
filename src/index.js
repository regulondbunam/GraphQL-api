import express from 'express';
// graphql
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';

// variables de entorno
require('dotenv').config();

// resolver
const resolvers = { Query: { hola: () => 'Hola Mundo desde GraphQL' } };

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `El servidor está corriendo http://localhost:4000${server.graphqlPath}`
  )
);
