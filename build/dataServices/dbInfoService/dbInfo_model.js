'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DBInfo = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localDataSchema = new _mongoose2.default.Schema({
    type: String,
    sourceName: String,
    version: String,
    note: String,
    responsible: [String]
});

const dbInfoSchema = new _mongoose2.default.Schema({
    regulonDBVersion: String,
    ecocycVersion: String,
    lcVersion: String,
    releaseDate: String,
    note: String,
    genomeVersion: String,
    localData: [localDataSchema]
});

const DBInfo = _mongoose2.default.model('dbInfo', dbInfoSchema, 'databaseInfo');

exports.DBInfo = DBInfo;