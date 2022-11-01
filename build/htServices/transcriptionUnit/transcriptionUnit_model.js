'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranscriptionUnit = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    bnumber: String
});

const transcriptionUnitSchema = new _mongoose2.default.Schema({
    _id: String,
    chromosome: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    name: String,
    strand: String,
    length: Number,
    termType: String,
    genes: [geneSchema],
    phantom: Number,
    pseudo: Number,
    datasetIds: [String],
    temporalId: String
});

const TranscriptionUnit = _mongoose2.default.model('transcriptionUnits', transcriptionUnitSchema, 'transcriptionUnit');

exports.TranscriptionUnit = TranscriptionUnit;