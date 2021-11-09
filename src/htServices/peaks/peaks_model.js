import mongoose from 'mongoose'

const geneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number,
    productName: String
});

const peaksSchema = new mongoose.Schema({
    _id: String, 
    name: String,
    closestGenes: [geneSchema],
    chromosome: String,
    peakLeftPosition: Number,
    peakRightPosition: Number, 
    score: Number,
    siteIds: [String],
    datasetIds: [String],
    temporalID: String
});

const Peaks = mongoose.model('peaks_ht', peaksSchema, 'peaks');

export { Peaks };