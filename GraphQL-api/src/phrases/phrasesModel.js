import mongoose from 'mongoose';

const phraseSchema = new mongoose.Schema({
  phraseID: String,
  phrase: String,
  evidence: String,
});

const propertiesSchema = new mongoose.Schema({
  name: String,
  value: String,
  pmid: String,
  phrases: [phraseSchema],
});

const phrasesSchema = new mongoose.Schema({
  objectId: String,
  objectType: String,
  name: String,
  properties: [propertiesSchema],
});

const phrases = mongoose.model('phrases', phrasesSchema);

export {phrases};
