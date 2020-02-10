import { mergeResolvers } from 'merge-graphql-schemas';
// import each Resolver file 
import { geneResolvers } from './geneResolvers';

// merges all resolver file and exports them
export const resolvers = mergeResolvers([geneResolvers]);
