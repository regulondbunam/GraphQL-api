"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListPage = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var summaryValuesSchema = new _mongoose["default"].Schema({
  repressed: Number,
  activated: Number,
  dual: Number,
  unknown: Number,
  total: Number
});
var summarySchema = new _mongoose["default"].Schema({
  genes: summaryValuesSchema,
  transcriptionFactors: summaryValuesSchema,
  transcriptionUnits: summaryValuesSchema,
  sigmaFactors: summaryValuesSchema,
  regulatoryInteractions: summaryValuesSchema,
  bindingSites: summaryValuesSchema
});
var listPageModel = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  synonyms: [String],
  productsName: [String],
  encodedGenes: [String],
  statistics: {
    genes: Number,
    transcriptionUnits: Number,
    transcriptionFactors: Number,
    sites: Number,
    promoters: Number,
    cotranscriptionFactors: Number,
    sigmaFactors: Number
  },
  sigmulonGeneName: String,
  datamartType: String,
  summary: summarySchema
});
var ListPage = exports.ListPage = _mongoose["default"].model('listPage', listPageModel, 'listPage');