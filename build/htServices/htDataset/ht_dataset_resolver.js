"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htDatasetResolvers = void 0;
var _ht_dataset_controller = require("./ht_dataset_controller");
var _controller_common_functions = require("../common/controller_common_functions");
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

var htDatasetResolvers = exports.htDatasetResolvers = {
  Query: {
    getDatasetsFromSearch: function getDatasetsFromSearch(root, _ref) {
      var advancedSearch = _ref.advancedSearch;
      return _ht_dataset_controller.htDatasetController.getDatasetsFromSearch(advancedSearch);
    },
    getDatasetByID: function getDatasetByID(root, _ref2) {
      var datasetID = _ref2.datasetID;
      return _ht_dataset_controller.htDatasetController.getDatasetByID(datasetID);
    },
    getDatasetsWithMetadata: function getDatasetsWithMetadata(root, _ref3) {
      var datasetType = _ref3.datasetType;
      return _ht_dataset_controller.htDatasetController.getDatasetsWithMetadata(datasetType);
    }
  }
};