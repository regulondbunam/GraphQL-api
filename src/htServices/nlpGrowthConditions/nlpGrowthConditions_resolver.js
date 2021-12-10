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
import { nlpGrowthConditionsController } from "./nlpGrowthConditions_controller";

export const nlpGrowthConditionsResolvers = {
    Query: {
        getNLPGrowthConditionById: (root, {datasetId}) => nlpGrowthConditionsController.getNLPGrowthConditionById(datasetId),
        getNLPGrowthConditionBySearch:(root, {advancedSearch}) => nlpGrowthConditionsController.getNLPGrowthConditionBySearch(advancedSearch)
    },
};