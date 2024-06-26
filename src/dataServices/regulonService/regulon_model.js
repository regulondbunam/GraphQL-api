import mongoose from 'mongoose';
import { citationsSchema, organismSchema, aditiveEvidencesSchema } from '../common/general_model';

const tusEncodingRegulatorSchema = new mongoose.Schema({
  transcriptionUnitName: String, 
  promoterName: String
});

const encodedByGenes = new mongoose.Schema({
  _id: String,
  name: String,
  leftEndPosition: Number,
  length: Number,
  rightEndPosition: Number
})

const encodedByOperons = new mongoose.Schema({
  _id: String,
  name: String,
  tusEncodingRegulator: [tusEncodingRegulatorSchema]
})

const encodedBySchema = new mongoose.Schema({
  genes: [encodedByGenes],
  operon: [encodedByOperons]
});

const ConformationsSchema = new mongoose.Schema({
  _id: String,
  name: String,
  type: String,
  class: String,
  effectorInteractionType: String,
  effector: [{
    _id: String,
    name: String
  }],
  note: String,
  citations: [citationsSchema],
  functionalType: String,
  additiveEvidences: [aditiveEvidencesSchema],
  confidenceLevel: String
})

const productsSchema = new mongoose.Schema({
  _id: String,
  name: String,
	abbreviatedName: String,
})

const mainRegulatorSchema = new mongoose.Schema({
  _id: String,
  name: String,
	abbreviatedName: String,
  synonyms: [String],
  note: String,
  conformations: [ConformationsSchema],
  encodedBy: encodedBySchema,
  sensingClass: String,
  connectivityClass: String,
  citations: [citationsSchema],
  products: [productsSchema],
  symmetry: String,
  siteLength: String,
  family: String,
  additiveEvidences: [aditiveEvidencesSchema],
  confidenceLevel: String,
  type: String
});

const GeneTermSchema = new mongoose.Schema({
  _id: String,
  name: String
})

const geneOntologySchema = new mongoose.Schema({
  _id: String,
  name: String,
  genes: [GeneTermSchema],
  citations: [citationsSchema]
});

const multifunSchema = new mongoose.Schema({
  _id: String,
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
  _id: String,
  name: String,
});

const regulatedGenesSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    function: String,
    terms: termsSchema,
  });

const regulatesSchema = new mongoose.Schema({
  genes: [regulatedGenesSchema],
  transcriptionFactors: [
    {
      _id: String,
      name: String,
      function: String,
      genes: [regulatedGenesSchema]
    },
  ],
  transcriptionUnits: [
    {
      _id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
      promoter: {
        _id: String,
        name: String,
      }
    },
  ],
  operons: [
    {
      _id: String,
      name: String,
      function: String,
      firstGene: firstGeneSchema,
    },
  ],
  sigmaFactors: [
    {
      _id: String,
      name: String,
      function: String,
      gene: firstGeneSchema,
    },
  ],
});

const regulatoryBindingSitesSchema = ({
  _id: String,
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

const activeConformationSchema = new mongoose.Schema({
  _id: String,
  type: String,
  name: String,
  continuants: [regSchema]
})

const regulatoryInteractionsSchema = ({
  _id: String,
  activeConformation: activeConformationSchema,
  function: String,
  regulatedEntity: regSchema,
  distanceToFirstGene: Number,
  distanceToPromoter: Number,
  regulatedGenes: [{
    _id: String,
    name: String,
    leftEndPosition: Number,
    rightEndPosition: Number
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
  regulator: mainRegulatorSchema,
  terms: termsSchema,
  regulates: regulatesSchema,
  regulatoryInteractions: [regulatoryInteractionsSchema],
  aligmentMatrix: [aligmentMatrixSchema],
  evolutionaryConservation: evolutionaryConservationSchema,
  summary: summarySchema,
  organismName: String,
  allCitations: [citationsSchema],
	organism: organismSchema
});

const Regulon = mongoose.model('regulon_datamarts', regulonSchema, "regulonDatamart");

export {Regulon};
