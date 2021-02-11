'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrases = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const phraseSchema = new _mongoose2.default.Schema({
  phraseID: String,
  phrase: String,
  evidence: String
});

const propertiesSchema = new _mongoose2.default.Schema({
  name: String,
  value: String,
  pmid: String,
  phrases: [phraseSchema]
});

const phrasesSchema = new _mongoose2.default.Schema({
  objectId: String,
  objectType: String,
  name: String,
  properties: [propertiesSchema]
});

const phrases = _mongoose2.default.model('phrases', phrasesSchema);

exports.phrases = phrases;