"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TranscriptionStartSite = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const closestGenesSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const promoterSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    strand: String,
    pos1: Number,
    sigma: String,
    confidenceLevel: String
});

const tssSchema = new _mongoose2.default.Schema({
    _id: String,
    chromosome: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    pos_1: Number,
    strand: String,
    closestGenes: [closestGenesSchema],
    promoter: [promoterSchema],
    datasetIds: [String],
    temporalId: String
});

const TranscriptionStartSite = new _mongoose2.default.model("ht_transcriptionStartSite", tssSchema, "transcriptionStartSite");

exports.TranscriptionStartSite = TranscriptionStartSite;