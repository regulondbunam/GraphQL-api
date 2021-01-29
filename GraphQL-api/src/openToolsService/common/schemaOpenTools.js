import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';
import { overviewsController } from '../overviewsService/overviews_controller';

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = gql`
  ${fs.readFileSync('./src/openToolsService/geneService/gene_schema.graphql').toString()}
`;
const Regulon = gql`
  ${fs.readFileSync('./src/openToolsService/regulonService/regulon_schema.graphql').toString()}
`;
const Operon = gql`
  ${fs.readFileSync('./src/openToolsService/operonService/operon_schema.graphql').toString()}
`; 
const commonProperties = gql`
  ${fs.readFileSync('./src/openToolsService/common/common_properties.graphql').toString()}
`;

const phrases = gql`
${fs.readFileSync('./src/openToolsService/phrases/phrasesSchema.graphql').toString()}
`;

const Coexpression = gql `
${fs.readFileSync('./src/openToolsService/coexpressionService/coexpressionSchema.graphql').toString()}
`;

const Overviews = gql `
${fs.readFileSync('./src/openToolsService/overviewsService/overviews_schema.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
export const types = mergeTypes([Gene, commonProperties, phrases, Operon, Coexpression, Overviews], {all: true});
