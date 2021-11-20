'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthorsData = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authorsDataSchema = new _mongoose2.default.Schema({
    _id: String,
    tfBindingAuthorsData: String,
    datasetIds: [String]
});

const AuthorsData = _mongoose2.default.model('auhtorsData_ht', authorsDataSchema, 'authorsData');

exports.AuthorsData = AuthorsData;