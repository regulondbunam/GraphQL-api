"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _apolloServerExpress = require("apollo-server-express");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/geneService/gene_schema.graphql').toString()}
`;
const Regulon = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/regulonService/regulon_schema.graphql').toString()}
`;
const commonProperties = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/common/common_properties.graphql').toString()}
`;
const phrases = _apolloServerExpress.gql`
${_fs2.default.readFileSync('./src/phrases/phrases.graphql').toString()}
`;
/** Exports the merged Schema to the index to construct the GQL Server */

const typeDefs = exports.typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([Gene, commonProperties, phrases], {
  all: true
});