import mongoose from 'mongoose'
import { citationsSchema, organismSchema } from '../common/general_model';

const sigmulonBasicPropertiesSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const sigmaFactorSchema = new mongoose.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    gene: sigmulonBasicPropertiesSchema,
    sigmulonRegulators: [sigmulonBasicPropertiesSchema],
    sigmulonGenes: [sigmulonBasicPropertiesSchema]
});

const transcribedGenesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    distanceFromTSS: Number
});

const boxesSchema = new mongoose.Schema({
    leftEndPosition: Number,
    rightEndPosition: Number,
    type: String,
    sequence: String
});

const transcribedPromotersSchema = new mongoose.Schema({
    _id: String,
    name: String,
    transcribedGenes: [transcribedGenesSchema],
    operon_id: String,
    sequence: String,
    boxes: [boxesSchema],
    citations: [citationsSchema]
});

const statisticsSchema = new mongoose.Schema({
    genes: Number,
    transcriptionFactors: Number,
    promoters: Number,
    transcriptionUnits: Number,
    cotranscriptionFactors: Number,
    sigmaFactors: Number
});

const SigmulonSchema = new mongoose.Schema({
    _id: String,
    sigmaFactor: sigmaFactorSchema,
    transcribedPromoters: [transcribedPromotersSchema],
    statistics: statisticsSchema,
    allCitations: [citationsSchema],
	organism: [ organismSchema ]
});

const Sigmulon = mongoose.model('sigmulon_datamarts', SigmulonSchema, 'sigmulonDatamart');

export {Sigmulon}