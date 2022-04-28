/**
# [Gensor Unite Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Gensor Unit Services]

## Usage 

```javascript
import {gensorUnitResolvers} from './gensorUnit_resolver'
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
import { GensorUnit } from './gensorUnit_model';
import { gensorUnitController } from './gensorUnit_controller';
import { commonController } from '../common/controller_common_functions';

export const gensorUnitResolvers = {
  Query: {
    getAllGUs: (root, {limit, page}) => commonController.getAll(GensorUnit, limit, page, 'gensorUnit.name'),
    getGUsBy: (root, {search, advancedSearch, limit, page, properties, organismName, fullMatchOnly}) =>
      gensorUnitController.getGUsBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly),
  },
};
 