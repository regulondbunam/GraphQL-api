'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gensorUnitResolvers = undefined;

var _gensorUnit_model = require('./gensorUnit_model');

var _gensorUnit_controller = require('./gensorUnit_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const gensorUnitResolvers = exports.gensorUnitResolvers = {
  Query: {
    getAllGUs: (root, { limit, page }) => _controller_common_functions.commonController.getAll(_gensorUnit_model.GensorUnit, limit, page, 'gensorUnit.name'),
    getGUsBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) => _gensorUnit_controller.gensorUnitController.getGUsBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
  }
}; /**
   # [Gensor Unite Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for Gensor Unit Services]
   
   ## Usage 
   
   ```javascript
   import {gensorUnitResolvers} from './gensorUnit_resolver'
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

/** import the geneController that contains the resolver functions */