'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionUnitResolvers = undefined;

var _transcriptionUnit_controller = require('./transcriptionUnit_controller');

const transcriptionUnitResolvers = exports.transcriptionUnitResolvers = {
    Query: {
        getTUByID: (root, { _id }) => _transcriptionUnit_controller.transcriptionUnitController.getTUByID(_id),
        getAllTransUnitsOfDataset: (root, { datasetId, limit, page }) => _transcriptionUnit_controller.transcriptionUnitController.getAllTransUnitsOfDataset(datasetId, limit, page)
    }
}; /**
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