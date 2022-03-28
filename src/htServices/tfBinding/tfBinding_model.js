import mongoose from 'mongoose'

const transcriptionUniteSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const gene = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number,
    transcriptionUnits: [transcriptionUniteSchema],
});

const evidenceSchema = new mongoose.Schema({
	id: String,
	name: String,
	code: String,
	type: String
});

export const citationsSchema = new mongoose.Schema({
	evidence: evidenceSchema,
	publication: {
		id: String,
		pmid: String,
		citation: String,
		url: String,
		authors: [ String ],
		title: String,
		year: Number
	}
});

const foundRIsSchema = new mongoose.Schema({
    _id: String,
    tfbsLeftPosition: Number,
    tfbsRightPosition: Number,
    relativeGeneDistance: Number, 
    relativeTSSDistance: Number,
    strand: String,
    sequence: String,
    citations: [citationsSchema],
    origin: String
});

const tfBindingSchema = new mongoose.Schema({
    _id: String,
    chromosome: String,
    chrLeftPosition: Number,
    chrRightPosition: Number,
    closestGenes: [gene],
    foundRIs: [foundRIsSchema],
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