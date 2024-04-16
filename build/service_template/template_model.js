"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TemplateSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var Template = exports.Template = _mongoose["default"].model('templateDM', TemplateSchema, 'templateDM');