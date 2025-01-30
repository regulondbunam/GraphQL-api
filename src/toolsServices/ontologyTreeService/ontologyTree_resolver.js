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
import { ontologyTreeController } from './ontologyTree_controller';

export const ontologyTreeResolver = {
  Query: {
    getTreeTopParents: (root, {treeType}) => ontologyTreeController.getTreeTopParents(treeType),
    getSubclassesOfTermId: (root, {_id}) => ontologyTreeController.getSubclassesOfTermId(_id),
    getSuperclassesOfTermId: (root, {_id}) => ontologyTreeController.getSuperclassesOfTermId(_id),
    getTermBy: (root, {search, advancedSearch, properties, fullMatchOnly}) => ontologyTreeController.getTermBy(search, advancedSearch, properties, fullMatchOnly),
    filterTermsNameBySearch: (root, {search}) => ontologyTreeController.filterTermsNameBySearch(search),
  },
};
