'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sigmulon = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sigmulonBasicPropertiesSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const geneOntologyTermsProperties = new _mongoose2.default.Schema({
    citations: [_general_model.citationsSchema],
    _id: String,
    name: String,
    productsId: [String]
});

const sigmulonGenes = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    geneOntologyTerms: {
        cellularComponent: [geneOntologyTermsProperties],
        molecularFunction: [geneOntologyTermsProperties],
        biologicalProcess: [geneOntologyTermsProperties]
    }
});

const sigmaFactorSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    gene: sigmulonBasicPropertiesSchema,
    sigmulonRegulators: [sigmulonBasicPropertiesSchema],
    sigmulonGenes: [sigmulonGenes]
});

const transcribedGenesSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceFromTSS: Number
});

const boxesSchema = new _mongoose2.default.Schema({
    leftEndPosition: Number,
    rightEndPosition: Number,
    type: String,
    sequence: String
});

const transcribedPromotersSchema = new _mongoose2.default.Schema({
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

const statisticsSchema = new _mongoose2.default.Schema({
    genes: Number,
    transcriptionFactors: Number,
    promoters: Number,
    transcriptionUnits: Number,
    cotranscriptionFactors: Number,
    sigmaFactors: Number
});

const SigmulonSchema = new _mongoose2.default.Schema({
    _id: String,
    sigmaFactor: sigmaFactorSchema,
    transcribedPromoters: [transcribedPromotersSchema],
    statistics: statisticsSchema,
    allCitations: [_general_model.citationsSchema],
    organism: _general_model.organismSchema
});

const Sigmulon = _mongoose2.default.model('sigmulon_datamarts', SigmulonSchema, 'sigmulonDatamart');

exports.Sigmulon = Sigmulon;