import mongoose from "mongoose";
import { citationsSchema, externalCrossReferencesSchema, organismSchema } from '../common/general_model';

const geneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    strand: String,
    gcContent: Number
});

const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    gene: geneSchema,
    synonyms: [String],
    sequence: String,
    note: String,
    citations: [citationsSchema],
    externalCrossReferences: [externalCrossReferencesSchema]
});

const RegulatedEntitySchema = new mongoose.Schema({
    _id: String,
    name: String,
    type: String
});

const regulatoryBindingSiteSchema = new mongoose.Schema({
    absolutePosition: Number,
    leftEndPosition: Number,
    rightEndPosition: Number,
    sequence: String,
    function: String
});

const RegulatoryInteractionsSchema = new mongoose.Schema({
    _id: String,
    regulatedEntity: RegulatedEntitySchema,
    mechanism: [String],
    function: String,
    distanceToGene: Number,
    regulatoryBindingSites: regulatoryBindingSiteSchema,
    citations: [citationsSchema]
});

const summaryValuesSchema = new mongoose.Schema({
    repressed: Number,
    activated: Number,
    dual: Number,
    unknown: Number,
    total: Number,
});
  
const summarySchema = new mongoose.Schema({
    genes: summaryValuesSchema,
    transcriptionFactors: summaryValuesSchema,
    transcriptionUnits: summaryValuesSchema,
    sigmaFactors: summaryValuesSchema,
    regulatoryInteractions: summaryValuesSchema,
    bindingSites: summaryValuesSchema
});

const SrnaSchema = new mongoose.Schema({
    _id: String,
    product: productSchema,
    regulatoryInteractions: [RegulatoryInteractionsSchema],
    summary: summarySchema,
    allCitations: [citationsSchema],
	organism: organismSchema 
})

const SRNA = mongoose.model('srna_datamarts', SrnaSchema, 'srnaDatamart')

export {SRNA};