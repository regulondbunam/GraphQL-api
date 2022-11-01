'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GeneExpression = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    bnumber: String,
    leftEndPosition: Number,
    rightEndPosition: Number
});

const geneExpressionSchema = new _mongoose2.default.Schema({
    _id: String,
    datasetIds: [String],
    gene: geneSchema,
    count: Number,
    tpm: Number,
    fpkm: Number,
    temporalId: String
});

const GeneExpression = _mongoose2.default.model('ht_geneExpression', geneExpressionSchema, "geneExpression");

exports.GeneExpression = GeneExpression;