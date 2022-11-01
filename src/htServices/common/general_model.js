import mongoose from 'mongoose';

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

export const externalCrossReferencesSchema = new mongoose.Schema({
	externalCrossReferenceId: String,
	externalCrossReferenceName: String,
	objectId: String,
	url: String
});