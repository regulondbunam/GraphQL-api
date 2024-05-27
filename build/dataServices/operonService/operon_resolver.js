"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operonResolvers = void 0;
var _operon_model = require("./operon_model");
var _operon_controller = require("./operon_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [Operon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Operon Service]

## Usage 

```javascript
import {operonResolvers} from './operon_resolver'
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

var operonResolvers = exports.operonResolvers = {
  Query: {
    getAllOperon: function getAllOperon(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_operon_model.Operon, limit, page, 'operon.name');
    },
    getOperonBy: function getOperonBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _operon_controller.operonController.getOperonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};