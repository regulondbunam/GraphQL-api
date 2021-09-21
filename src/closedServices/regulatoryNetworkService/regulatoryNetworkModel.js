import mongoose from 'mongoose';
import { citationsSchema } from '../../openServices/common/general_model';

const nodeSchema = new mongoose.Schema({
    _id: String,
    name: String,
    type: String,
    regulatoryEffect: String,
    citations: [citationsSchema],
    networkType: String,
    tooltip: String
});

const regulatoryNetworkSchema = new mongoose.Schema({
    _id: String,
    name: String,
    type: String,
    outdegree: [nodeSchema],
    indegree: [nodeSchema]
});

const RegulatoryNetwork = mongoose.model('regulatory_network_datamarts', regulatoryNetworkSchema, 'regulatoryNetworkDatamart');

export {RegulatoryNetwork}