/**
# [Sigmulon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Sigmulon Service]

## Usage 

```javascript
import {sigmulonResolvers} from './sigmulon_resolver'
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
import { Sigmulon } from './sigmulon_model';
import { sigmulonController } from './sigmulon_controller';
import { commonController } from '../common/controller_common_functions';

export const sigmulonResolvers = {
  Query: {
    getAllSigmulon: (root, {limit, page}) => commonController.getAll(Sigmulon, limit, page, 'sigmaFactor.name'),
    getSigmulonBy: (root, {search, advancedSearch, limit, page, properties, organismName, fullMatchOnly}) =>
      sigmulonController.getSigmulonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly),
  },
};