'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegulatoryNetwork = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _general_model = require('../../openServices/common/general_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodeSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    type: String,
    regulatoryEffect: String,
    citations: [_general_model.citationsSchema]
});

const regulatoryNetworkSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    type: String,
    outdegree: [nodeSchema],
    indegree: [nodeSchema],
    networkType: String
});

const RegulatoryNetwork = _mongoose2.default.model('regulatory_network_datamarts', regulatoryNetworkSchema, 'regulatoryNetworkDatamart');

exports.RegulatoryNetwork = RegulatoryNetwork;