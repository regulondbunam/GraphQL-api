'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GeneExpressions = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneExpressionsSchema = new _mongoose2.default.Schema({
    _id: String,
    sample_id: String,
    gene_id: String,
    gene_name: String,
    count: Number,
    TPM: Number,
    RPKM: Number,
    normalized: Number,
    bnumber: Number
});

const geneExpressions = _mongoose2.default.model('geneExpressionsDatamarts', geneExpressionsSchema, 'geneExpressionsDatamart');

exports.GeneExpressions = GeneExpressions;