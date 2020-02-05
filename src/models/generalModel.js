import mongoose from 'mongoose';

export const evidenceReferencesSchema = new mongoose.Schema([
  {
    evidenceName: String,
    evidenceCode: String,
    evidenceType: String,
    referenceID: String,
    referenceURL: String,
    referenceCitation: String
  }
]);

export const externalCrossReferencesSchema = new mongoose.Schema([
  {
    id: String,
    name: String,
    url: String
  }
]);
