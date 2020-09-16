/**
# name: geneResolver.js version: 1.0

## synopsis

```javascript
import {geneResolver} from './geneResolver'
```

## description
Resolves the GraphQL Query based on controller's response 
for Gene Service

## arguments
   N/A
   
* __Return:__
Object - __ Genes
Returns a JSON object containing a response to send to GraphQL

## code
**/

/** import the geneController that contains the resolver functions */
import { Gene } from './gene_model';
import { geneController } from './gene_controller';
import { commonController } from '../common/controller_common_functions';

export const geneResolvers = {
	Query: {
		getAllGenes: (root, { limit, page }) => commonController.getAll(Gene, limit, page, 'gene.name'),
		getGenesBy: (root, { search, advancedSearch, limit, page, properties, organismName, fullMatchOnly }) =>
			geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
	}
};
