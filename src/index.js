import express from 'express';
// graphql
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './schemas/schemas';
import { resolvers } from './resolvers/resolvers';

// variables de entorno
require('dotenv').config();

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `El servidor está corriendo http://localhost:4000${server.graphqlPath}`
  )
);
