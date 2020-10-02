import {mergeResolvers} from 'merge-graphql-schemas';
/** import each Resolver file */
import {geneResolvers} from '../geneService/gene_resolver';
import {regulonResolvers} from '../regulonService/regulon_resolver';
import {phrasesResolvers} from '../phrases/phrasesResolvers';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([geneResolvers, regulonResolvers, phrasesResolvers]);
