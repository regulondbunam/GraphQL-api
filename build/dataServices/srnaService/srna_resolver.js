'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srnaResolvers = undefined;

var _srna_model = require('./srna_model');

var _srna_controller = require('./srna_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const srnaResolvers = exports.srnaResolvers = {
  Query: {
    getAllSrnas: (root, { limit, page }) => _controller_common_functions.commonController.getAll(_srna_model.SRNA, limit, page, 'product.name'),
    getSrnaBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) => _srna_controller.srnaController.getSrnaBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
  }
}; /**
   # [SRNA Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for SRNA Service]
   
   ## Usage 
   
   ```javascript
   import {srnaResolvers} from './srna_resolver'
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