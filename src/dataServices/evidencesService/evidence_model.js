import mongoose from 'mongoose';

const evidencesDatamartSchema = new mongoose.Schema({
    _id: { type: String, required: true, match: /^RDB[A-Z0-9_]{5}[A-Z]{3}[0-9A-Z]{5}$/ },
    category: { type: String, default: null },
    code: { type: String, default: null },
    codeRule: { type: String, default: null },
    name: { type: String, default: null },
    pertainsTo: { type: [String], uniqueItems: true },
    topParent: { type: String, default: null },
    type: { type: String, default: null }
});

const EvidencesDatamart = mongoose.model('evidences_datamarts', evidencesDatamartSchema, 'evidencesDatamart');

export { EvidencesDatamart };