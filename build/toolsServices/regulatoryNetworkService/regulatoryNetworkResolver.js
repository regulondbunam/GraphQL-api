'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulatoryNetworkResolver = undefined;

var _regulatoryNetworkController = require('./regulatoryNetworkController');

const regulatoryNetworkResolver = exports.regulatoryNetworkResolver = {
  Query: {
    getNodesOf: (root, { objectId, objectName, networkType }) => _regulatoryNetworkController.regulatoryNetworkController.getNodesOf(objectId, objectName, networkType),
    getAllNodes: (root, { objectType, networkType }) => _regulatoryNetworkController.regulatoryNetworkController.getAllNodes(objectType, networkType)
  }
}; /**
    # Regulatory Network service resolver
   
    ## Description
    Here are contained all resolver to defined queries in the Graphql schema
    it´s used for the server definition 
   
   ## Usage
   ```javascript
   import {regulatoryNetworkResolver} from './regulatoryNetworkResolver';
   ```
   
   ##Arguments/parameters
   N/A
   
   ## Examples
   
   ## Return 
   N/A
   
   ## Category
   RegulonDB regulatory network web service
   
   ## License 
   ISC
   
   ## Author
   Andres Gerardo Lopez Almazo 
   
    **/
// import regulatoryNetworkControler to use functions defined in it