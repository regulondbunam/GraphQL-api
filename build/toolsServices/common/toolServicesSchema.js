"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefsClosed = void 0;
var _merge = require("@graphql-tools/merge");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Import all libraries to used

//Read all graphql schemas
var Dtt = _fs["default"].readFileSync('./src/toolsServices/dttService/dttSchema.graphql').toString();
var RegNet = _fs["default"].readFileSync('./src/toolsServices/regulatoryNetworkService/regulatoryNetworkSchema.graphql').toString();
var ontologyTree = _fs["default"].readFileSync('./src/toolsServices/ontologyTreeService/ontologyTree_schema.graphql').toString();
var commonProperties = _fs["default"].readFileSync('./src/toolsServices/common/common_properties.graphql').toString();
var types = [Dtt, RegNet, ontologyTree, commonProperties];

//exports the object that contains all merge schemas
var typeDefsClosed = exports.typeDefsClosed = (0, _merge.mergeTypeDefs)(types);