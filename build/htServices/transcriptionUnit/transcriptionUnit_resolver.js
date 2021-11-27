'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionUnitResolvers = undefined;

var _transcriptionUnit_controller = require('./transcriptionUnit_controller');

const transcriptionUnitResolvers = exports.transcriptionUnitResolvers = {
    Query: {
        getTUByID: (root, { _id }) => _transcriptionUnit_controller.transcriptionUnitController.getTUByID(_id),
        getAllTransUnitsOfDataset: (root, { datasetId }) => _transcriptionUnit_controller.transcriptionUnitController.getAllTransUnitsOfDataset(datasetId)
    }
}; /**
   # [HT Transcription Unit Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for HT Transcription Unit Service]
   
   ## Usage 
   
   ```javascript
   import { transcriptionUnitController } from './transcriptionUnit_controller'
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