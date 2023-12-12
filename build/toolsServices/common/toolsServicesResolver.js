'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolversClosed = undefined;

var _merge = require('@graphql-tools/merge');

var _dttResolver = require('../dttService/dttResolver');

var _regulatoryNetworkResolver = require('../regulatoryNetworkService/regulatoryNetworkResolver');

var _mcoTree_resolver = require('../mcoTreeService/mcoTree_resolver');

// merge all resolvers files and exports them to index
const resolversClosed = exports.resolversClosed = (0, _merge.mergeResolvers)([_dttResolver.dttResolver, _regulatoryNetworkResolver.regulatoryNetworkResolver, _mcoTree_resolver.mcoTreeResolver]);
// Import each resolver file