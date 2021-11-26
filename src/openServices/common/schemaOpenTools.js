import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = fs.readFileSync('./src/openServices/geneService/gene_schema.graphql').toString()

const Regulon = fs.readFileSync('./src/openServices/regulonService/regulon_schema.graphql').toString()

const Operon = fs.readFileSync('./src/openServices/operonService/operon_schema.graphql').toString()

const Sigmulon = fs.readFileSync('./src/openServices/sigmulonService/sigmulon_schema.graphql').toString()

const commonProperties = fs.readFileSync('./src/openServices/common/common_properties.graphql').toString()

const phrases = fs.readFileSync('./src/openServices/phrases/phrasesSchema.graphql').toString()

const Coexpression = fs.readFileSync('./src/openServices/coexpressionService/coexpressionSchema.graphql').toString()

const Overviews = fs.readFileSync('./src/openServices/overviewsService/overviews_schema.graphql').toString()

const SRNA = fs.readFileSync('./src/openServices/srnaService/srna_schema.graphql').toString()

const types = [Gene, commonProperties, phrases, Operon, Regulon, Sigmulon, Coexpression, Overviews, SRNA]

/** Exports the merged Schema to the index to construct the GQL Server */
export const typeDefs = mergeTypeDefs(types);
