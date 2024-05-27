"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcriptionTerminationSiteResolvers = void 0;
var _tts_controller = require("./tts_controller");
/**
# [HT Transcription Termination Site Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Termination Site Service]

## Usage 

```javascript
import { transcriptionTerminationSiteController } from './tts_resolver'
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

var transcriptionTerminationSiteResolvers = exports.transcriptionTerminationSiteResolvers = {
  Query: {
    getTTSByID: function getTTSByID(root, _ref) {
      var _id = _ref._id;
      return _tts_controller.transcriptionTerminationSiteController.getTTSByID(_id);
    },
    getAllTTSOfDataset: function getAllTTSOfDataset(root, _ref2) {
      var datasetId = _ref2.datasetId,
        limit = _ref2.limit,
        page = _ref2.page;
      return _tts_controller.transcriptionTerminationSiteController.getAllTTSOfDataset(datasetId, limit, page);
    }
  }
};