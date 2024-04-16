"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NLPGrowthConditions = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nlpGCPropertiesSchema = new _mongoose["default"].Schema({
  value: String,
  score: Number,
  associatedPhrase: String,
  nameField: String
});
var additionalPropertiesSchema = new _mongoose["default"].Schema({
  name: String,
  value: [nlpGCPropertiesSchema]
});
var GrowthConditionsSchema = new _mongoose["default"].Schema({
  _id: String,
  organism: [nlpGCPropertiesSchema],
  geneticBackground: [nlpGCPropertiesSchema],
  medium: [nlpGCPropertiesSchema],
  aeration: [nlpGCPropertiesSchema],
  temperature: [nlpGCPropertiesSchema],
  ph: [nlpGCPropertiesSchema],
  pressure: [nlpGCPropertiesSchema],
  opticalDensity: [nlpGCPropertiesSchema],
  growthPhase: [nlpGCPropertiesSchema],
  growthRate: [nlpGCPropertiesSchema],
  vesselType: [nlpGCPropertiesSchema],
  aerationSpeed: [nlpGCPropertiesSchema],
  mediumSupplements: [nlpGCPropertiesSchema],
  additionalProperties: [additionalPropertiesSchema],
  datasetIds: [String],
  temporalId: String
});
var NLPGrowthConditions = exports.NLPGrowthConditions = new _mongoose["default"].model('nlp_growthConditions', GrowthConditionsSchema, 'nlpGrowthConditions');