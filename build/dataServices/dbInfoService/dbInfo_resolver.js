'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbInfoResolvers = undefined;

var _dbInfo_controller = require('./dbInfo_controller');

const dbInfoResolvers = exports.dbInfoResolvers = {
  Query: {
    getDatabaseInfo: (root, {}) => _dbInfo_controller.dbInfoController.getDatabaseInfo()
  }
}; /**
   # [databaseInfo Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for databaseInfo Service]
   
   ## Usage 
   
   ```javascript
   import {} from './'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   database info web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the geneController that contains the resolver functions */