/**
# [SRNA Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for SRNA Service]

## Usage 

```javascript
import {srnaResolvers} from './srna_resolver'
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

/** import the operonController that contains the resolver functions */
import { SRNA } from './srna_model';
import { srnaController } from './srna_controller';
import { commonController } from '../common/controller_common_functions';

export const srnaResolvers = {
  Query: {
    getAllSrnas: (root, {limit, page}) => commonController.getAll(SRNA, limit, page, 'product.name'),
    getSrnaBy: (root, {search, advancedSearch, limit, page, properties, organismName, fullMatchOnly}) =>
      srnaController.getSrnaBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly),
  },
};