"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _general_model = require("../../dataServices/common/general_model");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 # Drawing Traces Tool service model

 ## Description
 This model object is used to access to DB of RegulonDB through mongoose

## Usage
```javascript
import {Data} from './dttModel';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB drawing traces tool web service

## License 

## Author 

 **/

var linkedObjectWhenNoPositionsSchema = new _mongoose["default"].Schema({
  _id: String,
  leftEndPosition: Number,
  name: String,
  rightEndPosition: Number,
  strand: String,
  type: String
});
var organismSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String
});
var dttDataObject = new _mongoose["default"].Schema({
  _id: String,
  objectType: String,
  citations: [_general_model.citationsSchema],
  leftEndPosition: Number,
  rightEndPosition: Number,
  strand: String,
  objectRGBColor: String,
  lineWidth: Number,
  lineType: Number,
  labelName: String,
  labelFont: String,
  labelRGBColor: String,
  labelSize: Number,
  tooltip: String,
  lineRGBColor: String,
  organism: organismSchema,
  relatedGenes: [{
    _id: String,
    effect: String,
    objectRGBColor: String,
    strand: String,
    tooltip: String
  }],
  linkedObjectWhenNoPositions: linkedObjectWhenNoPositionsSchema
});
var Data = exports.Data = _mongoose["default"].model('dnafeatures', dttDataObject, 'dnaFeatures');