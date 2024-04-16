"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcriptionUnitResolvers = void 0;
var _transcriptionUnit_controller = require("./transcriptionUnit_controller");
/**
# [HT Transcription Unit Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Unit Service]

## Usage 

```javascript
import { transcriptionUnitController } from './transcriptionUnit_resolver'
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

var transcriptionUnitResolvers = exports.transcriptionUnitResolvers = {
  Query: {
    getTUByID: function getTUByID(root, _ref) {
      var _id = _ref._id;
      return _transcriptionUnit_controller.transcriptionUnitController.getTUByID(_id);
    },
    getAllTransUnitsOfDataset: function getAllTransUnitsOfDataset(root, _ref2) {
      var datasetId = _ref2.datasetId,
        limit = _ref2.limit,
        page = _ref2.page;
      return _transcriptionUnit_controller.transcriptionUnitController.getAllTransUnitsOfDataset(datasetId, limit, page);
    }
  }
};