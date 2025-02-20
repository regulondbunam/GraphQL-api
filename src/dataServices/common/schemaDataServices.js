import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = fs.readFileSync('./src/dataServices/geneService/gene_schema.graphql').toString()

const Regulon = fs.readFileSync('./src/dataServices/regulonService/regulon_schema.graphql').toString()

const Operon = fs.readFileSync('./src/dataServices/operonService/operon_schema.graphql').toString()

const Sigmulon = fs.readFileSync('./src/dataServices/sigmulonService/sigmulon_schema.graphql').toString()

const commonProperties = fs.readFileSync('./src/dataServices/common/common_properties.graphql').toString()

const phrases = fs.readFileSync('./src/dataServices/phrases/phrasesSchema.graphql').toString()

const Coexpression = fs.readFileSync('./src/dataServices/coexpressionService/coexpressionSchema.graphql').toString()

const Overviews = fs.readFileSync('./src/dataServices/overviewsService/overviews_schema.graphql').toString()

const GUs = fs.readFileSync('./src/dataServices/gensorUnit/gensorUnit_schema.graphql').toString()

const dbInfo = fs.readFileSync('./src/dataServices/dbInfoService/dbInfo_schema.graphql').toString()

const recentQueries = fs.readFileSync('./src/dataServices/recentQueriesService/recentQueriesSchema.graphql').toString()

const listPage = fs.readFileSync('./src/dataServices/listPageService/listPageSchema.graphql').toString()

const downloadableFiles = fs.readFileSync('./src/dataServices/downloadableFilesService/downloadableFiles_schema.graphql').toString()

const gcs = fs.readFileSync('./src/dataServices/growthConditionsService/growthConditions_schema.graphql').toString()

const types = [Gene, commonProperties, phrases, Operon, Regulon, Sigmulon, Coexpression, Overviews, GUs, dbInfo, recentQueries, listPage, downloadableFiles, gcs]

/** Exports the merged Schema to the index to construct the GQL Server */
export const typeDefs = mergeTypeDefs(types);
