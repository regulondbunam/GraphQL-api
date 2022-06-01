'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoexpressionData = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const coexpressedGenesSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    locusTag: String
}); /**
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


const coexpressionDataObject = new _mongoose2.default.Schema({
    _id: String,
    gene: [coexpressedGenesSchema],
    rank: Number,
    organism: {
        _id: String,
        name: String
    }
});

const CoexpressionData = _mongoose2.default.model('geneCoexpressions', coexpressionDataObject, 'geneCoexpressions');

exports.CoexpressionData = CoexpressionData;