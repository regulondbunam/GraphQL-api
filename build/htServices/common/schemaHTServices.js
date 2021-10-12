'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const HT = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/htServices/htService/ht_search_schema.graphql').toString()}
`;

const HT_Dataset = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/htServices/htDataset/ht_dataset_schema.graphql').toString()}
`;

const commonProperties = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/htServices/common/common_properties.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
const types = exports.types = (0, _mergeGraphqlSchemas.mergeTypes)([HT_Dataset, commonProperties], { all: true });