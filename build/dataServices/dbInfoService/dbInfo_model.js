"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBInfo = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var localDataSchema = new _mongoose["default"].Schema({
  type: String,
  sourceName: String,
  version: String,
  note: String,
  responsible: [String]
});
var detailedStatisticsSchema = new _mongoose["default"].Schema({
  total: Number,
  weak: Number,
  strong: Number,
  confirmed: Number,
  withoutEvidences: Number,
  withConfidenceLevel: Number,
  withPublications: Number,
  withEvidences: Number
});
var regulonsSchema = new _mongoose["default"].Schema({
  total: Number,
  regulatoryContinuant: detailedStatisticsSchema,
  srna: detailedStatisticsSchema,
  transcriptionFactor: detailedStatisticsSchema
});
var detailedExtReferences = new _mongoose["default"].Schema({
  gene: Number,
  promoter: Number,
  product: Number,
  regulator: Number,
  regulatoryComplex: Number,
  regulatoryContinuant: Number,
  sigmaFactor: Number,
  terminator: Number,
  transcriptionUnit: Number,
  regulatoryInteraction: Number
});
var detailedExtDBReferences = new _mongoose["default"].Schema({
  ecocyc: Number,
  refseq: Number,
  asap: Number,
  ecoliwiki: Number,
  uniprot: Number,
  others: Number
});
var StatisticsSchema = new _mongoose["default"].Schema({
  regulons: regulonsSchema,
  operon: detailedStatisticsSchema,
  regulatoryInteractions: detailedStatisticsSchema,
  srnaInteractions: detailedStatisticsSchema,
  functConfTF: detailedStatisticsSchema,
  effectors: detailedStatisticsSchema,
  transcriptionFactors: detailedStatisticsSchema,
  regulatorBindingSites: detailedStatisticsSchema,
  promoters: detailedStatisticsSchema,
  genes: detailedStatisticsSchema,
  transcriptionUnits: detailedStatisticsSchema,
  terminators: detailedStatisticsSchema,
  shineDalgarnos: detailedStatisticsSchema,
  attenuators: detailedStatisticsSchema,
  riboswitches: detailedStatisticsSchema,
  functionalClasses: detailedStatisticsSchema,
  gensorUnits: detailedStatisticsSchema,
  synonyms: detailedStatisticsSchema,
  product: {
    total: Number,
    srna: detailedStatisticsSchema,
    rnas: detailedStatisticsSchema,
    polypeptides: detailedStatisticsSchema
  },
  externalReferences: {
    total: Number,
    origin: detailedExtReferences
  },
  externalDBSources: {
    total: Number,
    origin: detailedExtDBReferences
  }
});
var dbInfoSchema = new _mongoose["default"].Schema({
  regulonDBVersion: String,
  ecocycVersion: String,
  lcVersion: String,
  releaseDate: String,
  note: String,
  genomeVersion: String,
  localData: [localDataSchema],
  statistics: StatisticsSchema,
  route: String,
  regulondbPMID: String
});
var DBInfo = exports.DBInfo = _mongoose["default"].model('databaseInfo', dbInfoSchema, 'databaseInfo');