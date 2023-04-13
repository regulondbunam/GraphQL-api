'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GensorUnit = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneOntologyProperties = new _mongoose2.default.Schema({
    id: String,
    name: String
});

const componentsSchema = new _mongoose2.default.Schema({
    function: String,
    name: String,
    type: String
});

const GUSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    components: [componentsSchema],
    geneOntology: {
        cellularComponent: [geneOntologyProperties],
        molecularFunction: [geneOntologyProperties],
        biologicalProcess: [geneOntologyProperties]
    },
    description: String,
    signalName: [String],
    note: String,
    groups: [String]
});

const ReactionsSchema = new _mongoose2.default.Schema({
    name: String,
    description: String,
    type: String,
    pathwayComponents: String,
    components: [componentsSchema],
    order: Number,
    number: Number
});

const gensorUnitSchema = new _mongoose2.default.Schema({
    _id: String,
    gensorUnit: GUSchema,
    reactions: [ReactionsSchema],
    totalOfComponents: Number
});

const GensorUnit = _mongoose2.default.model('gensorUnits', gensorUnitSchema, 'gensorUnitDatamart');

exports.GensorUnit = GensorUnit;