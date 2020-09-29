'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Example = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exampleSchema = new _mongoose2.default.Schema({
	message: String,
	user: String
}); /**
    # name: exampleModel.js version: 1.0
    
    ## synopsis
    
    ```javascript
    
    import { Example } from './exampleModel'
    
    ```
    
    ## description
    model object to access to DB of RegulonDB through mongoose
    
    ## arguments
    NA
    
    * __Return:__
    NA
    
    
    ## code
    
    **/

const Example = _mongoose2.default.model('name_of_collection', exampleSchema);

exports.Example = Example;