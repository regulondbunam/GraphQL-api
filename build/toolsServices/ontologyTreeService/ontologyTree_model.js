"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ontologyTree = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var geneMembers = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  productName: String
});
var ontologyTreeSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  description: String,
  genes: [geneMembers],
  ontologyId: String,
  subclasses: [String],
  subclassOf: [String]
});
var ontologyTree = exports.ontologyTree = _mongoose["default"].model('ontologyTree', ontologyTreeSchema, 'mcoTree');