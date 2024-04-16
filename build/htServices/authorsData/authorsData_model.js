"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorsData = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var authorsDataSchema = new _mongoose["default"].Schema({
  _id: String,
  authorsData: String,
  datasetIds: [String]
});
var AuthorsData = exports.AuthorsData = _mongoose["default"].model('authorsData_ht', authorsDataSchema, 'authorsData');