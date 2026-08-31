/**
# [Gene Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Gene Service]

## Usage 

```javascript
import {geneResolver} from './geneResolver'
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
import { Gene } from './gene_model';
import { geneController } from './gene_controller';
import { commonController } from '../common/controller_common_functions';

export const geneResolvers = {
  Query: {
    getAllGenes: (root, {limit, page, organismId}) => commonController.getAll(Gene, limit, page, 'gene.name', organismId),
    getGenesBy: (root, {search, advancedSearch, limit, page, properties, organismId, fullMatchOnly}) =>
      geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismId, fullMatchOnly),
  },
};
 