import mongoose from 'mongoose';
import { citationsSchema } from '../common/general_model';

const transcriptionFactorBindingSitesSchema = new mongoose.Schema({
    transcriptionFactor: {
        _id: String,
        name: String,
        function: String
    },
    regulatoryInteractions: [
        {
            _id: String,
            centerPosition: Number,
            citations: [citationsSchema],
            function: String,
            note: String,
            regulatorySite: {
                _id: String,
                absolutePosition: Number,
                citations: [citationsSchema],
                leftEndPosition: Number,
                length: Number,
                note: String,
                rightEndPosition: Number,
                sequence: String
            },
            mechanism: String
        }
    ],
    function: String
})

const transcriptionUnitStatisticsSchema = new mongoose.Schema({
    genes: Number,
    sites: Number,
    transcriptionFactors: Number
})

const operonStatisticsSchema = new mongoose.Schema({
    transcriptionUnit: Number,
    promoters: Number,
    genes: Number
})

const operonSchema = new mongoose.Schema({
    id: String,
    citations: [citationsSchema],
    name: String,
    regulationPositions: {
        leftEndPosition: Number,
        rightEndPosition: Number
    },
    strand: String,
    statistics: operonStatisticsSchema
});

const promotersSchema = new mongoose.Schema({
    _id: String,
    bindsSigmaFactor: {
        sigmaFactor_id: String,
        citations: [citationsSchema],
        sigmaFactor_name: String
    },
    citations: [citationsSchema],
    name: String,
    note: String,
    boxes: [
        {
            leftEndPosition: String,
            rightEndPosition: String,
            sequence: String,
            type: String
        }
    ],
    sequence: String,
    synonyms: [String],
    transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema],
    transcriptionStartSite: {
        leftEndPosition: String,
        rightEndPosition: String,
        range: Number,
        type: String
    }
});

const transcriptionUnitsSchema = new mongoose.Schema({
    id: String,
    name: String,
    citations: [citationsSchema],
    firstGene: {
        distanceToPromoter: Number,
        gene_id: String,
        gene_name: String
    },
    genes: [
        {
            id: String,
            name: String,
            transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema]
        }
    ],
    note: String,
    synonyms: [String],
    promoter: promotersSchema,
    terminators: [
        {
            id: String,
            citations: [citationsSchema],
            sequence: String,
            transcriptionTerminationSite: {
                leftEndPosition: Number,
                rightEndPosition: Number,
                range: Number,
                type: String
            }
        }
    ],
    transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema],
    statistics: transcriptionUnitStatisticsSchema
});

const operonServiceSchema = new mongoose.Schema({
    _id: String,
    operon: operonSchema,
    transcriptionUnits: [transcriptionUnitsSchema],
    organism: {
        id: String,
        name: String
    },
    allCitations: [citationsSchema],
    schemaVersion: Number
})

const Operon = mongoose.model('operon_datamarts', operonServiceSchema, 'operonDatamart')

export { Operon };