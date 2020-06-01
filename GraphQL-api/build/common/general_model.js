"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.externalCrossReferencesSchema = exports.evidenceReferencesSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const evidenceReferencesSchema = exports.evidenceReferencesSchema = new _mongoose2.default.Schema([{
  evidenceName: String,
  evidenceCode: String,
  evidenceType: String,
  referenceID: String,
  referenceURL: String,
  referenceCitation: String
}]);
const externalCrossReferencesSchema = exports.externalCrossReferencesSchema = new _mongoose2.default.Schema([{
  id: String,
  name: String,
  url: String
}]);