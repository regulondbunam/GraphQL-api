import mongoose from 'mongoose';
import { citationsSchema, organismSchema, aditiveEvidencesSchema } from '../common/general_model';

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
  functionalType: String,
  additiveEvidences: [aditiveEvidencesSchema],
  confidenceLevel: String
})

const productsSchema = new mongoose.Schema({
  _id: String,
  name: String
})

const transcriptionFactorSchema = new mongoose.Schema({
  _id: String,
  name: String,
  synonyms: [String],
  note: String,
  conformations: [ConformationsSchema],
  encodedFrom: encodedFromSchema,
  sensingClass: String,
  connectivityClass: String,
  citations: [citationsSchema],
  products: [productsSchema],
  symmetry: String,
  siteLength: String,
  family: String,
  additiveEvidences: [aditiveEvidencesSchema],
  confidenceLevel: String
});

const GeneTermSchema = new mongoose.Schema({
  gene_id: String,
  gene_name: String
})

const geneOntologySchema = new mongoose.Schema({
  term_id: String,
  name: String,
  genes: [GeneTermSchema]
});

const multifunSchema = new mongoose.Schema({
  id: String,
  name: String,
  genes: [GeneTermSchema]
});

const GOMainSchema = new mongoose.Schema({
  cellularComponent: [geneOntologySchema],
  molecularFunction: [geneOntologySchema],
  biologicalProcess: [geneOntologySchema],
});

const termsSchema = new mongoose.Schema({
  multifun: [multifunSchema],
  geneOntology: GOMainSchema,
});

const firstGeneSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const regulatedGenesSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    function: String,
    terms: termsSchema,
  });

const regulatesSchema = new mongoose.Schema({
  genes: [regulatedGenesSchema],
  transcriptionFactors: [
    {
      id: String,
      name: String,
      function: String,
      genes: [regulatedGenesSchema]
    },
  ],
  transcriptionUnits: [
    {
      id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
      promoter: {
        id: String,
        name: String,
      }
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
      gene: firstGeneSchema,
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
});

const regulatorSchema = new mongoose.Schema({
  _id: String,
  type: String,
  name: String,
  continuants: [regSchema]
})

const regulatoryInteractionsSchema = ({
  regulator: regulatorSchema,
  function: String,
  regulatedEntity: regSchema,
  distanceToFirstGene: Number,
  distanceToPromoter: Number,
  regulatedGenes: [{
    id: String,
    name: String
  }],
  regulatoryBindingSites: regulatoryBindingSitesSchema,
  citations: [citationsSchema],
  additiveEvidences: [aditiveEvidencesSchema],
  confidenceLevel: String
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
  allCitations: [citationsSchema],
	organism: [ organismSchema ]
});

const Regulon = mongoose.model('regulon_datamarts', regulonSchema, "regulonDatamart");

export {Regulon};
