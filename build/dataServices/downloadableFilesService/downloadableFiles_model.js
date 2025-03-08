"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadableFiles = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DownloadableFilesSchema = new _mongoose["default"].Schema({
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
var DownloadableFiles = exports.DownloadableFiles = _mongoose["default"].model('downloadableFilesDatamart', DownloadableFilesSchema, 'downloadableFilesDatamart');