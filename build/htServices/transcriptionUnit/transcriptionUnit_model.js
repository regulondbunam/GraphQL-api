"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranscriptionUnit = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var geneSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  bnumber: String
});
var transcriptionUnitSchema = new _mongoose["default"].Schema({
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
var TranscriptionUnit = exports.TranscriptionUnit = _mongoose["default"].model('transcriptionUnits', transcriptionUnitSchema, 'transcriptionUnit');