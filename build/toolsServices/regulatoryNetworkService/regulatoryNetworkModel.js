"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegulatoryNetwork = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../../dataServices/common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var nodeSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String,
  regulatoryEffect: String,
  citations: [_general_model.citationsSchema],
  networkType: String,
  tooltip: String
});
var regulatoryNetworkSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String,
  outdegree: [nodeSchema],
  indegree: [nodeSchema]
});
var RegulatoryNetwork = exports.RegulatoryNetwork = _mongoose["default"].model('regulatory_network_datamarts', regulatoryNetworkSchema, 'regulatoryNetworkDatamart');