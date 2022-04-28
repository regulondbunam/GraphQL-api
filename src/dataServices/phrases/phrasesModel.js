import mongoose from 'mongoose';

const phraseSchema = new mongoose.Schema({
  phraseID: String,
  phrase: String,
  pmid: String,
});

const associatedPropertySchema = new mongoose.Schema({
  name: String,
  value: String
});

const propertiesSchema = new mongoose.Schema({
  position: Number,
  associatedProperty: [associatedPropertySchema],
  associatedPhrases: [phraseSchema],
});

const phrasesSchema = new mongoose.Schema({
  _id: String,
  sourceId: String,
  objectType: String,
  name: String,
  propertyPhrases: [propertiesSchema],
});

const phrases = mongoose.model('phrases', phrasesSchema);

export {phrases};
