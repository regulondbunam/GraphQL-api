import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = gql`
  ${fs.readFileSync('./src/geneService/geneSchema.graphql').toString()}
`;
const commonProperties = gql`
  ${fs.readFileSync('./src/common/commonProperties.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
export const typeDefs = mergeTypes([Gene, commonProperties], { all: true });
