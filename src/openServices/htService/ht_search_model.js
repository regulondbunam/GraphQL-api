import mongoose from "mongoose";
import { citationsSchema, externalCrossReferencesSchema } from '../common/general_model';

const TermsSchema = new mongoose.Schema({
    _id: String,
    description: String,
    citations: [citationsSchema],
    has: String,
    isA: String,
    name: String,
    order: Number,
    synonyms: [String],
    url: String, 
    externalCrossReferences: [externalCrossReferencesSchema]
});

const growthConditionsPhrasesCatalogSchema = new mongoose.Schema({
    _id: String,
    description: String,
    name: String,
    terms: [TermsSchema]
});

const SeriesSchema = new mongoose.Schema({
    _id: String,
    authors: [String],
    laboratory: String, 
    email: String,
    correspondingAuthor: String,
    organism: String, 
    externalCrossReferences: [externalCrossReferencesSchema],
    title: String, 
    experimentType: String,
    summary: String,
    citations: [citationsSchema]
});

const PlatformsSchema = new mongoose.Schema({
    _id: String,
    description: String,
    externalCrossReferences: [externalCrossReferencesSchema],
    title: String,
    sourcedbld: String
});

const SamplesSchema = new mongoose.Schema({
    _id: String,
    growthConditionsPhrasesCatalog: growthConditionsPhrasesCatalogSchema,
    series: SeriesSchema,
    platforms: PlatformsSchema,
    runID: String,
    sourcedbld: String,
    instrument: String,
    methodDetails: String,
    note: String,
    alignedOrganism: String,
    sampleType: String,
    description: String,
    title: String,
    sourceName: String,
    citations: [citationsSchema]
})

const HT_Samples = mongoose.model('samplesdatamart', SamplesSchema, 'samplesdatamarts')

export {HT_Samples};