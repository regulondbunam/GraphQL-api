"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gensorUnitResolvers = void 0;
var _gensorUnit_model = require("./gensorUnit_model");
var _gensorUnit_controller = require("./gensorUnit_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [Gensor Unite Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Gensor Unit Services]

## Usage 

```javascript
import {gensorUnitResolvers} from './gensorUnit_resolver'
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

/** import the geneController that contains the resolver functions */

var gensorUnitResolvers = exports.gensorUnitResolvers = {
  Query: {
    getAllGUs: function getAllGUs(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_gensorUnit_model.GensorUnit, limit, page, 'gensorUnit.name');
    },
    getGUsBy: function getGUsBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _gensorUnit_controller.gensorUnitController.getGUsBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};