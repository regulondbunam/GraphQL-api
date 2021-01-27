import mongoose from 'mongoose';
import { citationsSchema } from '../common/general_model';

const externalCrossReferencesSchema = new mongoose.Schema({
	externalCrossReferenceId: String,
	externalCrossReferenceName: String,
	objectId: String,
	url: String
});

const geneOntologyTermsProperties = new mongoose.Schema({
	citations: [ citationsSchema ],
	id: String,
	name: String,
	productsId: [ String ]
});

const geneSchema = new mongoose.Schema({
	bnumber: String,
	id: String,
	name: String,
	leftEndPosition: Number,
	rightEndPosition: Number,
	strand: String,
	sequence: String,
	gcContent: Number,
	centisomePosition: Number,
	note: String,
	type: String,
	synonyms: [ String ],
	multifunTerms: [
		{
			id: String,
			label: String,
			name: String
		}
	],
	externalCrossReferences: [ externalCrossReferencesSchema ],
	citations: [ citationsSchema ]
});

const motifsSchema = new mongoose.Schema({
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	description: String,
	type: String,
	note: String
});

const productSchema = new mongoose.Schema({
	id: String,
	regulon_id: String,
	name: String,
	molecularWeight: Number,
	isoelectricPoint: Number,
	cellularLocations: [ String ],
	anticodon: String,
	note: String,
	type: String,
	sequence: String,
	synonyms: [ String ],
	isRegulator: Boolean,
	motifs: [ motifsSchema ],
	geneOntologyTerms: {
		cellularComponent: [ geneOntologyTermsProperties ],
		molecularFunction: [ geneOntologyTermsProperties ],
		biologicalProcess: [ geneOntologyTermsProperties ]
	},
	externalCrossReferences: [ externalCrossReferencesSchema ],
	citations: [ citationsSchema ]
});

const shineDalgarnoSchema = new mongoose.Schema({
	id: String,
	distanceToGene: Number,
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	note: String
});

const regulatorsSchema = new mongoose.Schema({
	id: String,
	name: String,
	type: String,
	function: String
});

const regulationSchema = new mongoose.Schema({
	operon: {
		id: String,
		name: String,
		arrangement: [
			{
				regulator: [ regulatorsSchema ],
				promoter: [
					{
						id: String,
						name: String
					}
				],
				transcriptionUnit: {
					id: String,
					name: String
				}
			}
		]
	},
	regulators: [ regulatorsSchema ],
	statistics: {
		regulators: Number,
		regulatoryInteractions: Number,
		promoters: Number
	}
});

const growthConditionsSchema = new mongoose.Schema({
	id: String,
	controlCondition: String,
	experimentalCondition: String,
	effect: String,
	citations: [ citationsSchema ]
});

const organismSchema = new mongoose.Schema({
	id: String,
	name: String
});

const geneServiceSchema = new mongoose.Schema({
	_id: String,
	gene: geneSchema,
	products: [ productSchema ],
	shineDalgarnos: [ shineDalgarnoSchema ],
	regulation: regulationSchema,
	growthConditions: [ growthConditionsSchema ],
	organism: [ organismSchema ],
	allCitations: [ citationsSchema ],
	schemaVersion: Number
});

const Gene = mongoose.model('gene_datamarts', geneServiceSchema, 'geneDatamarts');

export { Gene };
