'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = undefined;

var _geneExpressions_model = require('./geneExpressions_model');

var _geneExpressions_controller = require('./geneExpressions_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const geneResolvers = exports.geneResolvers = {
  Query: {
    queryName: (root, {}) => _geneExpressions_controller.geneExpressionsController.queryName()
  }
}; /**
   # [GeneExpressions Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for GeneExpressions HT Service]
   
   ## Usage 
   
   ```javascript
   import {geneExpressionsResolver} from './geneExpressionsResolver'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   HT datamart web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the geneController that contains the resolver functions */