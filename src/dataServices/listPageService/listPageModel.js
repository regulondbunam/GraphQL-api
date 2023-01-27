import mongoose from "mongoose";

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
    datamartType: String
})

const ListPage = mongoose.model('listPage', listPageModel, 'listPage')

export {ListPage};