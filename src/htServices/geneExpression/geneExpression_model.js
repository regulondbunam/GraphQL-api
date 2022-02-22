import mongoose from 'mongoose'

const geneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    bnumber: String,
    leftEndPosition: Number,
    rightEndPosition: Number
});

const geneExpressionSchema = new mongoose.Schema({
    _id: String,
    datasetIds: [String],
    gene: geneSchema,
    count: Number,
    tpm: Number,
    fpkm: Number,
    temporalId: String
});

const GeneExpression = mongoose.model('ht_geneExpression', geneExpressionSchema, "geneExpression");

export { GeneExpression }