"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organismSchema = exports.externalCrossReferencesSchema = exports.citationsSchema = exports.aditiveEvidencesSchema = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var evidenceSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  code: String,
  type: String,
  additiveEvidenceCodeRule: Number
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
var organismSchema = exports.organismSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var aditiveEvidencesSchema = exports.aditiveEvidencesSchema = new _mongoose["default"].Schema({
  category: String,
  code: String,
  type: String
});