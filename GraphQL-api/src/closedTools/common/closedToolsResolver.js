import {mergeResolvers} from 'merge-graphql-schemas';
// Import each resolver file
import {dttResolver} from '../dttService/dttResolver';

// merge all resolvers files and exports them to index
export const resolversClosed = mergeResolvers([dttResolver]);