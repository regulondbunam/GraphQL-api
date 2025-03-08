"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranscriptionTerminationSite = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PromoterSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  sequence: String,
  leftEndPosition: Number,
  rightEndPosition: String,
  strand: String
});
var TranscriptionUnitSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  promoter: PromoterSchema
});
var TerminatorSchema = new _mongoose["default"].Schema({
  _id: String,
  transcriptionUnits: [TranscriptionUnitSchema]
});
var ClosestGenesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  distanceTo: Number
});
var TTSSchema = new _mongoose["default"].Schema({
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
var TranscriptionTerminationSite = exports.TranscriptionTerminationSite = new _mongoose["default"].model('ht_transcription_start_site', TTSSchema, 'transcriptionTerminationSite');