"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organismSchema = exports.externalCrossReferencesSchema = exports.citationsSchema = exports.aditiveEvidencesSchema = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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