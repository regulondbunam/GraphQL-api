'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Peaks = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceTo: Number,
    productName: String
});

const peaksSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    closestGenes: [geneSchema],
    chromosome: String,
    peakLeftPosition: Number,
    peakRightPosition: Number,
    score: Number,
    siteIds: [String],
    datasetIds: [String],
    temporalID: String
});

const Peaks = _mongoose2.default.model('peaks_ht', peaksSchema, 'peaks');

exports.Peaks = Peaks;