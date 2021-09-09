'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolversClosed = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _dttResolver = require('../dttService/dttResolver');

var _regulatoryNetworkResolver = require('../regulatoryNetworkService/regulatoryNetworkResolver');

// merge all resolvers files and exports them to index

// Import each resolver file
const resolversClosed = exports.resolversClosed = (0, _mergeGraphqlSchemas.mergeResolvers)([_dttResolver.dttResolver, _regulatoryNetworkResolver.regulatoryNetworkResolver]);