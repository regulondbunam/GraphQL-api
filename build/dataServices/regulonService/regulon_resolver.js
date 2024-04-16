"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulonResolvers = void 0;
var _regulon_model = require("./regulon_model");
var _regulon_controller = require("./regulon_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [Regulon Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Regulon Service]

## Usage 

```javascript
import {regulonResolver} from './regulonResolver'
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

/** import the regulonController that contains the resolver functions */

var regulonResolvers = exports.regulonResolvers = {
  Query: {
    getAllRegulon: function getAllRegulon(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_regulon_model.Regulon, limit, page, "transcriptionFactor.name");
    },
    getRegulonBy: function getRegulonBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _regulon_controller.regulonController.getRegulonBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};