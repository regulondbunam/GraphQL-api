import mongoose from "mongoose";

const geneMembers = new mongoose.Schema({
    _id: String,
    name: String,
    productName: String
});

const ontologyTreeSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    genes: [geneMembers],
    ontologyId: String,
    subclasses: [String],
    subclassOf: [String]
})

const ontologyTree = mongoose.model('ontologyTree', ontologyTreeSchema, 'mcoTree')

export {ontologyTree};