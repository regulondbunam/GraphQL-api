import express from 'express';
// graphql
<<<<<<< HEAD
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
=======
import graphqlHTTP from 'express-graphql';
import schema from './schemas';
// variables de entorno
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Todo Listo');
});

// resolver
const root = { hola: () => 'Hola Mundo desde GraphQL' };

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8000, () => console.log('Servidor en línea'));
>>>>>>> bb253ed499422611a79ab45a46c1215aafd48590
