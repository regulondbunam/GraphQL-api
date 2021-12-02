'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionStartSiteResolvers = undefined;

var _tss_controller = require('./tss_controller');

const transcriptionStartSiteResolvers = exports.transcriptionStartSiteResolvers = {
    Query: {
        getTSSByID: (root, { _id }) => _tss_controller.transcriptionStartSiteController.getTSSByID(_id),
        getAllTSSOfDataset: (root, { datasetId }) => _tss_controller.transcriptionStartSiteController.getAllTSSOfDataset(datasetId)
    }
}; /**
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