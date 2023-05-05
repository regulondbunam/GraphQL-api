'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBInfo = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localDataSchema = new _mongoose2.default.Schema({
    type: String,
    sourceName: String,
    version: String,
    note: String,
    responsible: [String]
});

const detailedStatisticsSchema = new _mongoose2.default.Schema({
    total: Number,
    weak: Number,
    strong: Number,
    confirmed: Number,
    withoutEvidences: Number
});

const regulonsSchema = new _mongoose2.default.Schema({
    total: Number,
    simpleRegulons: detailedStatisticsSchema,
    complexRegulons: detailedStatisticsSchema
});

const detailedExtReferences = new _mongoose2.default.Schema({
    medline: Number,
    genbank: Number,
    swissprot: Number,
    expasy: Number,
    geneprotec: Number,
    ouMicroArray: Number,
    pdb: Number,
    pir: Number
});

const StatisticsSchema = new _mongoose2.default.Schema({
    regulons: regulonsSchema,
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
    product: {
        srna: detailedStatisticsSchema,
        rnas: detailedStatisticsSchema,
        polypeptides: detailedStatisticsSchema
    },
    synonyms: detailedStatisticsSchema,
    functionalClasses: detailedStatisticsSchema,
    gensorUnits: detailedStatisticsSchema,
    externalReferences: {
        total: Number,
        origin: detailedExtReferences
    }
});

const dbInfoSchema = new _mongoose2.default.Schema({
    regulonDBVersion: String,
    ecocycVersion: String,
    lcVersion: String,
    releaseDate: String,
    note: String,
    genomeVersion: String,
    localData: [localDataSchema],
    statistics: StatisticsSchema
});

const DBInfo = _mongoose2.default.model('dbInfoTest', dbInfoSchema, 'dbInfoTest');

exports.DBInfo = DBInfo;