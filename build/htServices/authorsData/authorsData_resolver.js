"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authorsDataResolvers = undefined;

var _authorsData_controller = require("./authorsData_controller");

const authorsDataResolvers = exports.authorsDataResolvers = {
    Query: {
        getAuthorsDataOfDataset: (root, { datasetId }) => _authorsData_controller.authorsDataController.getAuthorsDataOfDataset(datasetId),
        getAuthorsDataById: (root, { _id }) => _authorsData_controller.authorsDataController.getAuthorsDataById(_id)
    }
}; /**
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