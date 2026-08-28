"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organismResolvers = void 0;
var _organism_model = require("./organism_model");
var _organism_controller = require("./organism_controller");
var _controller_common_functions = require("../common/controller_common_functions");
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); } /**
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
**/ /** import the geneController that contains the resolver functions */
var organismResolvers = exports.organismResolvers = {
  Query: {
    getAllOrganisms: function getAllOrganisms(root, _ref) {
      _objectDestructuringEmpty(_ref);
      return _organism_controller.organismController.getAllOrganisms();
    }
  }
};