'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Template = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TemplateSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const Template = _mongoose2.default.model('templateDM', TemplateSchema, 'templateDM');

exports.Template = Template;