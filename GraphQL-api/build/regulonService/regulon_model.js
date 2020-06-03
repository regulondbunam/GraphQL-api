'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Regulon = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const termsSchema = new _mongoose2.default.Schema({
  multifun: {
    id: String,
    name: String,
    genes: [String]
  },
  geneOntology: {
    id: String,
    name: String,
    genes: [String]
  }
});

const firstGeneSchema = new _mongoose2.default.Schema({
  id: String,
  name: String
});

const regulatesSchema = new _mongoose2.default.Schema({
  genes: [{
    id: String,
    name: String,
    function: String,
    terms: [{
      multifun: [String],
      geneOntology: [String]
    }]
  }],
  transcriptionFactors: [{
    id: String,
    name: String,
    function: String
  }],
  transcriptionUnits: [{
    id: String,
    name: String,
    function: String,
    firstGene: firstGeneSchema
  }],
  operons: [{
    id: String,
    name: String,
    function: String,
    firstGene: firstGeneSchema
  }],
  sigmaFactors: [{
    id: String,
    name: String,
    function: String,
    firstGene: firstGeneSchema
  }]
});

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
  sigmaFactors: summaryValuesSchema
});

const regulonSchema = new _mongoose2.default.Schema({
  _id: String,
  transcriptionFactor: {
    name: String
  },
  terms: termsSchema,
  regulates: regulatesSchema,
  summary: summarySchema,
  organismName: String
});

const Regulon = _mongoose2.default.model('regulondatamarts', regulonSchema);

exports.Regulon = Regulon;