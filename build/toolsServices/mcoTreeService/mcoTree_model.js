'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MCOTree = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const geneMembers = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    productName: String
});

const McoTree = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    description: String,
    genes: [geneMembers],
    ontologyId: String,
    subclasses: [String],
    subclassOf: [String]
});

const MCOTree = _mongoose2.default.model('mcoTree', McoTree, 'mcoTree');

exports.MCOTree = MCOTree;