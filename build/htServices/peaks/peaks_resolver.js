"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.peaksResolvers = undefined;

var _peaks_controller = require("./peaks_controller");

const peaksResolvers = exports.peaksResolvers = {
    Query: {
        getAllPeaksOfDataset: (root, { datasetId }) => _peaks_controller.peaksController.getAllPeaksOfDataset(datasetId),
        getPeakById: (root, { _id }) => _peaks_controller.peaksController.getPeakById(_id)
    }
}; /**
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