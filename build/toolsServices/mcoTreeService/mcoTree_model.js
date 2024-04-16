"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MCOTree = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var geneMembers = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  productName: String
});
var McoTree = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  description: String,
  genes: [geneMembers],
  ontologyId: String,
  subclasses: [String],
  subclassOf: [String]
});
var MCOTree = exports.MCOTree = _mongoose["default"].model('mcoTree', McoTree, 'mcoTree');