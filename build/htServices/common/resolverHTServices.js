'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _ht_search_resolver = require('../htService/ht_search_resolver');

var _ht_dataset_resolver = require('../htDataset/ht_dataset_resolver');

/** merges all resolver file and exports them to index */

/** import each Resolver file */
const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_ht_dataset_resolver.htDatasetResolvers]);