'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.aditiveEvidencesSchema = exports.organismSchema = exports.externalCrossReferencesSchema = exports.citationsSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const evidenceSchema = new _mongoose2.default.Schema({
	_id: String,
	name: String,
	code: String,
	type: String,
	additiveEvidenceCodeRule: Number
});

const citationsSchema = exports.citationsSchema = new _mongoose2.default.Schema({
	evidence: evidenceSchema,
	publication: {
		_id: String,
		pmid: String,
		citation: String,
		url: String,
		authors: [String],
		title: String,
		year: Number
	}
});

const externalCrossReferencesSchema = exports.externalCrossReferencesSchema = new _mongoose2.default.Schema({
	externalCrossReferenceId: String,
	externalCrossReferenceName: String,
	objectId: String,
	url: String
});

const organismSchema = exports.organismSchema = new _mongoose2.default.Schema({
	_id: String,
	name: String
});

const aditiveEvidencesSchema = exports.aditiveEvidencesSchema = new _mongoose2.default.Schema({
	category: String,
	code: String,
	type: String
});