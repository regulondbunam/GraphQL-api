'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlpGrowthConditionsController = undefined;

var _nlpGrowthConditions_model = require('./nlpGrowthConditions_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

/**
# [nlpGrowthConditions Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT nlpGrowthConditions Service]

## Usage 

```javascript
import {nlpGrowthConditionsController} from './nlpGrowthConditions_controller.js';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB HT Web Service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

class nlpGrowthConditionsController {
  /** Get all NLP Growth Conditions that are linked to a specific Dataset
   *  @param {String} datasetId the ID of the Dataset that is linked to the document
   */
  static async getNLPGrowthConditionById(datasetId) {
    return await _nlpGrowthConditions_model.NLPGrowthConditions.findOne({ "datasetIds": datasetId });
  }

  /** Makes a advancedSearch Query in collection
   *  @param {String} advancedSearch the string that need to be parsed to valid BSON format 
   *  for MongoDB Query, must have a format like key[value]
   */
  static async getNLPGrowthConditionBySearch(advancedSearch) {
    let filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
    return await _nlpGrowthConditions_model.NLPGrowthConditions.find(filter);
  }
}

exports.nlpGrowthConditionsController = nlpGrowthConditionsController;