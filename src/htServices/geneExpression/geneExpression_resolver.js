/**
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
import { geneExpressionController } from "./geneExpression_controller";

export const geneExpressionResolvers = {
    Query: {
        getAllGeneExpressionOfDataset: (root, {datasetId, limit, page}) => geneExpressionController.getAllGeneExpressionOfDataset(datasetId, limit, page),
        getGeneExpressionById: (root, {_id}) => geneExpressionController.getGeneExpressionById(_id)
    },
};