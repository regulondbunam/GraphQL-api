/**
# [Regulon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Regulon Service]

## Usage 

```javascript
import {regulonResolver} from './regulonResolver'
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

/** import the regulonController that contains the resolver functions */
import { Regulon } from './regulon_model';
import { regulonController } from './regulon_controller';
import { commonController } from '../common/controller_common_functions';

export const regulonResolvers = {
  Query: {
    getAllRegulon: (root, {limit, page}) => commonController.getAll(Regulon, limit, page),
    getRegulonBy: (root, {search, advancedSearch, limit, page}) =>
      regulonController.getRegulonBy(search, advancedSearch, limit, page),
  },
};
