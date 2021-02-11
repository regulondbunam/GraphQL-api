'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolversClosed = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _dttResolver = require('../dttService/dttResolver');

// merge all resolvers files and exports them to index
const resolversClosed = exports.resolversClosed = (0, _mergeGraphqlSchemas.mergeResolvers)([_dttResolver.dttResolver]);
// Import each resolver file