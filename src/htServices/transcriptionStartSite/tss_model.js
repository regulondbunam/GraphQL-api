import mongoose from 'mongoose';

const closestGenesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const promoterSchema = new mongoose.Schema({
    _id: String,
    name: String,
    strand: String,
    pos1: Number,
    sigma: String,
    confidenceLevel: String
});

const tssSchema = new mongoose.Schema({
    _id: String, 
    chromosome: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    pos_1: Number,
    strand: String,
    closestGenes: [closestGenesSchema],
    promoter: [promoterSchema],
    datasetIds: [String],
    temporalId: String
});

const TranscriptionStartSite = new mongoose.model("ht_transcriptionStartSite", tssSchema, "transcriptionStartSite")

export { TranscriptionStartSite }