import mongoose from 'mongoose';

const nlpGCPropertiesSchema = new mongoose.Schema({
    value: String,
    score: Number,
    associatedPhrase: String,
    nameField: String
});

const additionalPropertiesSchema = new mongoose.Schema({
    name: String,
    value: [nlpGCPropertiesSchema]
}); 

const GrowthConditionsSchema = new mongoose.Schema({
    _id: String,
    organism: [nlpGCPropertiesSchema],
    geneticBackground: [nlpGCPropertiesSchema],
    medium: [nlpGCPropertiesSchema],
    aeration: [nlpGCPropertiesSchema],
    temperature: [nlpGCPropertiesSchema],
    ph: [nlpGCPropertiesSchema],
    pressure: [nlpGCPropertiesSchema],
    opticalDensity: [nlpGCPropertiesSchema],
    growthPhase: [nlpGCPropertiesSchema],
    growthRate: [nlpGCPropertiesSchema],
    vesselType: [nlpGCPropertiesSchema],
    aerationSpeed: [nlpGCPropertiesSchema],
    mediumSupplements: [nlpGCPropertiesSchema],
    additionalProperties: [additionalPropertiesSchema],
    datasetIds: [String],
    temporalId: String
});

const NLPGrowthConditions = new mongoose.model('nlp_growthConditions', GrowthConditionsSchema, 'nlpGrowthConditions');

export { NLPGrowthConditions }