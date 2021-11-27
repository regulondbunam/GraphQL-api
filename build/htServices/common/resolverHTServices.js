'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _ht_dataset_resolver = require('../htDataset/ht_dataset_resolver');

var _peaks_resolver = require('../peaks/peaks_resolver');

var _tfBinding_resolver = require('../tfBinding/tfBinding_resolver');

var _authorsData_resolver = require('../authorsData/authorsData_resolver');

var _transcriptionUnit_resolver = require('../transcriptionUnit/transcriptionUnit_resolver');

/** merges all resolver file and exports them to index */
const resolvers = exports.resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_ht_dataset_resolver.htDatasetResolvers, _peaks_resolver.peaksResolvers, _tfBinding_resolver.tfBindingResolvers, _authorsData_resolver.authorsDataResolvers, _transcriptionUnit_resolver.transcriptionUnitResolvers]);
/** import each Resolver file */