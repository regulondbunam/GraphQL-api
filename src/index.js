import express from 'express';
// graphql
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
