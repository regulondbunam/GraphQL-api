"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPageResolver = void 0;
var _listPageController = require("./listPageController");
/**
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

var listPageResolver = exports.listPageResolver = {
  Query: {
    getObjectList: function getObjectList(root, _ref) {
      var datamartType = _ref.datamartType;
      return _listPageController.listPageController.getObjectList(datamartType);
    }
  }
};