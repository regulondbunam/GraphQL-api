'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPageResolver = undefined;

var _listPageController = require('./listPageController');

const listPageResolver = exports.listPageResolver = {
  Query: {
    getObjectList: (root, { datamartType }) => _listPageController.listPageController.getObjectList(datamartType)
  }
}; /**
   # ["" Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for "" Service]
   
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
   
   "" web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the geneController that contains the resolver functions */