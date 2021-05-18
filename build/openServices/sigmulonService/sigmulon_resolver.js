'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigmulonResolvers = undefined;

var _sigmulon_model = require('./sigmulon_model');

var _sigmulon_controller = require('./sigmulon_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const sigmulonResolvers = exports.sigmulonResolvers = {
  Query: {
    getAllSigmulon: (root, { limit, page }) => _controller_common_functions.commonController.getAll(_sigmulon_model.Sigmulon, limit, page, 'sigmaFactor.name'),
    getSigmulonBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) => _sigmulon_controller.sigmulonController.getOperonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
  }
}; /**
   # [Sigmulon Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for Sigmulon Service]
   
   ## Usage 
   
   ```javascript
   import {sigmulonResolvers} from './sigmulon_resolver'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   RegulonDB datamart web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the operonController that contains the resolver functions */