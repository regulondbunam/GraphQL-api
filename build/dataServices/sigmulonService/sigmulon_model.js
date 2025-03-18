"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sigmulon = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var sigmulonBasicPropertiesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var geneOntologyTermsProperties = new _mongoose["default"].Schema({
  citations: [_general_model.citationsSchema],
  _id: String,
  name: String,
  productsId: [String]
});
var sigmulonGenes = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  geneOntologyTerms: {
    cellularComponent: [geneOntologyTermsProperties],
    molecularFunction: [geneOntologyTermsProperties],
    biologicalProcess: [geneOntologyTermsProperties]
  }
});
var sigmaFactorSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  synonyms: [String],
  gene: sigmulonBasicPropertiesSchema,
  sigmulonRegulators: [sigmulonBasicPropertiesSchema],
  sigmulonGenes: [sigmulonGenes],
  abbreviatedName: String
});
var transcribedGenesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  distanceFromTSS: Number
});
var boxesSchema = new _mongoose["default"].Schema({
  leftEndPosition: Number,
  rightEndPosition: Number,
  type: String,
  sequence: String
});
var transcribedPromotersSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  transcribedGenes: [transcribedGenesSchema],
  TSSPosition: Number,
  operonId: String,
  sequence: String,
  boxes: [boxesSchema],
  citations: [_general_model.citationsSchema],
  strand: String
});
var statisticsSchema = new _mongoose["default"].Schema({
  genes: Number,
  transcriptionFactors: Number,
  promoters: Number,
  transcriptionUnits: Number,
  cotranscriptionFactors: Number,
  sigmaFactors: Number
});
var SigmulonSchema = new _mongoose["default"].Schema({
  _id: String,
  sigmaFactor: sigmaFactorSchema,
  transcribedPromoters: [transcribedPromotersSchema],
  statistics: statisticsSchema,
  allCitations: [_general_model.citationsSchema],
  organism: _general_model.organismSchema
});
var Sigmulon = exports.Sigmulon = _mongoose["default"].model('sigmulon_datamarts', SigmulonSchema, 'sigmulonDatamart');