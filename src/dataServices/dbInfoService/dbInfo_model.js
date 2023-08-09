import mongoose from "mongoose";

const localDataSchema = new mongoose.Schema({
    type: String,
    sourceName: String,
    version: String,
    note: String,
    responsible: [String]
});

const detailedStatisticsSchema = new mongoose.Schema({
    total: Number,
    weak: Number,
    strong: Number,
    confirmed: Number,
    withoutEvidences: Number,
    withwithConfidenceLevel: Number,
    withPublications: Number,
    withEvidences: Number
});

const regulonsSchema = new mongoose.Schema({
    total: Number,
    simpleRegulons: detailedStatisticsSchema,
    complexRegulons: detailedStatisticsSchema
})

const detailedExtReferences = new mongoose.Schema({
    medline: Number,
    genbank: Number,
    swissprot: Number,
    expasy: Number,
    geneprotec: Number,
    ouMicroArray: Number,
    pdb: Number,
    pir: Number
});

const StatisticsSchema = new mongoose.Schema({
    regulons: regulonsSchema,
    operon: detailedStatisticsSchema,
    regulatoryInteractions: detailedStatisticsSchema,
    srnaInteractions: detailedStatisticsSchema,
    functConfTF: detailedStatisticsSchema,
    effectors: detailedStatisticsSchema,
    transcriptionFactors: detailedStatisticsSchema,
    regulatorBindingSites: detailedStatisticsSchema,
    promoters: detailedStatisticsSchema,
    genes: detailedStatisticsSchema,
    transcriptionUnits: detailedStatisticsSchema,
    terminators: detailedStatisticsSchema,
    shineDalgarnos: detailedStatisticsSchema,
    attenuators: detailedStatisticsSchema,
    riboswitches: detailedStatisticsSchema,
    functionalClasses: detailedStatisticsSchema,
    gensorUnits: detailedStatisticsSchema,
    synonyms: detailedStatisticsSchema,
    product: {
        srna: detailedStatisticsSchema,
        rnas: detailedStatisticsSchema,
        polypeptides: detailedStatisticsSchema
    },
    externalReferences: {
        total: Number,
        origin: detailedExtReferences
    }
});

const dbInfoSchema = new mongoose.Schema({
    regulonDBVersion: String,
    ecocycVersion: String,
    lcVersion: String,
    releaseDate: String,
    note: String,
    genomeVersion: String,
    localData: [localDataSchema],
    statistics: StatisticsSchema,
    route: String,
    regulondbPMID: String
});

const DBInfo = mongoose.model('databaseInfo', dbInfoSchema, 'databaseInfo');

export {DBInfo};