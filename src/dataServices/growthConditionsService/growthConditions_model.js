import mongoose from 'mongoose';
import { citationsSchema } from '../common/general_model';

const growthConditionTermSchema = new mongoose.Schema({
    _id: String,
    type: String,
    name: String,
    score: { type: mongoose.Schema.Types.Mixed },
    nameField: { type: String, default: null },
    associatedPhrase: { type: String, default: null }
});

const growthConditionSchema = new mongoose.Schema({
    _id: { type: String, required: true, match: /^RDM[A-Z]{8}[0-9]{5}$/ },
    gcPhrase: { type: String, required: true },
    terms: { type: [growthConditionTermSchema], uniqueItems: true },
    citations: { type: [citationsSchema], uniqueItems: true },
    summary: { type: String, default: null }
});

const GrowthCondition = mongoose.model('growth_condition', growthConditionSchema, 'growthCondition');

export { GrowthCondition };