import { mergeResolvers } from 'merge-graphql-schemas';
/** import each Resolver file */
import { htResolvers } from '../htService/ht_search_resolver';
import { htDatasetResolvers } from '../htDataset/ht_dataset_resolver';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([
    htDatasetResolvers
]);
