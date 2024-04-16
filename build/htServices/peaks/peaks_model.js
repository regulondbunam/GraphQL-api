"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Peaks = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var geneSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  distanceTo: Number,
  productName: [String]
});
var peaksSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  closestGenes: [geneSchema],
  chromosome: String,
  peakLeftPosition: Number,
  peakRightPosition: Number,
  score: Number,
  siteIds: [String],
  datasetIds: [String],
  temporalId: String
});
var Peaks = exports.Peaks = _mongoose["default"].model('peaks_ht', peaksSchema, 'peaks');