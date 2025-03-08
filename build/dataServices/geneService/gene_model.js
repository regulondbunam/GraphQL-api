"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gene = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var geneOntologyTermsProperties = new _mongoose["default"].Schema({
  citations: [_general_model.citationsSchema],
  _id: String,
  name: String,
  productsId: [String]
});
var geneSchema = new _mongoose["default"].Schema({
  bnumber: String,
  _id: String,
  name: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  sequence: String,
  gcContent: Number,
  centisomePosition: Number,
  note: String,
  type: String,
  synonyms: [String],
  multifunTerms: [{
    _id: String,
    label: String,
    name: String
  }],
  fragments: [{
    _id: String,
    name: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    sequence: String,
    centisomePosition: Number
  }],
  externalCrossReferences: [_general_model.externalCrossReferencesSchema],
  citations: [_general_model.citationsSchema]
});
var motifsSchema = new _mongoose["default"].Schema({
  _id: String,
  dataSource: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  description: String,
  type: String,
  note: String,
  citations: [_general_model.citationsSchema]
});
var productSchema = new _mongoose["default"].Schema({
  _id: String,
  regulonId: String,
  name: String,
  abbreviatedName: String,
  molecularWeight: Number,
  isoelectricPoint: Number,
  cellularLocations: [String],
  anticodon: String,
  note: String,
  type: String,
  sequence: String,
  synonyms: [String],
  isRegulator: Boolean,
  motifs: [motifsSchema],
  geneOntologyTerms: {
    cellularComponent: [geneOntologyTermsProperties],
    molecularFunction: [geneOntologyTermsProperties],
    biologicalProcess: [geneOntologyTermsProperties]
  },
  externalCrossReferences: [_general_model.externalCrossReferencesSchema],
  citations: [_general_model.citationsSchema]
});
var shineDalgarnoSchema = new _mongoose["default"].Schema({
  _id: String,
  distanceToGene: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  note: String
});
var regulatorsSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  type: String,
  "function": String
});
var regulationSchema = new _mongoose["default"].Schema({
  operon: {
    _id: String,
    name: String,
    arrangement: [{
      regulators: [regulatorsSchema],
      promoters: [{
        _id: String,
        name: String,
        sigmaFactor: {
          _id: String,
          name: String
        }
      }],
      transcriptionUnit: {
        _id: String,
        name: String
      }
    }]
  },
  regulators: [regulatorsSchema],
  statistics: {
    regulators: Number,
    regulatoryInteractions: Number,
    promoters: Number,
    sigmaFactors: Number
  }
});
var growthConditionsSchema = new _mongoose["default"].Schema({
  _id: String,
  controlCondition: String,
  experimentalCondition: String,
  effect: String,
  citations: [_general_model.citationsSchema]
});
var geneServiceSchema = new _mongoose["default"].Schema({
  _id: String,
  gene: geneSchema,
  products: [productSchema],
  shineDalgarnos: [shineDalgarnoSchema],
  regulation: regulationSchema,
  growthConditions: [growthConditionsSchema],
  organism: _general_model.organismSchema,
  allCitations: [_general_model.citationsSchema],
  schemaVersion: Number
});
var Gene = exports.Gene = _mongoose["default"].model('gene_datamarts', geneServiceSchema, 'geneDatamart');