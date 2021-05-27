'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HT_Samples = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TermsSchema = new _mongoose2.default.Schema({
    _id: String,
    description: String,
    citations: [_general_model.citationsSchema],
    has: String,
    isA: String,
    name: String,
    order: Number,
    synonyms: [String],
    url: String,
    externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});

const growthConditionsPhrasesCatalogSchema = new _mongoose2.default.Schema({
    _id: String,
    description: String,
    name: String,
    terms: [TermsSchema]
});

const SeriesSchema = new _mongoose2.default.Schema({
    _id: String,
    authors: [String],
    laboratory: String,
    email: String,
    correspondingAuthor: String,
    organism: String,
    externalCrossReferences: [_general_model.externalCrossReferencesSchema],
    title: String,
    experimentType: String,
    summary: String,
    citations: [_general_model.citationsSchema]
});

const PlatformsSchema = new _mongoose2.default.Schema({
    _id: String,
    description: String,
    externalCrossReferences: [_general_model.externalCrossReferencesSchema],
    title: String,
    sourcedbld: String
});

const SamplesSchema = new _mongoose2.default.Schema({
    _id: String,
    growthConditionsPhrasesCatalog: growthConditionsPhrasesCatalogSchema,
    series: SeriesSchema,
    platforms: PlatformsSchema,
    runID: String,
    sourcedbld: String,
    instrument: String,
    methodDetails: String,
    note: String,
    alignedOrganism: String,
    sampleType: String,
    description: String,
    title: String,
    sourceName: String,
    citations: [_general_model.citationsSchema]
});

const HT_Samples = _mongoose2.default.model('htSamplesDatamart', SamplesSchema, 'htSamplesDatamart');

exports.HT_Samples = HT_Samples;