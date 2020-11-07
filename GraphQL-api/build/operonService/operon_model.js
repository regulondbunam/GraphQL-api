"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operon = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require("../common/general_model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transcriptionFactorBindingSitesSchema = new _mongoose2.default.Schema({
  transcriptionFactor: {
    id: String,
    name: String,
    function: String
  },
  regulatoryInteractions: [{
    id: String,
    centerPosition: Number,
    citations: [_general_model.citationsSchema],
    function: String,
    note: String,
    transcriptionFactorRegulatorySite: {
      id: String,
      absolutePosition: Number,
      citations: [_general_model.citationsSchema],
      leftEndPosition: Number,
      length: Number,
      note: String,
      rightEndPosition: Number,
      sequence: String
    }
  }],
  function: String
});
const operonSchema = new _mongoose2.default.Schema({
  id: String,
  citations: [_general_model.citationsSchema],
  name: String,
  regulationPositions: {
    leftEndPosition: Number,
    rightEndPosition: Number
  },
  strand: String
});
const promotersSchema = new _mongoose2.default.Schema({
  id: String,
  citations: [_general_model.citationsSchema],
  name: String,
  note: String,
  pos1: Number,
  promoterFeatures: [{
    id: String,
    bindsSigmaFactor: {
      sigmaFactor_id: String,
      citations: [_general_model.citationsSchema],
      sigmaFactor_name: String
    },
    boxes: [{
      leftEndPosition: String,
      rightEndPosition: String,
      sequence: String,
      type: String
    }],
    citations: [_general_model.citationsSchema],
    score: Number
  }],
  sequence: String,
  synonyms: [String],
  transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema],
  transcriptionStartSite: {
    leftEndPosition: String,
    rightEndPosition: String,
    range: Number,
    type: String
  }
});
const transcriptionUnitsSchema = new _mongoose2.default.Schema({
  id: String,
  name: String,
  citations: [_general_model.citationsSchema],
  firstGene: {
    distanceToPromoter: Number,
    gene_id: String,
    gene_name: String
  },
  gene: [{
    id: String,
    name: String
  }],
  note: String,
  synonyms: [String],
  promoters: [promotersSchema],
  terminators: [{
    id: String,
    citations: [_general_model.citationsSchema],
    sequence: String,
    transcriptionTerminationSite: {
      leftEndPosition: Number,
      rightEndPosition: Number,
      type: String
    }
  }],
  transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema]
});
const operonServiceSchema = new _mongoose2.default.Schema({
  _id: String,
  operon: operonSchema,
  transcriptionUnits: [transcriptionUnitsSchema],
  organism: {
    id: String,
    name: String
  },
  allCitations: [_general_model.citationsSchema],
  schemaVersion: Number
});

const Operon = _mongoose2.default.model('operon_datamarts', operonServiceSchema, 'operonDatamarts');

exports.Operon = Operon;