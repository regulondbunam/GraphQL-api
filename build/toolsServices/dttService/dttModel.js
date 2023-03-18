'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Data = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const linkedObjectWhenNoPositionsSchema = new _mongoose2.default.Schema({
    _id: String,
    leftEndPosition: Number,
    name: String,
    rightEndPosition: Number,
    strand: String,
    type: String
}); /**
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

const organismSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const dttDataObject = new _mongoose2.default.Schema({
    _id: String,
    objectType: String,
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

const Data = _mongoose2.default.model('dnafeatures', dttDataObject, 'dnaFeatures');

exports.Data = Data;