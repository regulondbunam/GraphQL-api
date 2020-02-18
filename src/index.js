import express from 'express';
// graphql
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './geneService/geneSchema';

// variables de entorno
require('dotenv').config();

// resolver
const resolvers = { Query: { gene: () => 'Hola Mundo desde GraphQL' } };

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`El servidor está corriendo http://localhost:4000${server.graphqlPath}`));
