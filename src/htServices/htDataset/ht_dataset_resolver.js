/**
# [HT Dataset Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Dataset Service]

## Usage 

```javascript
import {htDatasetResolvers} from './ht_dataset_resolver'
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

/** import the htDatasetController that contains the resolver functions */
import { htDatasetController } from './ht_dataset_controller';
import { commonController } from '../common/controller_common_functions';

export const htDatasetResolvers = {
  Query: {
    getDatasetsFromSearch: (root, {advancedSearch}) => htDatasetController.getDatasetsFromSearch(advancedSearch),
    getDatasetByID: (root, {datasetID}) => htDatasetController.getDatasetByID(datasetID)
  },
};
 