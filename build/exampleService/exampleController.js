'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.exampleController = undefined;

var _exampleModel = require('./exampleModel');

class exampleController {
	static async getExample() {
		return {
			message: 'Hello World',
			user: 'RegulonDB'
		};
	}
} /**
  # name: exampleController.js version: 1.0
  
  ## synopsis
  
  ```javascript
  exampleController.getExample()
  
  ```
  
  ## description
  Here are defined all function with logic to connect and get data from DB,
  they return responses obtained to the resolvers
  
  ## arguments
  
  * arg_name
  arg description
  
  * __Return:__
  Object - __ [Type Name]
  Description
  
  ## code
  
  **/

// import defined model of the collection to be used
exports.exampleController = exampleController;