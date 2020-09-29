import { mergeResolvers } from 'merge-graphql-schemas';
/** import each Resolver file */
import { exampleResolvers } from '../exampleService/exampleResolver';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([ exampleResolvers ]);
