'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htDatasetResolvers = undefined;

var _ht_dataset_controller = require('./ht_dataset_controller');

var _controller_common_functions = require('../common/controller_common_functions');

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
const htDatasetResolvers = exports.htDatasetResolvers = {
  Query: {
    getDatasetsFromSearch: (root, { advancedSearch }) => _ht_dataset_controller.htDatasetController.getDatasetsFromSearch(advancedSearch),
    getDatasetByID: (root, { datasetID }) => _ht_dataset_controller.htDatasetController.getDatasetByID(datasetID)
  }
};