import mongoose from "mongoose";

const geneMembers = new mongoose.Schema({
    _id: String,
    name: String,
    productName: String
});

const McoTree = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    genes: [geneMembers],
    ontologyId: String,
    subclasses: [String],
    subclassOf: [String]
})

const MCOTree = mongoose.model('mcoTree', McoTree, 'mcoTree')

export {MCOTree};