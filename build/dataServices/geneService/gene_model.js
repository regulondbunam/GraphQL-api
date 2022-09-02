'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Gene = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneOntologyTermsProperties = new _mongoose2.default.Schema({
	citations: [_general_model.citationsSchema],
	id: String,
	name: String,
	productsId: [String]
});

const geneSchema = new _mongoose2.default.Schema({
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
	synonyms: [String],
	multifunTerms: [{
		id: String,
		label: String,
		name: String
	}],
	fragments: [{
		id: String,
		name: String,
		leftEndPosition: Number,
		rightEndPosition: Number,
		sequence: String,
		centisomePosition: Number
	}],
	externalCrossReferences: [_general_model.externalCrossReferencesSchema],
	citations: [_general_model.citationsSchema]
});

const motifsSchema = new _mongoose2.default.Schema({
	id: String,
	dataSource: String,
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	description: String,
	type: String,
	note: String,
	citations: [_general_model.citationsSchema]
});

const productSchema = new _mongoose2.default.Schema({
	id: String,
	regulon_id: String,
	name: String,
	molecularWeight: Number,
	isoelectricPoint: Number,
	cellularLocations: [String],
	anticodon: String,
	note: String,
	type: String,
	sequence: String,
	synonyms: [String],
	isRegulator: Boolean,
	motifs: [motifsSchema],
	geneOntologyTerms: {
		cellularComponent: [geneOntologyTermsProperties],
		molecularFunction: [geneOntologyTermsProperties],
		biologicalProcess: [geneOntologyTermsProperties]
	},
	externalCrossReferences: [_general_model.externalCrossReferencesSchema],
	citations: [_general_model.citationsSchema]
});

const shineDalgarnoSchema = new _mongoose2.default.Schema({
	id: String,
	distanceToGene: Number,
	leftEndPosition: Number,
	rightEndPosition: Number,
	sequence: String,
	note: String
});

const regulatorsSchema = new _mongoose2.default.Schema({
	id: String,
	name: String,
	type: String,
	function: String
});

const regulationSchema = new _mongoose2.default.Schema({
	operon: {
		id: String,
		name: String,
		arrangement: [{
			regulator: [regulatorsSchema],
			promoter: [{
				id: String,
				name: String
			}],
			transcriptionUnit: {
				id: String,
				name: String
			}
		}]
	},
	regulators: [regulatorsSchema],
	statistics: {
		regulators: Number,
		regulatoryInteractions: Number,
		promoters: Number
	}
});

const growthConditionsSchema = new _mongoose2.default.Schema({
	id: String,
	controlCondition: String,
	experimentalCondition: String,
	effect: String,
	citations: [_general_model.citationsSchema]
});

const geneServiceSchema = new _mongoose2.default.Schema({
	_id: String,
	gene: geneSchema,
	products: [productSchema],
	shineDalgarnos: [shineDalgarnoSchema],
	regulation: regulationSchema,
	growthConditions: [growthConditionsSchema],
	organism: [_general_model.organismSchema],
	allCitations: [_general_model.citationsSchema],
	schemaVersion: Number
});

const Gene = _mongoose2.default.model('gene_datamarts', geneServiceSchema, 'geneDatamart');

exports.Gene = Gene;