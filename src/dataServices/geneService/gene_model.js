import mongoose from 'mongoose';
import { citationsSchema, externalCrossReferencesSchema, organismSchema } from '../common/general_model';

const geneOntologyTermsProperties = new mongoose.Schema({
	citations: [ citationsSchema ],
	_id: String,
	name: String,
	productsId: [ String ]
});

const geneSchema = new mongoose.Schema({
	bnumber: String,
	_id: String,
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
			_id: String,
			label: String,
			name: String
		}
	],
	fragments:[
		{
			_id: String,
			name: String,
			leftEndPosition: Number,
			rightEndPosition: Number,
			sequence: String,
			centisomePosition: Number
		}
	],
	externalCrossReferences: [ externalCrossReferencesSchema ],
	citations: [ citationsSchema ]
});

const motifsSchema = new mongoose.Schema({
	_id: String,
	dataSource: String,
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	description: String,
	type: String,
	note: String,
	citations: [citationsSchema]
});

const productSchema = new mongoose.Schema({
	_id: String,
	regulonId: String,
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
	_id: String,
	distanceToGene: Number,
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	note: String
});

const regulatorsSchema = new mongoose.Schema({
	_id: String,
	name: String,
	type: String,
	function: String
});

const regulationSchema = new mongoose.Schema({
	operon: {
		_id: String,
		name: String,
		arrangement: [
			{
				regulators: [ regulatorsSchema ],
				promoters: [
					{
						_id: String,
						name: String
					}
				],
				transcriptionUnit: {
					_id: String,
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
	_id: String,
	controlCondition: String,
	experimentalCondition: String,
	effect: String,
	citations: [ citationsSchema ]
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

const Gene = mongoose.model('gene_datamarts', geneServiceSchema, 'geneDatamart');

export { Gene };
