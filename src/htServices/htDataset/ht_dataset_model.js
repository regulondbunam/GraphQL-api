import mongoose from 'mongoose'
import { externalCrossReferencesSchema } from '../common/general_model'

const publicationSchema = new mongoose.Schema({
    pmid: Number,
    doi: String,
    authors: [String],
    title: String,
    date: String,
    pmcid: String,
    abstract: String
});

const simpleItemSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const objectTestedSchema = new mongoose.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    genes: [simpleItemSchema],
    note: String,
    activeConformations: [String],
    externalCrossReferences: [externalCrossReferencesSchema]
});

const serieSchema = new mongoose.Schema({
    sourceId: String,
    sourceName: String
});

const platformsSchema = new mongoose.Schema({
    _id: String,
    title: String
});

const sourceSerieSchema = new mongoose.Schema({
    series: [serieSchema],
    platform: platformsSchema,
    title: String,
    strategy: String,
    method: String,
    readType: String,
    sourceDB: String
});

const sampleSchema = new mongoose.Schema({
    experimentId: [String],
    controlId: [String],
    title: String,
    srrId: String
});

const linkedDatasetSchema = new mongoose.Schema({
    controlId: [String],
    experimentId: [String],
    datasetType: String
});

const growthConditionsSchema = new mongoose.Schema({
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

const releaseDataControlSchema = new mongoose.Schema({
    date: String,
    version: String
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

const externalReferencesSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    note: String
})

const htDatasetSchema = new mongoose.Schema({
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

const metadataSchema = new mongoose.Schema({
    _id: String,
    datasetType: String,
    metadataContent: String,
    status: String
})

const HTDataset = mongoose.model('ht_dataset_datamarts', htDatasetSchema, 'dataset');

export { HTDataset };

const MetadataCollection = mongoose.model('dataset_metadata', metadataSchema, "metadata");

export { MetadataCollection };