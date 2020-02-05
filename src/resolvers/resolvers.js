import { mergeResolvers } from 'merge-graphql-schemas';
import { geneResolvers } from './geneResolvers';

export const resolvers = mergeResolvers([geneResolvers]);
