'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.exampleResolvers = undefined;

var _exampleController = require('./exampleController');

const exampleResolvers = exports.exampleResolvers = {
	Query: {
		getExample: (root, {}) => _exampleController.exampleController.getExample()
	}
}; /**
   # name: exampleResolver version: 1.0
   
   ## synopsis
   
   ```javascript
   
   import {resolvers} from './resolvers'
   
   ```
   
   ## description
   Here are contained all resolver to defined queries in the GraphQL schema
   it's used for the server definition
   
   ## arguments
   No aplica
   
   * __Return:__
   Type JSON __ Gene
   
   
   ## code
   
   **/

// imports exampleController to use functions defined in it