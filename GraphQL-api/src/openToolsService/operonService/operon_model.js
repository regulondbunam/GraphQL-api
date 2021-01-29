import mongoose from 'mongoose';
import { citationsSchema } from '../common/general_model';

const transcriptionFactorBindingSitesSchema = new mongoose.Schema({
    transcriptionFactor: {
        id: String,
        name: String,
        function: String
    },
    regulatoryInteractions: [
        {
            id: String,
            centerPosition: Number,
            citations: [citationsSchema],
            function: String,
            note: String,
            transcriptionFactorRegulatorySite: {
                id: String,
                absolutePosition: Number,
                citations: [citationsSchema],
                leftEndPosition: Number,
                length: Number,
                note: String,
                rightEndPosition: Number,
                sequence: String
            }
        }
    ],
    function: String
})

const operonSchema = new mongoose.Schema({
    id: String,
    citations: [citationsSchema],
    name: String,
    regulationPositions: {
        leftEndPosition: Number,
        rightEndPosition: Number
    },
    strand: String
});

const promotersSchema = new mongoose.Schema({
    id: String,
    citations: [citationsSchema],
    name: String,
    note: String,
    pos1: Number,
    promoterFeatures: [
        {
            id: String,
            bindsSigmaFactor: {
                sigmaFactor_id: String,
                citations: [citationsSchema],
                sigmaFactor_name: String
            },
            boxes: [
                {
                    leftEndPosition: String,
                    rightEndPosition: String,
                    sequence: String,
                    type: String
                }
            ],
            citations: [citationsSchema],
            score: Number  
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
            name: String
        }
    ],
    note: String,
    synonyms: [String],
    promoters: [promotersSchema],
    terminators: [
        {
            id: String,
            citations: [citationsSchema],
            sequence: String,
            transcriptionTerminationSite: {
                leftEndPosition: Number,
                rightEndPosition: Number,
                type: String
            }
        }
    ],
    transcriptionFactorBindingSites: [transcriptionFactorBindingSitesSchema]
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

const Operon = mongoose.model('operon_datamarts', operonServiceSchema, 'operonDatamarts')

export { Operon };