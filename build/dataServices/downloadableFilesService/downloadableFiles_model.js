'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DownloadableFiles = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DownloadableFilesSchema = new _mongoose2.default.Schema({
    _id: String,
    title: String,
    fileName: String,
    fileFormat: String,
    license: String,
    citation: String,
    contact: {
        person: String,
        webPage: String,
        email: String
    },
    version: String,
    rdbVersion: String,
    creationDate: String,
    columnsDetails: String,
    content: String,
    description: String,
    group: String
});

const DownloadableFiles = _mongoose2.default.model('downloadableFilesDatamart', DownloadableFilesSchema, 'downloadableFilesDatamart');

exports.DownloadableFiles = DownloadableFiles;