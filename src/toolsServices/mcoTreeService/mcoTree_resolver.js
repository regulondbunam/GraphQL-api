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
import { mcoTreeController } from './mcoTree_controller';

export const mcoTreeResolver = {
  Query: {
    getGoTerms: (root, {}) => mcoTreeController.getGoTerms(),
    getSubclassesOfTermId: (root, {_id}) => mcoTreeController.getSubclassesOfTermId(_id),
    getSuperclassesOfTermId: (root, {_id}) => mcoTreeController.getSuperclassesOfTermId(_id),
    getTermBy: (root, {search, advancedSearch, properties, fullMatchOnly}) => mcoTreeController.getTermBy(search, advancedSearch, properties, fullMatchOnly),
  },
};
