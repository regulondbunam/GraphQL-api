<<<<<<< HEAD
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hola: String
  }
`;

export default typeDefs;
=======
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query{
        hola: String
    }
`);

export default schema;
>>>>>>> bb253ed499422611a79ab45a46c1215aafd48590
