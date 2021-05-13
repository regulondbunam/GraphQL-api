/**
# ["" Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for "" Service]

## Usage 

```javascript
import {} from './'
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

/** import the geneController that contains the resolver functions */
import { Template } from './template_model';
import { templateController } from './template_controller';
import { commonController } from '../common/controller_common_functions';

export const geneResolvers = {
  Query: {
    queryName: (root, {}) => templateController.queryName(),
  },
};
 