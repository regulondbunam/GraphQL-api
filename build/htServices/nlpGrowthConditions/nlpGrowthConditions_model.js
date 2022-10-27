'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NLPGrowthConditions = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nlpGCPropertiesSchema = new _mongoose2.default.Schema({
    value: String,
    score: Number,
    associatedPhrase: String,
    nameField: String
});

const additionalPropertiesSchema = new _mongoose2.default.Schema({
    name: String,
    value: [nlpGCPropertiesSchema]
});

const GrowthConditionsSchema = new _mongoose2.default.Schema({
    _id: String,
    organism: [nlpGCPropertiesSchema],
    geneticBackground: [nlpGCPropertiesSchema],
    medium: [nlpGCPropertiesSchema],
    aeration: [nlpGCPropertiesSchema],
    temperature: [nlpGCPropertiesSchema],
    ph: [nlpGCPropertiesSchema],
    pressure: [nlpGCPropertiesSchema],
    opticalDensity: [nlpGCPropertiesSchema],
    growthPhase: [nlpGCPropertiesSchema],
    growthRate: [nlpGCPropertiesSchema],
    vesselType: [nlpGCPropertiesSchema],
    aerationSpeed: [nlpGCPropertiesSchema],
    mediumSupplements: [nlpGCPropertiesSchema],
    additionalProperties: [additionalPropertiesSchema],
    datasetIds: [String],
    temporalId: String
});

const NLPGrowthConditions = new _mongoose2.default.model('nlp_growthConditions', GrowthConditionsSchema, 'nlpGrowthConditions');

exports.NLPGrowthConditions = NLPGrowthConditions;