import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hola: String
  }
`;

export default typeDefs;
