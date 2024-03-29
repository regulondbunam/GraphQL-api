'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataCollection = exports.HTDataset = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const publicationSchema = new _mongoose2.default.Schema({
    pmid: Number,
    doi: String,
    authors: [String],
    title: String,
    date: String,
    pmcid: String,
    abstract: String
});

const simpleItemSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const objectTestedSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    abbreviatedName: String,
    synonyms: [String],
    genes: [simpleItemSchema],
    note: String,
    activeConformations: [String],
    externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});

const serieSchema = new _mongoose2.default.Schema({
    sourceId: String,
    sourceName: String
});

const platformsSchema = new _mongoose2.default.Schema({
    _id: String,
    title: String
});

const sourceSerieSchema = new _mongoose2.default.Schema({
    series: [serieSchema],
    platform: platformsSchema,
    title: String,
    strategy: String,
    method: String,
    readType: String,
    sourceDB: String
});

const sampleSchema = new _mongoose2.default.Schema({
    experimentId: [String],
    controlId: [String],
    title: String,
    srrId: String
});

const linkedDatasetSchema = new _mongoose2.default.Schema({
    controlId: [String],
    experimentId: [String],
    datasetType: String
});

const growthConditionsSchema = new _mongoose2.default.Schema({
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
    aerationSpeed: String,
    mediumSupplements: String,
    otherTerms: [String]
});

const releaseDataControlSchema = new _mongoose2.default.Schema({
    date: String,
    version: String
});

const totalOfSchema = new _mongoose2.default.Schema({
    inDataset: Number,
    inRDBClassic: Number,
    sharedItems: Number,
    notInRDB: Number,
    notInDataset: Number
});

const summarySchema = new _mongoose2.default.Schema({
    totalOfPeaks: totalOfSchema,
    totalOfGenes: totalOfSchema,
    totalOfTFBS: totalOfSchema
});

const externalReferencesSchema = new _mongoose2.default.Schema({
    name: String,
    url: String,
    description: String,
    note: String
});

const htDatasetSchema = new _mongoose2.default.Schema({
    _id: String,
    publications: [publicationSchema],
    objectsTested: [objectTestedSchema],
    sourceSerie: sourceSerieSchema,
    sample: sampleSchema,
    linkedDataset: linkedDatasetSchema,
    referenceGenome: String,
    datasetType: String,
    temporalId: String,
    growthConditions: growthConditionsSchema,
    releaseDataControl: releaseDataControlSchema,
    summary: summarySchema,
    assemblyGenomeId: String,
    fivePrimeEnrichment: String,
    nlpGrowthConditionsId: String,
    geneExpressionFiltered: String,
    experimentCondition: String,
    cutOff: Number,
    notes: String,
    sourceReferenceGenome: String,
    externalReferences: [externalReferencesSchema]
});

const metadataSchema = new _mongoose2.default.Schema({
    _id: String,
    datasetType: String,
    metadataContent: String,
    status: String
});

const HTDataset = _mongoose2.default.model('ht_dataset_datamarts', htDatasetSchema, 'dataset');

exports.HTDataset = HTDataset;


const MetadataCollection = _mongoose2.default.model('dataset_metadata', metadataSchema, "metadata");

exports.MetadataCollection = MetadataCollection;