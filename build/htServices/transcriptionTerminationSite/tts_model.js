'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranscriptionTerminationSite = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PromoterSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    sequence: String,
    leftEndPosition: Number,
    rightEndPosition: String,
    strand: String
});

const TranscriptionUnitSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    promoter: PromoterSchema
});

const TerminatorSchema = new _mongoose2.default.Schema({
    _id: String,
    transcriptionUnits: [TranscriptionUnitSchema]
});

const ClosestGenesSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const TTSSchema = new _mongoose2.default.Schema({
    _id: String,
    chromosome: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    name: String,
    strand: String,
    closestGenes: [ClosestGenesSchema],
    terminator: [TerminatorSchema],
    datasetIds: [String],
    temporalId: String
});

const TranscriptionTerminationSite = new _mongoose2.default.model('ht_transcription_start_site', TTSSchema, 'transcriptionTerminationSite');

exports.TranscriptionTerminationSite = TranscriptionTerminationSite;