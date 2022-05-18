/**
# [Operon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Operon Service]

## Usage 

```javascript
import {operonResolvers} from './operon_resolver'
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
import { Operon } from './operon_model';
import { operonController } from './operon_controller';
import { commonController } from '../common/controller_common_functions';

export const operonResolvers = {
  Query: {
    getAllOperon: (root, {limit, page}) => commonController.getAll(Operon, limit, page, 'operon.name'),
    getOperonBy: (root, {search, advancedSearch, limit, page, properties, organismName, fullMatchOnly}) =>
      operonController.getOperonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly),
  },
};