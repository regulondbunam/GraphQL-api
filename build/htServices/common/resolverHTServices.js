'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _merge = require('@graphql-tools/merge');

var _ht_dataset_resolver = require('../htDataset/ht_dataset_resolver');

var _peaks_resolver = require('../peaks/peaks_resolver');

var _tfBinding_resolver = require('../tfBinding/tfBinding_resolver');

var _authorsData_resolver = require('../authorsData/authorsData_resolver');

var _transcriptionUnit_resolver = require('../transcriptionUnit/transcriptionUnit_resolver');

var _tss_resolver = require('../transcriptionStartSite/tss_resolver');

var _tts_resolver = require('../transcriptionTerminationSite/tts_resolver');

var _geneExpression_resolver = require('../geneExpression/geneExpression_resolver');

var _nlpGrowthConditions_resolver = require('../nlpGrowthConditions/nlpGrowthConditions_resolver');

/** merges all resolver file and exports them to index */
const resolvers = exports.resolvers = (0, _merge.mergeResolvers)([_ht_dataset_resolver.htDatasetResolvers, _peaks_resolver.peaksResolvers, _tfBinding_resolver.tfBindingResolvers, _authorsData_resolver.authorsDataResolvers, _transcriptionUnit_resolver.transcriptionUnitResolvers, _tss_resolver.transcriptionStartSiteResolvers, _tts_resolver.transcriptionTerminationSiteResolvers, _geneExpression_resolver.geneExpressionResolvers, _nlpGrowthConditions_resolver.nlpGrowthConditionsResolvers]);
/** import each Resolver file */