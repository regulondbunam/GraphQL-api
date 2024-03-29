import mongoose from 'mongoose';
import { citationsSchema, organismSchema, aditiveEvidencesSchema} from '../common/general_model';

const RegulatorBindingSitesSchema = new mongoose.Schema({
    regulator: {
        _id: String,
        name: String,
        function: String
    },
    regulatoryInteractions: [
        {
            _id: String,
            relativeCenterPosition: Number,
            citations: [citationsSchema],
            confidenceLevel: String,
            function: String,
            note: String,
            regulatorySite: {
                _id: String,
                centerEndPosition: Number,
                citations: [citationsSchema],
                leftEndPosition: Number,
                length: Number,
                note: String,
                rightEndPosition: Number,
                sequence: String
            },
            mechanism: [String],
            additiveEvidences: [aditiveEvidencesSchema],
        }
    ],
    function: String,
    mechanism: [String]
})

const transcriptionUnitStatisticsSchema = new mongoose.Schema({
    genes: Number,
    sites: Number,
    transcriptionFactors: Number
})

const operonStatisticsSchema = new mongoose.Schema({
    transcriptionUnits: Number,
    promoters: Number,
    genes: Number
})

const operonSchema = new mongoose.Schema({
    _id: String,
    citations: [citationsSchema],
    name: String,
    regulationPositions: {
        leftEndPosition: Number,
        rightEndPosition: Number
    },
    strand: String,
    statistics: operonStatisticsSchema
});

const boxesSchema = new mongoose.Schema({
    leftEndPosition: String,
    rightEndPosition: String,
    sequence: String,
    type: String
});

const tssSchema = new mongoose.Schema({
    leftEndPosition: String,
    rightEndPosition: String,
    range: Number,
    type: String
});

const promotersSchema = new mongoose.Schema({
    _id: String,
    bindsSigmaFactor: {
        _id: String,
        citations: [citationsSchema],
        name: String,
        abbreviatedName: String,
    },
    citations: [citationsSchema],
    name: String,
    note: String,
    boxes: [boxesSchema],
    sequence: String,
    synonyms: [String],
    regulatorBindingSites: [RegulatorBindingSitesSchema],
    transcriptionStartSite: tssSchema,
    additiveEvidences: [aditiveEvidencesSchema],
    confidenceLevel: String
});

const transcriptionTerminationSiteSchema = new mongoose.Schema ({
    leftEndPosition: Number,
    rightEndPosition: Number,
    type: String
});

const transcriptionUnitsSchema = new mongoose.Schema({
    _id: String,
    name: String,
    citations: [citationsSchema],
    firstGene: {
        distanceToPromoter: Number,
        _id: String,
        name: String
    },
    genes: [
        {
            _id: String,
            name: String,
            regulatorBindingSites: [RegulatorBindingSitesSchema]
        }
    ],
    note: String,
    synonyms: [String],
    promoter: promotersSchema,
    terminators: [
        {
            _id: String,
            class: String,
            citations: [citationsSchema],
            sequence: String,
            transcriptionTerminationSite: transcriptionTerminationSiteSchema,
            additiveEvidences: [aditiveEvidencesSchema],
            confidenceLevel: String
        }
    ],
    regulatorBindingSites: [RegulatorBindingSitesSchema],
    statistics: transcriptionUnitStatisticsSchema,
    additiveEvidences: [aditiveEvidencesSchema],
    confidenceLevel: String
});

const operonServiceSchema = new mongoose.Schema({
    _id: String,
    operon: operonSchema,
    transcriptionUnits: [transcriptionUnitsSchema],
    allCitations: [citationsSchema],
    schemaVersion: Number,
	organism: organismSchema
})

const Operon = mongoose.model('operon_datamarts', operonServiceSchema, 'operonDatamart')

export { Operon };