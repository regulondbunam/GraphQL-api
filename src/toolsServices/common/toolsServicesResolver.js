import { mergeResolvers } from '@graphql-tools/merge';
// Import each resolver file
import {dttResolver} from '../dttService/dttResolver';
import { regulatoryNetworkResolver } from '../regulatoryNetworkService/regulatoryNetworkResolver';
import {mcoTreeResolver} from '../mcoTreeService/mcoTree_resolver'

// merge all resolvers files and exports them to index
export const resolversClosed = mergeResolvers([dttResolver, regulatoryNetworkResolver, mcoTreeResolver]);