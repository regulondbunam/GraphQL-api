import { mergeResolvers } from 'merge-graphql-schemas';
/** import each Resolver file */
import { geneResolvers } from '../geneService/gene_resolver';
//import { regulonResolvers } from '../regulonService/regulon_resolver';
import { operonResolvers } from '../operonService/operon_resolver';
import { phrasesResolvers } from '../phrases/phrasesResolvers';
import { coexpressionResolver } from '../coexpressionService/coexpressionResolver';
import { overviewsResolver } from '../overviewsService/overviews_resolver'
import { regulonResolvers } from '../regulonService/regulon_resolver'
import { sigmulonResolvers } from '../sigmulonService/sigmulon_resolver'
import { htResolvers } from '../htService/ht_search_resolver'
import { srnaResolvers } from '../srnaService/srna_resolver'

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([
    geneResolvers, 
    phrasesResolvers, 
    operonResolvers, 
    coexpressionResolver,
    overviewsResolver,
    regulonResolvers,
    sigmulonResolvers,
    srnaResolvers
]);
