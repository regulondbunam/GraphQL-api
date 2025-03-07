"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetadataCollection = exports.HTDataset = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../common/general_model");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var publicationSchema = new _mongoose["default"].Schema({
  pmid: Number,
  doi: String,
  authors: [String],
  title: String,
  date: String,
  pmcid: String,
  "abstract": String
});
var simpleItemSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var objectTestedSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  abbreviatedName: String,
  synonyms: [String],
  genes: [simpleItemSchema],
  note: String,
  activeConformations: [String],
  externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});
var serieSchema = new _mongoose["default"].Schema({
  sourceId: String,
  sourceName: String
});
var platformsSchema = new _mongoose["default"].Schema({
  _id: String,
  title: String
});
var sourceSerieSchema = new _mongoose["default"].Schema({
  series: [serieSchema],
  platform: platformsSchema,
  title: String,
  strategy: String,
  method: String,
  readType: String,
  sourceDB: String
});
var sampleSchema = new _mongoose["default"].Schema({
  experimentId: [String],
  controlId: [String],
  title: String,
  srrId: String
});
var linkedDatasetSchema = new _mongoose["default"].Schema({
  controlId: [String],
  experimentId: [String],
  datasetType: String
});
var growthConditionsSchema = new _mongoose["default"].Schema({
  organism: String,
  geneticBackground: String,
  medium: String,
  aeration: String,
  temperature: String,
  ph: String,
  pressure: String,
  opticalDensity: String,
  growthPhase: String,
  growthRate: String,
  vesselType: String,
  agitationSpeed: String,
  mediumSupplements: String,
  otherTerms: [String]
});
var releaseDataControlSchema = new _mongoose["default"].Schema({
  date: String,
  version: String
});
var totalOfSchema = new _mongoose["default"].Schema({
  inDataset: Number,
  inRDBClassic: Number,
  sharedItems: Number,
  notInRDB: Number,
  notInDataset: Number
});
var summarySchema = new _mongoose["default"].Schema({
  totalOfPeaks: totalOfSchema,
  totalOfGenes: totalOfSchema,
  totalOfTFBS: totalOfSchema
});
var externalReferencesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  url: String,
  description: String,
  note: String
});
var CollectionDataSchema = new _mongoose["default"].Schema({
  source: String,
  type: String
});
var htDatasetSchema = new _mongoose["default"].Schema({
  _id: String,
  publications: [publicationSchema],
  objectsTested: [objectTestedSchema],
  sourceSerie: sourceSerieSchema,
  sample: sampleSchema,
  linkedDataset: linkedDatasetSchema,
  growthConditions: [growthConditionsSchema],
  summary: summarySchema,
  releaseDataControl: releaseDataControlSchema,
  externalReferences: [externalReferencesSchema],
  collectionData: CollectionDataSchema,
  referenceGenome: String,
  temporalId: String,
  assemblyGenomeId: String,
  fivePrimeEnrichment: String,
  geneExpressionFiltered: String,
  experimentCondition: String,
  cutOff: Number,
  notes: String,
  nlpGrowthConditionsId: String,
  sourceReferenceGenome: String
});
var metadataSchema = new _mongoose["default"].Schema({
  _id: String,
  datasetType: String,
  source: String,
  metadataContent: String,
  status: String,
  releaseDate: String,
  reference: [String]
});
var HTDataset = exports.HTDataset = _mongoose["default"].model('ht_dataset_datamarts', htDatasetSchema, 'dataset');
var MetadataCollection = exports.MetadataCollection = _mongoose["default"].model('dataset_metadata', metadataSchema, "metadata");