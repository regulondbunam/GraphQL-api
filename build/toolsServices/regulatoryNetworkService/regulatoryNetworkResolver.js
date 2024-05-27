"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulatoryNetworkResolver = void 0;
var _regulatoryNetworkController = require("./regulatoryNetworkController");
/**
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

var regulatoryNetworkResolver = exports.regulatoryNetworkResolver = {
  Query: {
    getNodesOf: function getNodesOf(root, _ref) {
      var objectId = _ref.objectId,
        objectName = _ref.objectName,
        networkType = _ref.networkType;
      return _regulatoryNetworkController.regulatoryNetworkController.getNodesOf(objectId, objectName, networkType);
    },
    getAllNodes: function getAllNodes(root, _ref2) {
      var objectType = _ref2.objectType,
        networkType = _ref2.networkType;
      return _regulatoryNetworkController.regulatoryNetworkController.getAllNodes(objectType, networkType);
    }
  }
};