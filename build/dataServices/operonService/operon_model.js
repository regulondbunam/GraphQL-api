'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Operon = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RegulatorBindingSitesSchema = new _mongoose2.default.Schema({
    regulator: {
        _id: String,
        name: String,
        function: String
    },
    regulatoryInteractions: [{
        _id: String,
        relativeCenterPosition: Number,
        citations: [_general_model.citationsSchema],
        confidenceLevel: String,
        function: String,
        note: String,
        regulatorySite: {
            _id: String,
            centerEndPosition: Number,
            citations: [_general_model.citationsSchema],
            leftEndPosition: Number,
            length: Number,
            note: String,
            rightEndPosition: Number,
            sequence: String
        },
        mechanism: [String],
        additiveEvidences: [_general_model.aditiveEvidencesSchema]
    }],
    function: String,
    mechanism: [String]
});

const transcriptionUnitStatisticsSchema = new _mongoose2.default.Schema({
    genes: Number,
    sites: Number,
    transcriptionFactors: Number
});

const operonStatisticsSchema = new _mongoose2.default.Schema({
    transcriptionUnits: Number,
    promoters: Number,
    genes: Number
});

const operonSchema = new _mongoose2.default.Schema({
    _id: String,
    citations: [_general_model.citationsSchema],
    name: String,
    regulationPositions: {
        leftEndPosition: Number,
        rightEndPosition: Number
    },
    strand: String,
    statistics: operonStatisticsSchema
});

const boxesSchema = new _mongoose2.default.Schema({
    leftEndPosition: String,
    rightEndPosition: String,
    sequence: String,
    type: String
});

const tssSchema = new _mongoose2.default.Schema({
    leftEndPosition: String,
    rightEndPosition: String,
    range: Number,
    type: String
});

const promotersSchema = new _mongoose2.default.Schema({
    _id: String,
    bindsSigmaFactor: {
        _id: String,
        citations: [_general_model.citationsSchema],
        name: String,
        abbreviatedName: String
    },
    citations: [_general_model.citationsSchema],
    name: String,
    note: String,
    boxes: [boxesSchema],
    sequence: String,
    synonyms: [String],
    regulatorBindingSites: [RegulatorBindingSitesSchema],
    transcriptionStartSite: tssSchema,
    additiveEvidences: [_general_model.aditiveEvidencesSchema],
    confidenceLevel: String
});

const transcriptionTerminationSiteSchema = new _mongoose2.default.Schema({
    leftEndPosition: Number,
    rightEndPosition: Number,
    type: String
});

const transcriptionUnitsSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    citations: [_general_model.citationsSchema],
    firstGene: {
        distanceToPromoter: Number,
        _id: String,
        name: String
    },
    genes: [{
        _id: String,
        name: String,
        regulatorBindingSites: [RegulatorBindingSitesSchema]
    }],
    note: String,
    synonyms: [String],
    promoter: promotersSchema,
    terminators: [{
        _id: String,
        class: String,
        citations: [_general_model.citationsSchema],
        sequence: String,
        transcriptionTerminationSite: transcriptionTerminationSiteSchema,
        additiveEvidences: [_general_model.aditiveEvidencesSchema],
        confidenceLevel: String
    }],
    regulatorBindingSites: [RegulatorBindingSitesSchema],
    statistics: transcriptionUnitStatisticsSchema,
    additiveEvidences: [_general_model.aditiveEvidencesSchema],
    confidenceLevel: String
});

const operonServiceSchema = new _mongoose2.default.Schema({
    _id: String,
    operon: operonSchema,
    transcriptionUnits: [transcriptionUnitsSchema],
    allCitations: [_general_model.citationsSchema],
    schemaVersion: Number,
    organism: _general_model.organismSchema
});

const Operon = _mongoose2.default.model('operon_datamarts', operonServiceSchema, 'operonDatamart');

exports.Operon = Operon;