"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EvidencesDatamart = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var evidencesDatamartSchema = new _mongoose["default"].Schema({
  _id: {
    type: String,
    required: true,
    match: /^RDB[A-Z0-9_]{5}[A-Z]{3}[0-9A-Z]{5}$/
  },
  category: {
    type: String,
    "default": null
  },
  code: {
    type: String,
    "default": null
  },
  codeRule: {
    type: String,
    "default": null
  },
  name: {
    type: String,
    "default": null
  },
  pertainsTo: {
    type: [String],
    uniqueItems: true
  },
  topParent: {
    type: String,
    "default": null
  },
  type: {
    type: String,
    "default": null
  }
});
var EvidencesDatamart = exports.EvidencesDatamart = _mongoose["default"].model('evidences_datamarts', evidencesDatamartSchema, 'evidencesDatamart');