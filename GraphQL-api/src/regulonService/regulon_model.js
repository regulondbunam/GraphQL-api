import mongoose from 'mongoose';

const termsSchema = new mongoose.Schema({
  multifun: {
    id: String,
    name: String,
    genes: [String],
  },
  geneOntology: {
    id: String,
    name: String,
    genes: [String],
  },
});

const firstGeneSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const regulatesSchema = new mongoose.Schema({
  genes: [
    {
      id: String,
      name: String,
      function: String,
      terms: [
        {
          multifun: [String],
          geneOntology: [String],
        },
      ],
    },
  ],
  transcriptionFactors: [
    {
      id: String,
      name: String,
      function: String,
    },
  ],
  transcriptionUnits: [
    {
      id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
    },
  ],
  operons: [
    {
      id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
    },
  ],
  sigmaFactors: [
    {
      id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
    },
  ],
});

const summaryValuesSchema = new mongoose.Schema({
  repressed: Number,
  activated: Number,
  dual: Number,
  unknown: Number,
  total: Number,
});

const summarySchema = new mongoose.Schema({
  genes: summaryValuesSchema,
  transcriptionFactors: summaryValuesSchema,
  transcriptionUnits: summaryValuesSchema,
  operons: summaryValuesSchema,
  sigmaFactors: summaryValuesSchema,
});

const regulonSchema = new mongoose.Schema({
  _id: String,
  transcriptionFactor: {
    name: String,
  },
  terms: termsSchema,
  regulates: regulatesSchema,
  summary: summarySchema,
  organismName: String,
});

const Regulon = mongoose.model('regulondatamarts', regulonSchema);

export {Regulon};
