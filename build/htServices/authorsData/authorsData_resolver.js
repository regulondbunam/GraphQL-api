"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorsDataResolvers = void 0;
var _authorsData_controller = require("./authorsData_controller");
/**
# [HT Authors Data Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Dataset Service]

## Usage 

```javascript
import {authorsDataResolvers} from './authorsData_controller'
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

/** import the PeaksController that contains the resolver functions */

var authorsDataResolvers = exports.authorsDataResolvers = {
  Query: {
    getAuthorsDataOfDataset: function getAuthorsDataOfDataset(root, _ref) {
      var datasetId = _ref.datasetId;
      return _authorsData_controller.authorsDataController.getAuthorsDataOfDataset(datasetId);
    },
    getAuthorsDataById: function getAuthorsDataById(root, _ref2) {
      var _id = _ref2._id;
      return _authorsData_controller.authorsDataController.getAuthorsDataById(_id);
    }
  }
};