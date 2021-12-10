"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nlpGrowthConditionsResolvers = undefined;

var _nlpGrowthConditions_controller = require("./nlpGrowthConditions_controller");

const nlpGrowthConditionsResolvers = exports.nlpGrowthConditionsResolvers = {
    Query: {
        getNLPGrowthConditionById: (root, { datasetId }) => _nlpGrowthConditions_controller.nlpGrowthConditionsController.getNLPGrowthConditionById(datasetId),
        getNLPGrowthConditionBySearch: (root, { advancedSearch }) => _nlpGrowthConditions_controller.nlpGrowthConditionsController.getNLPGrowthConditionBySearch(advancedSearch)
    }
}; /**
   # [HT NLP Growth Conditions Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for HT NLP Growth Conditions Service]
   
   ## Usage 
   
   ```javascript
   import {nlpGrowthConditionsResolvers} from './nlpGrowthConditions_resolver'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   HT web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the PeaksController that contains the resolver functions */