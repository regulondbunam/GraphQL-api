import mongoose from 'mongoose';
import { citationsSchema } from '../common/general_model';

const tusEncodingRegulatorSchema = new mongoose.Schema({
  transcriptionUnitName: String, 
  promoterName: String
});

const encodedFromGenes = new mongoose.Schema({
  gene_id: String,
  gene_name: String,
  genomePosition: String,
  length: Number
})

const encodedFromOperons = new mongoose.Schema({
  operon_id: String,
  name: String,
  tusEncodingRegulator: [tusEncodingRegulatorSchema]
})

const encodedFromSchema = new mongoose.Schema({
  genes: [encodedFromGenes],
  operon: [encodedFromOperons]
});

const ConformationsSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  effectorInteractionType: String,
  citations: [citationsSchema],
  functionalType: String
})

const transcriptionFactorSchema = new mongoose.Schema({
  name: String,
  synonyms: [String],
  note: String,
  conformations: [ConformationsSchema],
  encodedFrom: encodedFromSchema,
  sensingClass: String,
  connectivityClass: String,
  citations: [citationsSchema]
});

const GeneTermSchema = new mongoose.Schema({
  gene_id: String,
  gene_name: String
})

const geneOntologySchema = new mongoose.Schema({
  term_id: String,
  name: String,
  genes: [GeneTermSchema]
})

const termsSchema = new mongoose.Schema({
  multifun: [{
    id: String,
    name: String,
    genes: [GeneTermSchema]
  }],
  geneOntology: {
    cellularComponent: [geneOntologySchema],
    molecularFunction: [geneOntologySchema],
    biologicalProcess: [geneOntologySchema],
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
      terms: [termsSchema],
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

const regulatoryBindingSitesSchema = ({
  id: String,
  function: String,
  absolutePosition: Number, 
  leftEndPosition: Number,
  rightEndPosition: Number,
  sequence: String,
  strand: String,
  citations: [citationsSchema]
});

const regSchema = new mongoose.Schema({
  _id: String,
  type: String,
  name: String
})

const regulatoryInteractionsSchema = ({
  regulator: regSchema,
  function: String,
  regulatedEntity: regSchema,
  distanceToFirstGene: Number,
  distanceToPromoter: Number,
  regulatedGenes: [{
    id: String,
    name: String
  }],
  regulatoryBindingSites: regulatoryBindingSitesSchema,
  citations: [citationsSchema]
});

const aligmentMatrixSchema = ({
  aligment: String,
  matrix: String,
  consensus: String,
  urlPWMLogo: String,
  urlMatrixQualityResult: String
});

const evolutionaryConservationSchema = ({
  urlRegulatorTargetGene: String,
  urlPromoterTargetGene: String
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
  regulatoryInteractions: summaryValuesSchema,
  bindingSites: summaryValuesSchema
});

const regulonSchema = new mongoose.Schema({
  _id: String,
  transcriptionFactor: transcriptionFactorSchema,
  terms: termsSchema,
  regulates: regulatesSchema,
  regulatoryInteractions: [regulatoryInteractionsSchema],
  aligmentMatrix: [aligmentMatrixSchema],
  evolutionaryConservation: evolutionaryConservationSchema,
  summary: summarySchema,
  organismName: String,
  allCitations: [citationsSchema]
});

const Regulon = mongoose.model('regulon_datamarts', regulonSchema, "regulonDatamart");

export {Regulon};
