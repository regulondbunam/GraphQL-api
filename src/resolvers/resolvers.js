import { mergeResolvers } from 'merge-graphql-schemas';
/** import each Resolver file */
import { geneResolvers } from './geneResolvers';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([geneResolvers]);
