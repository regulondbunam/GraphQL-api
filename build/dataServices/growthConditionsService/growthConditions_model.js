"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrowthCondition = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var growthConditionTermSchema = new _mongoose["default"].Schema({
  _id: String,
  type: String,
  name: String,
  score: {
    type: _mongoose["default"].Schema.Types.Mixed
  },
  nameField: {
    type: String,
    "default": null
  },
  associatedPhrase: {
    type: String,
    "default": null
  }
});
var growthConditionSchema = new _mongoose["default"].Schema({
  _id: {
    type: String,
    required: true,
    match: /^RDM[A-Z]{8}[0-9]{5}$/
  },
  gcPhrase: {
    type: String,
    required: true
  },
  terms: {
    type: [growthConditionTermSchema],
    uniqueItems: true
  },
  citations: {
    type: [_general_model.citationsSchema],
    uniqueItems: true
  },
  summary: {
    type: String,
    "default": null
  }
});
var GrowthCondition = exports.GrowthCondition = _mongoose["default"].model('growth_condition', growthConditionSchema, 'growthCondition');