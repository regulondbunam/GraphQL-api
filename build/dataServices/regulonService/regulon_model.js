'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Regulon = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tusEncodingRegulatorSchema = new _mongoose2.default.Schema({
  transcriptionUnitName: String,
  promoterName: String
});

const encodedFromGenes = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  leftEndPosition: Number,
  length: Number,
  rightEndPosition: Number
});

const encodedFromOperons = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  tusEncodingRegulator: [tusEncodingRegulatorSchema]
});

const encodedFromSchema = new _mongoose2.default.Schema({
  genes: [encodedFromGenes],
  operon: [encodedFromOperons]
});

const ConformationsSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  type: String,
  effectorInteractionType: String,
  citations: [_general_model.citationsSchema],
  functionalType: String,
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
});

const productsSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String
});

const mainRegulatorSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  synonyms: [String],
  note: String,
  conformations: [ConformationsSchema],
  encodedFrom: encodedFromSchema,
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

const GeneTermSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String
});

const geneOntologySchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  genes: [GeneTermSchema]
});

const multifunSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  genes: [GeneTermSchema]
});

const GOMainSchema = new _mongoose2.default.Schema({
  cellularComponent: [geneOntologySchema],
  molecularFunction: [geneOntologySchema],
  biologicalProcess: [geneOntologySchema]
});

const termsSchema = new _mongoose2.default.Schema({
  multifun: [multifunSchema],
  geneOntology: GOMainSchema
});

const firstGeneSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String
});

const regulatedGenesSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  function: String,
  terms: termsSchema
});

const regulatesSchema = new _mongoose2.default.Schema({
  genes: [regulatedGenesSchema],
  transcriptionFactors: [{
    _id: String,
    name: String,
    function: String,
    genes: [regulatedGenesSchema]
  }],
  transcriptionUnits: [{
    _id: String,
    name: String,
    function: String,
    firstGene: firstGeneSchema,
    promoter: {
      _id: String,
      name: String
    }
  }],
  operons: [{
    _id: String,
    name: String,
    function: String,
    firstGene: firstGeneSchema
  }],
  sigmaFactors: [{
    _id: String,
    name: String,
    function: String,
    gene: firstGeneSchema
  }]
});

const regulatoryBindingSitesSchema = {
  _id: String,
  function: String,
  absolutePosition: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  strand: String,
  citations: [_general_model.citationsSchema]
};

const regSchema = new _mongoose2.default.Schema({
  _id: String,
  type: String,
  name: String
});

const activeConformationSchema = new _mongoose2.default.Schema({
  _id: String,
  type: String,
  name: String,
  continuants: [regSchema]
});

const regulatoryInteractionsSchema = {
  _id: String,
  activeConformation: activeConformationSchema,
  function: String,
  regulatedEntity: regSchema,
  distanceToFirstGene: Number,
  distanceToPromoter: Number,
  regulatedGenes: [{
    _id: String,
    name: String
  }],
  regulatoryBindingSites: regulatoryBindingSitesSchema,
  citations: [_general_model.citationsSchema],
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
};

const aligmentMatrixSchema = {
  aligment: String,
  matrix: String,
  consensus: String,
  urlPWMLogo: String,
  urlMatrixQualityResult: String
};

const evolutionaryConservationSchema = {
  urlRegulatorTargetGene: String,
  urlPromoterTargetGene: String
};

const summaryValuesSchema = new _mongoose2.default.Schema({
  repressed: Number,
  activated: Number,
  dual: Number,
  unknown: Number,
  total: Number
});

const summarySchema = new _mongoose2.default.Schema({
  genes: summaryValuesSchema,
  transcriptionFactors: summaryValuesSchema,
  transcriptionUnits: summaryValuesSchema,
  operons: summaryValuesSchema,
  sigmaFactors: summaryValuesSchema,
  regulatoryInteractions: summaryValuesSchema,
  bindingSites: summaryValuesSchema
});

const regulonSchema = new _mongoose2.default.Schema({
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

const Regulon = _mongoose2.default.model('regulon_datamarts', regulonSchema, "regulonDatamart");

exports.Regulon = Regulon;