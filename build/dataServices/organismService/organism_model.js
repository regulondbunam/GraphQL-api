"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Organism = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var OrganismSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  description: String,
  sourceFile: String,
  featureType: String,
  strainName: String,
  pgdbName: String,
  type: String,
  genomeVersion: String,
  genomeSize: Number,
  plasmidName: String
});
var Organism = exports.Organism = _mongoose["default"].model('organism', OrganismSchema, 'organismsDatamart');