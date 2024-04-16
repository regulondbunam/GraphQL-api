"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbInfoResolvers = void 0;
var _dbInfo_controller = require("./dbInfo_controller");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); } /**
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
**/ /** import the geneController that contains the resolver functions */
var dbInfoResolvers = exports.dbInfoResolvers = {
  Query: {
    getDatabaseInfo: function getDatabaseInfo(root, _ref) {
      _objectDestructuringEmpty(_ref);
      return _dbInfo_controller.dbInfoController.getDatabaseInfo();
    }
  }
};