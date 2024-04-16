"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operon = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RegulatorBindingSitesSchema = new _mongoose["default"].Schema({
  regulator: {
    _id: String,
    name: String,
    "function": String
  },
  regulatoryInteractions: [{
    _id: String,
    relativeCenterPosition: Number,
    citations: [_general_model.citationsSchema],
    confidenceLevel: String,
    "function": String,
    note: String,
    regulatorySite: {
      _id: String,
      centerEndPosition: Number,
      citations: [_general_model.citationsSchema],
      leftEndPosition: Number,
      length: Number,
      note: String,
      rightEndPosition: Number,
      sequence: String
    },
    mechanism: [String],
    additiveEvidences: [_general_model.aditiveEvidencesSchema]
  }],
  "function": String,
  mechanism: [String]
});
var transcriptionUnitStatisticsSchema = new _mongoose["default"].Schema({
  genes: Number,
  sites: Number,
  transcriptionFactors: Number
});
var operonStatisticsSchema = new _mongoose["default"].Schema({
  transcriptionUnits: Number,
  promoters: Number,
  genes: Number
});
var operonSchema = new _mongoose["default"].Schema({
  _id: String,
  citations: [_general_model.citationsSchema],
  name: String,
  regulationPositions: {
    leftEndPosition: Number,
    rightEndPosition: Number
  },
  strand: String,
  statistics: operonStatisticsSchema
});
var boxesSchema = new _mongoose["default"].Schema({
  leftEndPosition: String,
  rightEndPosition: String,
  sequence: String,
  type: String
});
var tssSchema = new _mongoose["default"].Schema({
  leftEndPosition: String,
  rightEndPosition: String,
  range: Number,
  type: String
});
var promotersSchema = new _mongoose["default"].Schema({
  _id: String,
  bindsSigmaFactor: {
    _id: String,
    citations: [_general_model.citationsSchema],
    name: String,
    abbreviatedName: String
  },
  citations: [_general_model.citationsSchema],
  name: String,
  note: String,
  boxes: [boxesSchema],
  sequence: String,
  synonyms: [String],
  regulatorBindingSites: [RegulatorBindingSitesSchema],
  transcriptionStartSite: tssSchema,
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
});
var transcriptionTerminationSiteSchema = new _mongoose["default"].Schema({
  leftEndPosition: Number,
  rightEndPosition: Number,
  type: String
});
var transcriptionUnitsSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  citations: [_general_model.citationsSchema],
  firstGene: {
    distanceToPromoter: Number,
    _id: String,
    name: String
  },
  genes: [{
    _id: String,
    name: String,
    regulatorBindingSites: [RegulatorBindingSitesSchema]
  }],
  note: String,
  synonyms: [String],
  promoter: promotersSchema,
  terminators: [{
    _id: String,
    "class": String,
    citations: [_general_model.citationsSchema],
    sequence: String,
    transcriptionTerminationSite: transcriptionTerminationSiteSchema,
    additiveEvidences: [_general_model.aditiveEvidencesSchema],
    confidenceLevel: String
  }],
  regulatorBindingSites: [RegulatorBindingSitesSchema],
  statistics: transcriptionUnitStatisticsSchema,
  additiveEvidences: [_general_model.aditiveEvidencesSchema],
  confidenceLevel: String
});
var operonServiceSchema = new _mongoose["default"].Schema({
  _id: String,
  operon: operonSchema,
  transcriptionUnits: [transcriptionUnitsSchema],
  allCitations: [_general_model.citationsSchema],
  schemaVersion: Number,
  organism: _general_model.organismSchema
});
var Operon = exports.Operon = _mongoose["default"].model('operon_datamarts', operonServiceSchema, 'operonDatamart');