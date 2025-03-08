"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrases = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var phraseSchema = new _mongoose["default"].Schema({
  phraseId: String,
  phrase: String,
  pmid: String
});
var associatedPropertySchema = new _mongoose["default"].Schema({
  name: String,
  value: String
});
var propertiesSchema = new _mongoose["default"].Schema({
  position: Number,
  associatedProperty: [associatedPropertySchema],
  associatedPhrases: [phraseSchema]
});
var phrasesSchema = new _mongoose["default"].Schema({
  _id: String,
  sourceId: String,
  objectType: String,
  name: String,
  propertyPhrases: [propertiesSchema]
});
var phrases = exports.phrases = _mongoose["default"].model('phrases', phrasesSchema);