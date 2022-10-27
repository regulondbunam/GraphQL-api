import { mergeResolvers } from '@graphql-tools/merge';
/** import each Resolver file */
import { htDatasetResolvers } from '../htDataset/ht_dataset_resolver';
import { peaksResolvers } from '../peaks/peaks_resolver';
import { tfBindingResolvers } from '../tfBinding/tfBinding_resolver'
import { authorsDataResolvers } from '../authorsData/authorsData_resolver';
import { transcriptionUnitResolvers } from '../transcriptionUnit/transcriptionUnit_resolver'
import { transcriptionStartSiteResolvers } from '../transcriptionStartSite/tss_resolver'
import { transcriptionTerminationSiteResolvers } from '../transcriptionTerminationSite/tts_resolver'
import { geneExpressionResolvers } from '../geneExpression/geneExpression_resolver'
import { nlpGrowthConditionsResolvers } from '../nlpGrowthConditions/nlpGrowthConditions_resolver'

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([
    htDatasetResolvers,
    peaksResolvers,
    tfBindingResolvers,
    authorsDataResolvers,
    transcriptionUnitResolvers,
    transcriptionStartSiteResolvers,
    transcriptionTerminationSiteResolvers,
    geneExpressionResolvers,
    nlpGrowthConditionsResolvers
]);
