import mongoose from 'mongoose'
import { externalCrossReferencesSchema } from '../common/general_model'

const publicationSchema = new mongoose.Schema({
    pmid: String,
    doi: String,
    authors: [String],
    title: String,
    date: String,
    pmcid: String
});

const simpleItemSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const objectTestedSchema = new mongoose.Schema({
    id: String,
    name: String,
    synonyms: [String],
    gene: simpleItemSchema,
    DBs: simpleItemSchema,
    summary: String,
    activeConformations: [String],
    externalCrossReferences: [externalCrossReferencesSchema]
});

const sourceSerieSchema = new mongoose.Schema({
    sourceID: String,
    sourceName: String,
    title: String,
    platformID: String,
    platformName: String,
    strategy: String,
    method: String
});

const sampleSchema = new mongoose.Schema({
    experiment_id: String,
    control_id: String,
    title: String
});

const linkedDatasetSchema = new mongoose.Schema({
    datasetID: String,
    sampleType: String
});

const peaksSchema = new mongoose.Schema({
    _id: String, 
    closerGene: simpleItemSchema,
    product: simpleItemSchema,
    chromosome: String,
    peakLeftPosition: Number,
    peakRightPosition: Number, 
    score: Number,
    TFBinding_siteIds: [String]
});

const foundRIsSchema = new mongoose.Schema({
    TFBSLeftPosition: Number,
    TFBSRightPosition: Number,
    relativeGeneDistance: Number, 
    relativeTSSDistance: Number,
    strand: String,
    sequence: String
});

const tfBindingSchema = new mongoose.Schema({
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

const releaseDataControlSchema = new mongoose.Schema({
    date: String,
    version: Number
});

const totalOfSchema = new mongoose.Schema({
    inDataset: Number,
    inRDBClassic: Number,
    sharedItems: Number,
    notInRDB: Number,
    notInDataset: Number
});

const summarySchema = new mongoose.Schema({
    totalOfPeaks: totalOfSchema,
    totalOfGenes: totalOfSchema,
    totalOfTFBS: totalOfSchema
});

const htDatasetSchema = new mongoose.Schema({
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

const HTDataset = mongoose.model('ht_dataset_datamarts', htDatasetSchema, 'datasetDatamart');

export { HTDataset };