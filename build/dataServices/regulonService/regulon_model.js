"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Regulon = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var tusEncodingRegulatorSchema = new _mongoose["default"].Schema({
  transcriptionUnitName: String,
  promoterName: String
});
var encodedByGenes = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  leftEndPosition: Number,
  length: Number,
  rightEndPosition: Number
});
var encodedByOperons = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  tusEncodingRegulator: [tusEncodingRegulatorSchema]
});
var encodedBySchema = new _mongoose["default"].Schema({
  genes: [encodedByGenes],
  operon: [encodedByOperons]
});
var ConformationsSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String,
  "class": String,
  effectorInteractionType: String,
  effector: [{
    _id: String,
    name: String
  }],
  note: String,
  citations: [_general_model.citationsSchema],
  functionalType: String,
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
});
var productsSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  abbreviatedName: String
});
var mainRegulatorSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  abbreviatedName: String,
  synonyms: [String],
  note: String,
  conformations: [ConformationsSchema],
  encodedBy: encodedBySchema,
  sensingClass: String,
  connectivityClass: String,
  citations: [_general_model.citationsSchema],
  products: [productsSchema],
  symmetry: String,
  siteLength: String,
  family: String,
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String,
  type: String
});
var GeneTermSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var geneOntologySchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  genes: [GeneTermSchema],
  citations: [_general_model.citationsSchema]
});
var multifunSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  genes: [GeneTermSchema]
});
var GOMainSchema = new _mongoose["default"].Schema({
  cellularComponent: [geneOntologySchema],
  molecularFunction: [geneOntologySchema],
  biologicalProcess: [geneOntologySchema]
});
var termsSchema = new _mongoose["default"].Schema({
  multifun: [multifunSchema],
  geneOntology: GOMainSchema
});
var firstGeneSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var regulatedGenesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  "function": String,
  terms: termsSchema
});
var regulatesSchema = new _mongoose["default"].Schema({
  genes: [regulatedGenesSchema],
  transcriptionFactors: [{
    _id: String,
    name: String,
    "function": String,
    genes: [regulatedGenesSchema]
  }],
  transcriptionUnits: [{
    _id: String,
    name: String,
    "function": String,
    firstGene: firstGeneSchema,
    promoter: {
      _id: String,
      name: String
    }
  }],
  operons: [{
    _id: String,
    name: String,
    "function": String,
    firstGene: firstGeneSchema
  }],
  sigmaFactors: [{
    _id: String,
    name: String,
    "function": String,
    gene: firstGeneSchema
  }]
});
var regulatoryBindingSitesSchema = {
  _id: String,
  "function": String,
  absolutePosition: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  strand: String,
  citations: [_general_model.citationsSchema]
};
var regSchema = new _mongoose["default"].Schema({
  _id: String,
  type: String,
  name: String
});
var activeConformationSchema = new _mongoose["default"].Schema({
  _id: String,
  type: String,
  name: String,
  continuants: [regSchema]
});
var regulatoryInteractionsSchema = {
  _id: String,
  activeConformation: activeConformationSchema,
  "function": String,
  regulatedEntity: regSchema,
  distanceToFirstGene: Number,
  distanceToPromoter: Number,
  regulatedGenes: [{
    _id: String,
    name: String,
    leftEndPosition: Number,
    rightEndPosition: Number
  }],
  regulatoryBindingSites: regulatoryBindingSitesSchema,
  citations: [_general_model.citationsSchema],
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
};
var aligmentMatrixSchema = {
  aligment: String,
  matrix: String,
  consensus: String,
  urlPWMLogo: String,
  urlMatrixQualityResult: String
};
var evolutionaryConservationSchema = {
  urlRegulatorTargetGene: String,
  urlPromoterTargetGene: String
};
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
  operons: summaryValuesSchema,
  sigmaFactors: summaryValuesSchema,
  regulatoryInteractions: summaryValuesSchema,
  bindingSites: summaryValuesSchema
});
var regulonSchema = new _mongoose["default"].Schema({
  _id: String,
  regulator: mainRegulatorSchema,
  terms: termsSchema,
  regulates: regulatesSchema,
  regulatoryInteractions: [regulatoryInteractionsSchema],
  aligmentMatrix: [aligmentMatrixSchema],
  evolutionaryConservation: evolutionaryConservationSchema,
  summary: summarySchema,
  organismName: String,
  allCitations: [_general_model.citationsSchema],
  organism: _general_model.organismSchema
});
var Regulon = exports.Regulon = _mongoose["default"].model('regulon_datamarts', regulonSchema, "regulonDatamart");