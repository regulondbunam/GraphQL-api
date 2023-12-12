'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefsClosed = undefined;

var _merge = require('@graphql-tools/merge');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Read all graphql schemas
// Import all libraries to used
const Dtt = _fs2.default.readFileSync('./src/toolsServices/dttService/dttSchema.graphql').toString();

const RegNet = _fs2.default.readFileSync('./src/toolsServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString();

const termTree = _fs2.default.readFileSync('./src/toolsServices/mcoTreeService/mcoTree_schema.graphql').toString();

const commonProperties = _fs2.default.readFileSync('./src/toolsServices/common/common_properties.graphql').toString();

const types = [Dtt, RegNet, termTree, commonProperties];

//exports the object that contains all merge schemas
const typeDefsClosed = exports.typeDefsClosed = (0, _merge.mergeTypeDefs)(types);