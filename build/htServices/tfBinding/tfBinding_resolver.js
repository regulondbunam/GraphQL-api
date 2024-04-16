"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tfBindingResolvers = void 0;
var _tfBinding_controller = require("./tfBinding_controller");
/**
# [HT TF Binding Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT TF Binding Service]

## Usage 

```javascript
import {tfBindingResolvers} from './tfBinding_resolver'
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

HT web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

/** import the tfBindingController that contains the resolver functions */

var tfBindingResolvers = exports.tfBindingResolvers = {
  Query: {
    getAllTFBindingOfDataset: function getAllTFBindingOfDataset(root, _ref) {
      var datasetId = _ref.datasetId,
        limit = _ref.limit,
        page = _ref.page;
      return _tfBinding_controller.tfBindingController.getAllTFBindingOfDataset(datasetId, limit, page);
    },
    getTFBindingById: function getTFBindingById(root, _ref2) {
      var _id = _ref2._id;
      return _tfBinding_controller.tfBindingController.getTFBindingById(_id);
    }
  }
};