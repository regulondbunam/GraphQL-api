'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Operon = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transcriptionFactorBindingSitesSchema = new _mongoose2.default.Schema({
    transcriptionFactor: {
        _id: String,
        name: String,
        function: String
    },
    regulatoryInteractions: [{
        _id: String,
        centerPosition: Number,
        citations: [_general_model.citationsSchema],
        function: String,
        note: String,
        regulatorySite: {
            _id: String,
            absolutePosition: Number,
            citations: [_general_model.citationsSchema],
            leftEndPosition: Number,
            length: Number,
            note: String,
            rightEndPosition: Number,
            sequence: String
        },
        mechanism: String
    }],
    function: String
});

const transcriptionUnitStatisticsSchema = new _mongoose2.default.Schema({
    genes: Number,
    sites: Number,
    transcriptionFactors: Number
});

const operonStatisticsSchema = new _mongoose2.default.Schema({
    transcriptionUnit: Number,
    promoters: Number,
    genes: Number
});

const operonSchema = new _mongoose2.default.Schema({
    id: String,
    citations: [_general_model.citationsSchema],
    name: String,
    regulationPositions: {
        leftEndPosition: Number,
        rightEndPosition: Number
    },
    strand: String,
    statistics: [operonStatisticsSchema]
});

const promotersSchema = new _mongoose2.default.Schema({
    _id: String,
    bindsSigmaFactor: {
        sigmaFactor_id: String,
        citations: [_general_model.citationsSchema],
        sigmaFactor_name: String
    },
    citations: [_general_model.citationsSchema],
    name: String,
    note: String,
    boxes: [{
        leftEndPosition: String,
        rightEndPosition: String,
        sequence: String,
        type: String
    }],
    sequence: String,
    synonyms: [String],
    transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema],
    transcriptionStartSite: {
        leftEndPosition: String,
        rightEndPosition: String,
        range: Number,
        type: String
    }
});

const transcriptionUnitsSchema = new _mongoose2.default.Schema({
    id: String,
    name: String,
    citations: [_general_model.citationsSchema],
    firstGene: {
        distanceToPromoter: Number,
        gene_id: String,
        gene_name: String
    },
    genes: [{
        id: String,
        name: String,
        transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema]
    }],
    note: String,
    synonyms: [String],
    promoter: promotersSchema,
    terminators: [{
        id: String,
        citations: [_general_model.citationsSchema],
        sequence: String,
        transcriptionTerminationSite: {
            leftEndPosition: Number,
            rightEndPosition: Number,
            range: Number,
            type: String
        }
    }],
    transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema],
    statistics: transcriptionUnitStatisticsSchema
});

const operonServiceSchema = new _mongoose2.default.Schema({
    _id: String,
    operon: operonSchema,
    transcriptionUnits: [transcriptionUnitsSchema],
    organism: {
        id: String,
        name: String
    },
    allCitations: [_general_model.citationsSchema],
    schemaVersion: Number
});

const Operon = _mongoose2.default.model('operon_datamarts', operonServiceSchema, 'operonDatamart');

exports.Operon = Operon;