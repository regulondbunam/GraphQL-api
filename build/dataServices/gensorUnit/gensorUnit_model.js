"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GensorUnit = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var geneOntologyProperties = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var componentsSchema = new _mongoose["default"].Schema({
  "function": String,
  name: String,
  type: String
});
var GUSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  components: [componentsSchema],
  geneOntology: {
    cellularComponent: [geneOntologyProperties],
    molecularFunction: [geneOntologyProperties],
    biologicalProcess: [geneOntologyProperties]
  },
  description: String,
  signalName: [String],
  note: String,
  groups: [String]
});
var ReactionsSchema = new _mongoose["default"].Schema({
  name: String,
  description: String,
  type: String,
  pathwayComponents: String,
  components: [componentsSchema],
  order: Number,
  number: Number
});
var gensorUnitSchema = new _mongoose["default"].Schema({
  _id: String,
  gensorUnit: GUSchema,
  reactions: [ReactionsSchema],
  totalOfComponents: Number,
  schemaVersion: String,
  totalOfReactions: Number
});
var GensorUnit = exports.GensorUnit = _mongoose["default"].model('gensorUnits', gensorUnitSchema, 'gensorUnitDatamart');