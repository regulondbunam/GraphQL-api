import mongoose from 'mongoose';

const evidenceReferencesSchema = new mongoose.Schema({
  evidenceName: String,
  evidenceCode: String,
  evidenceType: String,
  referenceID: String,
  referenceURL: String,
  referenceCitation: String,
});

const externalCrossReferencesSchema = new mongoose.Schema({
  id: String,
  name: String,
  url: String,
});

const geneInfoSchema = new mongoose.Schema({
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
  terms: [
    {
      multifun: [[String]],
      geneOntology: {
        cellularComponent: [
          {
            id: String,
            name: String,
          },
        ],
        molecularFunction: [
          {
            id: String,
            name: String,
          },
        ],
        biologicalProcess: [
          {
            id: String,
            name: String,
          },
        ],
      },
    },
  ],
  externalCrossReferences: [externalCrossReferencesSchema],
  evidenceReferences: [evidenceReferencesSchema],
});

const productSchema = new mongoose.Schema({
  regulatorId: String,
  name: String,
  molecularWeight: Number,
  isoelectricPoint: Number,
  cellularLocation: String,
  anticondon: String,
  note: String,
  type: String,
  sequence: String,
  synonyms: Array,
  motifs: [
    {
      leftEndPosition: Number,
      rightEndPosition: Number,
      sequence: String,
      description: String,
      type: String,
      note: String,
    },
  ],
  externalCrossReferences: [externalCrossReferencesSchema],
  evidenceReferences: [evidenceReferencesSchema],
});

const shineDalgarnoSchema = new mongoose.Schema({
  distanceToGene: Number,
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  note: String,
});

const regulationContextSchema = new mongoose.Schema({
  type: String,
  name: String,
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  note: String,
  evidenceReferences: [evidenceReferencesSchema],
});

const regulationRegulatorSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
});

const regulationSchema = new mongoose.Schema({
  operon: {
    id: String,
    name: String,
    arrangement: [
      {
        regulator: regulationRegulatorSchema,
        promoter: {
          id: String,
          name: String,
        },
        transcriptionUnit: {
          id: String,
          name: String,
        },
      },
    ],
  },
  regulators: [regulationRegulatorSchema],
  context: [regulationContextSchema],
  statistics: {
    regulators: Number,
    regulatoryInteractions: Number,
    promoters: Number,
  },
});

const growthConditionsSchema = new mongoose.Schema({
  controlCondition: String,
  experimentalCondition: String,
  effect: String,
  evidenceReferences: [evidenceReferencesSchema],
});

const geneSchema = new mongoose.Schema({
  geneInfo: geneInfoSchema,
  products: [productSchema],
  shineDalgarno: [shineDalgarnoSchema],
  regulation: regulationSchema,
  growthConditions: [growthConditionsSchema],
  organismName: String,
  schemaVersion: Number,
});

const Gene = mongoose.model('genedatamarts', geneSchema);

export {Gene};
