"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.externalCrossReferencesSchema = exports.citationsSchema = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var evidenceSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  code: String,
  type: String
});
var citationsSchema = exports.citationsSchema = new _mongoose["default"].Schema({
  evidence: evidenceSchema,
  publication: {
    _id: String,
    pmid: String,
    citation: String,
    url: String,
    authors: [String],
    title: String,
    year: Number
  }
});
var externalCrossReferencesSchema = exports.externalCrossReferencesSchema = new _mongoose["default"].Schema({
  externalCrossReferenceId: String,
  externalCrossReferenceName: String,
  objectId: String,
  url: String
});