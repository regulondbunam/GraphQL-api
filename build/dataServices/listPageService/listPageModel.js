'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListPage = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const summaryValuesSchema = new _mongoose2.default.Schema({
    repressed: Number,
    activated: Number,
    dual: Number,
    unknown: Number,
    total: Number
});

const summarySchema = new _mongoose2.default.Schema({
    genes: summaryValuesSchema,
    transcriptionFactors: summaryValuesSchema,
    transcriptionUnits: summaryValuesSchema,
    sigmaFactors: summaryValuesSchema,
    regulatoryInteractions: summaryValuesSchema,
    bindingSites: summaryValuesSchema
});

const listPageModel = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    productsName: [String],
    encodedGenes: [String],
    statistics: {
        genes: Number,
        transcriptionUnits: Number,
        transcriptionFactors: Number,
        sites: Number,
        promoters: Number,
        cotranscriptionFactors: Number,
        sigmaFactors: Number
    },
    sigmulonGeneName: String,
    datamartType: String,
    summary: summarySchema
});

const ListPage = _mongoose2.default.model('listPage', listPageModel, 'listPage');

exports.ListPage = ListPage;