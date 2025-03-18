"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranscriptionStartSite = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var closestGenesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  distanceTo: Number
});
var promoterSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  strand: String,
  pos1: Number,
  sigma: String,
  confidenceLevel: String
});
var tssSchema = new _mongoose["default"].Schema({
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
var TranscriptionStartSite = exports.TranscriptionStartSite = new _mongoose["default"].model("ht_transcriptionStartSite", tssSchema, "transcriptionStartSite");