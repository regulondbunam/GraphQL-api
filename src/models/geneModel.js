import mongoose from 'mongoose';

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
  externalCrossReferences: [
    {
      id: String,
      name: String,
      url: String,
    },
  ],
  evidenceReferences: [
    {
      evidenceName: String,
      evidenceCode: String,
      evidenceType: String,
      referenceID: String,
      referenceURL: String,
      referenceCitation: String,
    },
  ],
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
  externalCrossReferences: [
    {
      id: String,
      name: String,
      url: String,
    },
  ],
  evidenceReferences: [
    {
      evidenceName: String,
      evidenceCode: String,
      evidenceType: String,
      referenceID: String,
      referenceURL: String,
      referenceCitation: String,
    },
  ],
});

const geneSchema = new mongoose.Schema({
  geneInfo: geneInfoSchema,
  product: productSchema,
  shineDalgarno: [
    {
      distanceToGene: Number,
      leftEndPosition: Number,
      rightEndPosition: Number,
      sequence: String,
      note: String,
    },
  ],
  regulation: {
    operon: {
      id: String,
      name: String,
      arrangement: [
        {
          regulator: {
            id: String,
            name: String,
            type: String,
          },
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
    regulators: [
      {
        id: String,
        name: String,
        type: String,
      },
    ],
    context: [
      {
        type: String,
        name: String,
        leftEndPosition: Number,
        rightEndPosition: Number,
        strand: String,
        note: String,
        evidenceReferences: [
          {
            evidenceName: String,
            evidenceCode: String,
            evidenceType: String,
            referenceID: String,
            referenceURL: String,
            referenceCitation: String,
          },
        ],
      },
    ],
    statistics: {
      regulators: Number,
      regulatoryInteractions: Number,
      promoters: Number,
    },
  },
  growthConditions: [
    {
      controlCondition: String,
      experimentalCondition: String,
      effect: String,
      evidenceReferences: [
        {
          evidenceName: String,
          evidenceCode: String,
          evidenceType: String,
          referenceID: String,
          referenceURL: String,
          referenceCitation: String,
        },
      ],
    },
  ],
  organismName: String,
  schemaVersion: Number,
});

const Gene = mongoose.model('genedatamarts', geneSchema);

export { Gene };
