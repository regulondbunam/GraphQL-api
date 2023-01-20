import mongoose from "mongoose";

const geneOntologyProperties = new mongoose.Schema({
	id: String,
	name: String
});

const componentsSchema = new mongoose.Schema({
    function: String,
    name: String,
    type: String
});

const GUSchema = new mongoose.Schema({
    id: String,
    name: String,
    components: [componentsSchema],
    geneOntology: {
		cellularComponent: [ geneOntologyProperties ],
		molecularFunction: [ geneOntologyProperties ],
		biologicalProcess: [ geneOntologyProperties ]
	},
    description: String,
    signalName: [String],
    note: String,
    groups: [String]
});

const ReactionsSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    pathwayComponents: String,
    components: [componentsSchema],
    order: Number,
    number: Number
});

const gensorUnitSchema = new mongoose.Schema({
    _id: String,
    gensorUnit: GUSchema,
    reactions: [ReactionsSchema],
    totalOfComponents: Number
});

const GensorUnit = mongoose.model('gensorUnits', gensorUnitSchema, 'gensorUnitDatamart')

export {GensorUnit};