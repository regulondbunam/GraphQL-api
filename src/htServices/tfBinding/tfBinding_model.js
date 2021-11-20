import mongoose from 'mongoose'

const gene = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const transcriptionUniteSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const foundRIsSchema = new mongoose.Schema({
    tfbsLeftPosition: Number,
    tfbsRightPosition: Number,
    relativeGeneDistance: Number, 
    relativeTSSDistance: Number,
    strand: String,
    sequence: String
});

const tfBindingSchema = new mongoose.Schema({
    _id: String,
    chromosome: String,
    chrLeftPosition: Number,
    chrRightPosition: Number,
    closestGenes: [gene],
    transcriptionUnit: transcriptionUniteSchema,
    foundClassicRIs: [foundRIsSchema],
    foundDatasetRIs: [foundRIsSchema],
    peakId: String,
    score: Number,
    strand: String,
    sequence: String,
    datasetIds: [String],
    temporalId: String,
    nameCollection: String
});

const TFBinding = mongoose.model('tfBinding_ht', tfBindingSchema, 'tfBinding');

export { TFBinding };