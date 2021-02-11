'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefsClosed = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Read all graphql schemas
const Dtt = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/closedTools/dttService/dttSchema.graphql').toString()}`;

//exports the object that contains all merge schemas
// Import all libraries to used
const typeDefsClosed = exports.typeDefsClosed = (0, _mergeGraphqlSchemas.mergeTypes)([Dtt], { all: true });