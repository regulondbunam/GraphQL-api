"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoexpressionData = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 # Coexpression service model

 ## Description
 This model object is used to access to DB of RegulonDB through mongoose

## Usage
```javascript
import {CoexpressionData} from './coexpressionModel';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License 

## Author 

 **/

var coexpressedGenesSchema = new _mongoose["default"].Schema({
  _id: String,
  name: String,
  locusTag: String
});
var coexpressionDataObject = new _mongoose["default"].Schema({
  _id: String,
  gene: [coexpressedGenesSchema],
  rank: Number,
  rgbColor: String,
  organism: {
    _id: String,
    name: String
  }
});
var CoexpressionData = exports.CoexpressionData = _mongoose["default"].model('geneCoexpressions', coexpressionDataObject, 'geneCoexpressions');