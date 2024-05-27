"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.citationsSchema = exports.TFBinding = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var transcriptionUniteSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var gene = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  distanceTo: Number,
  transcriptionUnits: [transcriptionUniteSchema]
});
var evidenceSchema = new _mongoose["default"].Schema({
  id: String,
  name: String,
  code: String,
  type: String
});
var citationsSchema = exports.citationsSchema = new _mongoose["default"].Schema({
  evidence: evidenceSchema,
  publication: {
    id: String,
    pmid: String,
    citation: String,
    url: String,
    authors: [String],
    title: String,
    year: Number
  }
});
var foundRIsSchema = new _mongoose["default"].Schema({
  _id: String,
  tfbsLeftPosition: Number,
  tfbsRightPosition: Number,
  relativeGeneDistance: Number,
  relativeTSSDistance: Number,
  strand: String,
  sequence: String,
  citations: [citationsSchema],
  origin: String
});
var tfBindingSchema = new _mongoose["default"].Schema({
  _id: String,
  chromosome: String,
  chrLeftPosition: Number,
  chrRightPosition: Number,
  closestGenes: [gene],
  foundRIs: [foundRIsSchema],
  peakId: String,
  score: Number,
  strand: String,
  sequence: String,
  datasetIds: [String],
  temporalId: String,
  nameCollection: String
});
var TFBinding = exports.TFBinding = _mongoose["default"].model('tfBinding_ht', tfBindingSchema, 'tfBinding');