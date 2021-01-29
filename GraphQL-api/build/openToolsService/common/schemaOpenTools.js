'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _overviews_controller = require('../overviewsService/overviews_controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const Gene = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/openToolsService/geneService/gene_schema.graphql').toString()}
`;
const Regulon = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/openToolsService/regulonService/regulon_schema.graphql').toString()}
`;
const Operon = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/openToolsService/operonService/operon_schema.graphql').toString()}
`;
const commonProperties = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/openToolsService/common/common_properties.graphql').toString()}
`;

const phrases = _apolloServerExpress.gql`
${_fs2.default.readFileSync('./src/openToolsService/phrases/phrasesSchema.graphql').toString()}
`;

const Coexpression = _apolloServerExpress.gql`
${_fs2.default.readFileSync('./src/openToolsService/coexpressionService/coexpressionSchema.graphql').toString()}
`;

const Overviews = _apolloServerExpress.gql`
${_fs2.default.readFileSync('./src/openToolsService/overviewsService/overviews_schema.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
const types = exports.types = (0, _mergeGraphqlSchemas.mergeTypes)([Gene, commonProperties, phrases, Operon, Coexpression, Overviews], { all: true });