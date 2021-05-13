import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = gql`
  ${fs.readFileSync('./src/openServices/geneService/gene_schema.graphql').toString()}
`;

const Regulon = gql`
  ${fs.readFileSync('./src/openServices/regulonService/regulon_schema.graphql').toString()}
`;

const Operon = gql`
  ${fs.readFileSync('./src/openServices/operonService/operon_schema.graphql').toString()}
`; 

const Sigmulon = gql`
${fs.readFileSync('./src/openServices/sigmulonService/sigmulon_schema.graphql').toString()}
`; 

const commonProperties = gql`
  ${fs.readFileSync('./src/openServices/common/common_properties.graphql').toString()}
`;

const phrases = gql`
${fs.readFileSync('./src/openServices/phrases/phrasesSchema.graphql').toString()}
`;

const Coexpression = gql `
${fs.readFileSync('./src/openServices/coexpressionService/coexpressionSchema.graphql').toString()}
`;

const Overviews = gql `
${fs.readFileSync('./src/openServices/overviewsService/overviews_schema.graphql').toString()}
`;

const HT = gql `
${fs.readFileSync('./src/openServices/htService/ht_search_schema.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
export const types = mergeTypes([Gene, commonProperties, phrases, Operon, Regulon, Sigmulon, Coexpression, Overviews], {all: true});
