import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

const Gene = gql`
  ${fs.readFileSync('./src/schemas/geneSchema.graphql').toString()}
`;
const inheritance = gql`
  ${fs.readFileSync('./src/schemas/inheritence.graphql').toString()}
`;

export const typeDefs = mergeTypes([Gene, inheritance], { all: true });
