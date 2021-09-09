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
const Dtt = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/closedServices/dttService/dttSchema.graphql').toString()}`; // Import all libraries to used


const RegNet = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/closedServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString()}`;

const commonProperties = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/closedServices/common/common_properties.graphql').toString()}`;

//exports the object that contains all merge schemas
const typeDefsClosed = exports.typeDefsClosed = (0, _mergeGraphqlSchemas.mergeTypes)([Dtt, RegNet, commonProperties], { all: true });