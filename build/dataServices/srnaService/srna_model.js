"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SRNA = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var geneSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  gcContent: Number
});
var productSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  gene: geneSchema,
  synonyms: [String],
  sequence: String,
  note: String,
  citations: [_general_model.citationsSchema],
  externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});
var RegulatedEntitySchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String
});
var regulatoryBindingSiteSchema = new _mongoose["default"].Schema({
  absolutePosition: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  "function": String
});
var RegulatoryInteractionsSchema = new _mongoose["default"].Schema({
  _id: String,
  regulatedEntity: RegulatedEntitySchema,
  mechanism: [String],
  "function": String,
  distanceToGene: Number,
  regulatoryBindingSites: regulatoryBindingSiteSchema,
  citations: [_general_model.citationsSchema]
});
var summaryValuesSchema = new _mongoose["default"].Schema({
  repressed: Number,
  activated: Number,
  dual: Number,
  unknown: Number,
  total: Number
});
var summarySchema = new _mongoose["default"].Schema({
  genes: summaryValuesSchema,
  transcriptionFactors: summaryValuesSchema,
  transcriptionUnits: summaryValuesSchema,
  sigmaFactors: summaryValuesSchema,
  regulatoryInteractions: summaryValuesSchema,
  bindingSites: summaryValuesSchema
});
var SrnaSchema = new _mongoose["default"].Schema({
  _id: String,
  product: productSchema,
  regulatoryInteractions: [RegulatoryInteractionsSchema],
  summary: summarySchema,
  allCitations: [_general_model.citationsSchema],
  organism: _general_model.organismSchema
});
var SRNA = exports.SRNA = _mongoose["default"].model('srna_datamarts', SrnaSchema, 'srnaDatamart');