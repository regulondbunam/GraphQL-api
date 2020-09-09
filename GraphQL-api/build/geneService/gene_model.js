"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gene = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const evidenceReferencesSchema = new _mongoose2.default.Schema({
  evidenceId: String,
  evidenceName: String,
  evidenceCode: String,
  evidenceType: String,
  pmid: String,
  publicationId: String,
  referenceURL: String,
  referenceCitation: String
});
const externalCrossReferencesSchema = new _mongoose2.default.Schema({
  externalCrossReferenceid: String,
  externalCrossReferencename: String,
  objectId: String,
  url: String
});
const geneOntologyTermsProperties = new _mongoose2.default.Schema({
  evidenceReferences: [evidenceReferencesSchema],
  id: String,
  name: String,
  productsId: [String]
});
const geneSchema = new _mongoose2.default.Schema({
  id: String,
  name: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  sequence: String,
  gcContent: Number,
  centisomePosition: Number,
  note: String,
  type: String,
  synonyms: [String],
  multifunTerms: [{
    geneIds: [String],
    id: String,
    label: String,
    name: String
  }],
  externalCrossReferences: [externalCrossReferencesSchema],
  evidenceReferences: [evidenceReferencesSchema]
});
const productSchema = new _mongoose2.default.Schema({
  id: String,
  regulon_id: String,
  name: String,
  molecularWeight: Number,
  isoelectricPoint: Number,
  cellularLocations: [String],
  anticodon: String,
  note: String,
  type: String,
  sequence: String,
  synonyms: [String],
  isRegulator: Boolean,
  motifs: [{
    leftEndPosition: Number,
    rightEndPosition: Number,
    sequence: String,
    description: String,
    type: String,
    note: String
  }],
  geneOntologyTerms: {
    cellularComponent: [geneOntologyTermsProperties],
    molecularFunction: [geneOntologyTermsProperties],
    biologicalProcess: [geneOntologyTermsProperties]
  },
  externalCrossReferences: [externalCrossReferencesSchema],
  evidenceReferences: [evidenceReferencesSchema]
});
const shineDalgarnoSchema = new _mongoose2.default.Schema({
  id: String,
  distanceToGene: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  note: String
});
const regulationContextSchema = new _mongoose2.default.Schema({
  id: String,
  type: String,
  name: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  note: String,
  evidenceReferences: [evidenceReferencesSchema]
});
const regulatorsSchema = new _mongoose2.default.Schema({
  id: String,
  name: String,
  type: String,
  function: String
});
const regulationSchema = new _mongoose2.default.Schema({
  operon: {
    id: String,
    name: String,
    arrangement: [{
      regulator: [regulatorsSchema],
      promoter: [{
        id: String,
        name: String
      }],
      transcriptionUnit: {
        id: String,
        name: String
      }
    }]
  },
  regulators: [regulatorsSchema],
  context: [regulationContextSchema],
  statistics: {
    regulators: Number,
    regulatoryInteractions: Number,
    promoters: Number
  }
});
const growthConditionsSchema = new _mongoose2.default.Schema({
  id: String,
  controlCondition: String,
  experimentalCondition: String,
  effect: String,
  evidenceReferences: [evidenceReferencesSchema]
});
const organismSchema = new _mongoose2.default.Schema({
  id: String,
  name: String
});
const geneServiceSchema = new _mongoose2.default.Schema({
  _id: String,
  gene: geneSchema,
  products: [productSchema],
  shineDalgarnos: [shineDalgarnoSchema],
  regulation: regulationSchema,
  growthConditions: [growthConditionsSchema],
  organism: [organismSchema],
  allEvidenceReferences: [evidenceReferencesSchema],
  schemaVersion: Number
});

const Gene = _mongoose2.default.model('gene_datamart_updateds', geneServiceSchema);

exports.Gene = Gene;