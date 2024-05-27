"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigmulonResolvers = void 0;
var _sigmulon_model = require("./sigmulon_model");
var _sigmulon_controller = require("./sigmulon_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [Sigmulon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Sigmulon Service]

## Usage 

```javascript
import {sigmulonResolvers} from './sigmulon_resolver'
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

/** import the operonController that contains the resolver functions */

var sigmulonResolvers = exports.sigmulonResolvers = {
  Query: {
    getAllSigmulon: function getAllSigmulon(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_sigmulon_model.Sigmulon, limit, page, 'sigmaFactor.name');
    },
    getSigmulonBy: function getSigmulonBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _sigmulon_controller.sigmulonController.getSigmulonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};