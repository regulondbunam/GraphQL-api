import mongoose from "mongoose";

const OrganismSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    sourceFile: String,
    featureType: String,
    strainName: String,
    pgdbName: String,
    type: String,
    genomeVersion: String,
    genomeSize: Number,
    plasmidName: String
})

const Organism = mongoose.model('organism', OrganismSchema, 'organismsDatamart')

export {Organism};