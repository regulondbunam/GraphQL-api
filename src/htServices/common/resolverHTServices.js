import { mergeResolvers } from 'merge-graphql-schemas';
/** import each Resolver file */
import { htDatasetResolvers } from '../htDataset/ht_dataset_resolver';
import { peaksResolvers } from '../peaks/peaks_resolver';
import { tfBindingResolvers } from '../tfBinding/tfBinding_resolver'
import { authorsDataResolvers } from '../authorsData/authorsData_resolver';

/** merges all resolver file and exports them to index */
export const resolvers = mergeResolvers([
    htDatasetResolvers
]);
