import mongoose from 'mongoose'

const geneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    synonyms: [String],
    bnumber: String
});

const geneExpressionSchema = new mongoose.Schema({
    _id: String,
    datasetIds: [String],
    gene: geneSchema,
    count: String,
    tpm: String,
    fpkm: String,
    temporalId: String
});

const GeneExpression = mongoose.model('ht_geneExpression', geneExpressionSchema, "geneExpression");

export { GeneExpression }