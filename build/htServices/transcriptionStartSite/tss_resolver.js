"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcriptionStartSiteResolvers = void 0;
var _tss_controller = require("./tss_controller");
/**
# [HT Transcription Start Site Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Start Site Service]

## Usage 

```javascript
import { transcriptionStartSiteController } from './tss_resolver'
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

var transcriptionStartSiteResolvers = exports.transcriptionStartSiteResolvers = {
  Query: {
    getTSSByID: function getTSSByID(root, _ref) {
      var _id = _ref._id;
      return _tss_controller.transcriptionStartSiteController.getTSSByID(_id);
    },
    getAllTSSOfDataset: function getAllTSSOfDataset(root, _ref2) {
      var datasetId = _ref2.datasetId,
        limit = _ref2.limit,
        page = _ref2.page;
      return _tss_controller.transcriptionStartSiteController.getAllTSSOfDataset(datasetId, limit, page);
    }
  }
};