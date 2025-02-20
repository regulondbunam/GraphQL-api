import { mergeResolvers } from '@graphql-tools/merge';
/** import each Resolver file */
import { geneResolvers } from '../geneService/gene_resolver';
//import { regulonResolvers } from '../regulonService/regulon_resolver';
import { operonResolvers } from '../operonService/operon_resolver';
import { phrasesResolvers } from '../phrases/phrasesResolvers';
import { coexpressionResolver } from '../coexpressionService/coexpressionResolver';
import { overviewsResolver } from '../overviewsService/overviews_resolver'
import { regulonResolvers } from '../regulonService/regulon_resolver'
import { sigmulonResolvers } from '../sigmulonService/sigmulon_resolver'
import { gensorUnitResolvers } from '../gensorUnit/gensorUnit_resolver'
import { dbInfoResolvers } from '../dbInfoService/dbInfo_resolver'
import { recentUsedQueriesResolver } from '../recentQueriesService/recentQueriesResolver'
import { listPageResolver } from '../listPageService/listPageResolver';
import { downloadableFilesResolver } from '../downloadableFilesService/downloadableFiles_resolver';
import { commonResolvers } from './common_resolver';
import { growthConditionResolvers } from '../growthConditionsService/growthConditions_resolver';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([
    geneResolvers,
    phrasesResolvers,
    operonResolvers,
    coexpressionResolver,
    overviewsResolver,
    regulonResolvers,
    sigmulonResolvers,
    gensorUnitResolvers,
    dbInfoResolvers,
    recentUsedQueriesResolver,
    listPageResolver,
    downloadableFilesResolver,
    commonResolvers,
    growthConditionResolvers
]);
