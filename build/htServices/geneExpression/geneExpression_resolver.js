"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geneExpressionResolvers = undefined;

var _geneExpression_controller = require("./geneExpression_controller");

const geneExpressionResolvers = exports.geneExpressionResolvers = {
    Query: {
        getAllGeneExpressionOfDataset: (root, { datasetId, limit, page }) => _geneExpression_controller.geneExpressionController.getAllGeneExpressionOfDataset(datasetId, limit, page),
        getGeneExpressionById: (root, { _id }) => _geneExpression_controller.geneExpressionController.getGeneExpressionById(_id),
        getGeneExpressionFromSearch: (root, { advancedSearch, limit, page }) => _geneExpression_controller.geneExpressionController.getGeneExpressionFromSearch(advancedSearch)
    }
}; /**
   # [HT Gene Expression Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for HT Gene Expression Service]
   
   ## Usage 
   
   ```javascript
   import {geneExpressionResolvers} from './geneExpression_resolver'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   "" web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the PeaksController that contains the resolver functions */