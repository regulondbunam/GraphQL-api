'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrases = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const phraseSchema = new _mongoose2.default.Schema({
  phraseId: String,
  phrase: String,
  pmid: String
});

const associatedPropertySchema = new _mongoose2.default.Schema({
  name: String,
  value: String
});

const propertiesSchema = new _mongoose2.default.Schema({
  position: Number,
  associatedProperty: [associatedPropertySchema],
  associatedPhrases: [phraseSchema]
});

const phrasesSchema = new _mongoose2.default.Schema({
  _id: String,
  sourceId: String,
  objectType: String,
  name: String,
  propertyPhrases: [propertiesSchema]
});

const phrases = _mongoose2.default.model('phrases', phrasesSchema);

exports.phrases = phrases;