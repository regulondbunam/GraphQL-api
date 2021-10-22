import mongoose from 'mongoose'

const simpleItemSchema = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const productSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const peaksSchema = new mongoose.Schema({
    _id: String, 
    closestGenes: [simpleItemSchema],
    product: productSchema,
    chromosome: String,
    peakLeftPosition: Number,
    peakRightPosition: Number, 
    score: Number,
    siteIds: [String],
    datasetIds: [String]
});

const Peaks = mongoose.model('peaks_ht', peaksSchema, 'peaks');

export { Peaks };