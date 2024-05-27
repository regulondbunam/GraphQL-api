"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peaksResolvers = void 0;
var _peaks_controller = require("./peaks_controller");
/**
# [HT Peaks Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Peaks Service]

## Usage 

```javascript
import {peaksResolvers} from './peaks_resolver'
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

/** import the PeaksController that contains the resolver functions */

var peaksResolvers = exports.peaksResolvers = {
  Query: {
    getAllPeaksOfDataset: function getAllPeaksOfDataset(root, _ref) {
      var datasetId = _ref.datasetId,
        limit = _ref.limit,
        page = _ref.page;
      return _peaks_controller.peaksController.getAllPeaksOfDataset(datasetId, limit, page);
    },
    getPeakById: function getPeakById(root, _ref2) {
      var _id = _ref2._id;
      return _peaks_controller.peaksController.getPeakById(_id);
    }
  }
};