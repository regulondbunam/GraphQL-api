"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneExpression = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var geneSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  synonyms: [String],
  bnumber: String,
  leftEndPosition: Number,
  rightEndPosition: Number
});
var geneExpressionSchema = new _mongoose["default"].Schema({
  _id: String,
  datasetIds: [String],
  gene: geneSchema,
  count: Number,
  tpm: Number,
  fpkm: Number,
  temporalId: String
});
var GeneExpression = exports.GeneExpression = _mongoose["default"].model('ht_geneExpression', geneExpressionSchema, "geneExpression");