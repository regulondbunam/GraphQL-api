"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srnaResolvers = void 0;
var _srna_model = require("./srna_model");
var _srna_controller = require("./srna_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [SRNA Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for SRNA Service]

## Usage 

```javascript
import {srnaResolvers} from './srna_resolver'
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

var srnaResolvers = exports.srnaResolvers = {
  Query: {
    getAllSrnas: function getAllSrnas(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_srna_model.SRNA, limit, page, 'product.name');
    },
    getSrnaBy: function getSrnaBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _srna_controller.srnaController.getSrnaBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};