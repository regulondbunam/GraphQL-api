'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TFBinding = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gene = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const transcriptionUniteSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const foundRIsSchema = new _mongoose2.default.Schema({
    tfbsLeftPosition: Number,
    tfbsRightPosition: Number,
    relativeGeneDistance: Number,
    relativeTSSDistance: Number,
    strand: String,
    sequence: String
});

const tfBindingSchema = new _mongoose2.default.Schema({
    _id: String,
    chromosome: String,
    chrLeftPosition: Number,
    chrRightPosition: Number,
    closestGenes: [gene],
    transcriptionUnit: transcriptionUniteSchema,
    foundClassicRIs: [foundRIsSchema],
    foundDatasetRIs: [foundRIsSchema],
    name: String,
    score: Number,
    strand: String,
    sequence: String,
    datasetIds: [String],
    temporalID: String
});

const TFBinding = _mongoose2.default.model('tfBinding_ht', tfBindingSchema, 'tfBinding');

exports.TFBinding = TFBinding;