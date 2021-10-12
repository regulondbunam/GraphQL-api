'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTDataset = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const publicationSchema = new _mongoose2.default.Schema({
    pmid: String,
    doi: String,
    authors: [String],
    title: String,
    date: String,
    pmcid: String
});

const simpleItemSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const objectTestedSchema = new _mongoose2.default.Schema({
    id: String,
    name: String,
    synonyms: [String],
    gene: simpleItemSchema,
    DBs: simpleItemSchema,
    summary: String,
    activeConformations: [String],
    externalCrossReferences: [_general_model.externalCrossReferencesSchema]
});

const sourceSerieSchema = new _mongoose2.default.Schema({
    sourceID: String,
    sourceName: String,
    title: String,
    platformID: String,
    platformName: String,
    strategy: String,
    method: String
});

const sampleSchema = new _mongoose2.default.Schema({
    experimentId: String,
    controlId: String,
    title: String
});

const linkedDatasetSchema = new _mongoose2.default.Schema({
    datasetID: String,
    sampleType: String
});

const peaksSchema = new _mongoose2.default.Schema({
    _id: String,
    closerGene: simpleItemSchema,
    product: simpleItemSchema,
    chromosome: String,
    peakLeftPosition: Number,
    peakRightPosition: Number,
    score: Number,
    TFBinding_siteIds: [String]
});

const foundRIsSchema = new _mongoose2.default.Schema({
    TFBSLeftPosition: Number,
    TFBSRightPosition: Number,
    relativeGeneDistance: Number,
    relativeTSSDistance: Number,
    strand: String,
    sequence: String
});

const tfBindingSchema = new _mongoose2.default.Schema({
    site_id: String,
    chromosome: String,
    chrLeftPosition: Number,
    chrRightPosition: Number,
    closerGene: simpleItemSchema,
    transcriptionUnit: simpleItemSchema,
    foundClassicRIs: [foundRIsSchema],
    foundDatasetRIs: [foundRIsSchema],
    name: String,
    score: Number,
    strand: String
});

const releaseDataControlSchema = new _mongoose2.default.Schema({
    date: String,
    version: Number
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

const htDatasetSchema = new _mongoose2.default.Schema({
    datasetID: String,
    publication: publicationSchema,
    objectTested: objectTestedSchema,
    sourceSerie: sourceSerieSchema,
    sample: sampleSchema,
    linkedDataset: [linkedDatasetSchema],
    referenceGenome: String,
    datasetType: String,
    temporalDatasetID: String,
    peaks: [peaksSchema],
    tfBinding: [tfBindingSchema],
    tfBindingAuthorsData: String,
    growthConditions: String,
    releaseDataControl: releaseDataControlSchema,
    summary: summarySchema
});

const HTDataset = _mongoose2.default.model('ht_dataset_datamarts', htDatasetSchema, 'datasetDatamart');

exports.HTDataset = HTDataset;