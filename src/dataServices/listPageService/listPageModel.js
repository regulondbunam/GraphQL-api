import mongoose from "mongoose";

const summaryValuesSchema = new mongoose.Schema({
    repressed: Number,
    activated: Number,
    dual: Number,
    unknown: Number,
    total: Number,
});
  
const summarySchema = new mongoose.Schema({
    genes: summaryValuesSchema,
    transcriptionFactors: summaryValuesSchema,
    transcriptionUnits: summaryValuesSchema,
    sigmaFactors: summaryValuesSchema,
    regulatoryInteractions: summaryValuesSchema,
    bindingSites: summaryValuesSchema
});

const listPageModel = new mongoose.Schema({
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

const ListPage = mongoose.model('listPage', listPageModel, 'listPage')

export {ListPage};