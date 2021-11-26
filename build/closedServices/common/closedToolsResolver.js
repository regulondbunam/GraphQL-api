'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolversClosed = undefined;

var _merge = require('@graphql-tools/merge');

var _dttResolver = require('../dttService/dttResolver');

var _regulatoryNetworkResolver = require('../regulatoryNetworkService/regulatoryNetworkResolver');

// merge all resolvers files and exports them to index

// Import each resolver file
const resolversClosed = exports.resolversClosed = (0, _merge.mergeResolvers)([_dttResolver.dttResolver, _regulatoryNetworkResolver.regulatoryNetworkResolver]);