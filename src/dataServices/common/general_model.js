import mongoose, { mongo } from 'mongoose';

const evidenceSchema = new mongoose.Schema({
	id: String,
	name: String,
	code: String,
	type: String,
	additiveEvidenceCodeRule: Number
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

export const organismSchema = new mongoose.Schema({
	id: String,
	name: String
});

export const aditiveEvidencesSchema = new mongoose.Schema({
	category: String,
	code: String,
	type: String
});