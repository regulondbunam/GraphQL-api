'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SRNA = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    strand: String,
    gcContent: Number
});

const productSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    gene: geneSchema,
    synonyms: [String],
    sequence: String,
    note: String,
    citations: [_general_model.citationsSchema],
    externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});

const RegulatedEntitySchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    type: String
});

const regulatoryBindingSiteSchema = new _mongoose2.default.Schema({
    absolutePosition: Number,
    leftEndPosition: Number,
    rightEndPosition: Number,
    sequence: String,
    function: String
});

const RegulatoryInteractionsSchema = new _mongoose2.default.Schema({
    _id: String,
    regulatedEntity: RegulatedEntitySchema,
    mechanism: [String],
    function: String,
    distanceToGene: Number,
    regulatoryBindingSites: regulatoryBindingSiteSchema,
    citations: [_general_model.citationsSchema]
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
    sigmaFactors: summaryValuesSchema,
    regulatoryInteractions: summaryValuesSchema,
    bindingSites: summaryValuesSchema
});

const SrnaSchema = new _mongoose2.default.Schema({
    _id: String,
    product: productSchema,
    regulatoryInteractions: [RegulatoryInteractionsSchema],
    summary: summarySchema,
    allCitations: [_general_model.citationsSchema],
    organism: _general_model.organismSchema
});

const SRNA = _mongoose2.default.model('srna_datamarts', SrnaSchema, 'srnaDatamart');

exports.SRNA = SRNA;