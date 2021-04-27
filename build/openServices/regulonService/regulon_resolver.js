'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulonResolvers = undefined;

var _regulon_model = require('./regulon_model');

var _regulon_controller = require('./regulon_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const regulonResolvers = exports.regulonResolvers = {
  Query: {
    getAllRegulon: (root, { limit, page }) => _controller_common_functions.commonController.getAll(_regulon_model.Regulon, limit, page, "transcriptionFactor.name"),
    getRegulonBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) => _regulon_controller.regulonController.getRegulonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
  }
}; /**
   # [Regulon Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for Regulon Service]
   
   ## Usage 
   
   ```javascript
   import {regulonResolver} from './regulonResolver'
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

/** import the regulonController that contains the resolver functions */