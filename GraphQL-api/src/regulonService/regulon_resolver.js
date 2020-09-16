/**
# name: regulon_Resolver.js version: 1.0

## synopsis

```javascript
import {regulonResolver} from './regulon_Resolver'
```

## description
Resolves the GraphQL Query based on controller's response 
for Regulon Service

## arguments
   N/A
   
* __Return:__
Returns a JSON object containing a response to send to GraphQL

## code
**/

/** import the regulonController that contains the resolver functions */
import { Regulon } from './regulon_model';
import { regulonController } from './regulon_controller';
import { commonController } from '../common/controller_common_functions';

export const geneResolvers = {
	Query: {
		getAllRegulon: (root, { limit, page }) => commonController.getAll(Regulon, limit, page),
		getRegulonBy: (root, { search, advancedSearch, limit, page }) =>
			regulonController.getRegulonBy(search, advancedSearch, limit, page)
	}
};
