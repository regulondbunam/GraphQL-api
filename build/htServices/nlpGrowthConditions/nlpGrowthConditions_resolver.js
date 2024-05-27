"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlpGrowthConditionsResolvers = void 0;
var _nlpGrowthConditions_controller = require("./nlpGrowthConditions_controller");
/**
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

var nlpGrowthConditionsResolvers = exports.nlpGrowthConditionsResolvers = {
  Query: {
    getNLPGrowthConditionById: function getNLPGrowthConditionById(root, _ref) {
      var datasetId = _ref.datasetId;
      return _nlpGrowthConditions_controller.nlpGrowthConditionsController.getNLPGrowthConditionById(datasetId);
    },
    getNLPGrowthConditionBySearch: function getNLPGrowthConditionBySearch(root, _ref2) {
      var advancedSearch = _ref2.advancedSearch;
      return _nlpGrowthConditions_controller.nlpGrowthConditionsController.getNLPGrowthConditionBySearch(advancedSearch);
    }
  }
};