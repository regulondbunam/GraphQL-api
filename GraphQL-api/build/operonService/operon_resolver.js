"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operonResolvers = undefined;

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
import {operonResolver} from './operonResolver'
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
const operonResolvers = exports.operonResolvers = {
  Query: {
    getAllOperon: (root, {
      limit,
      page
    }) => _controller_common_functions.commonController.getAll(_operon_model.Operon, limit, page, 'operon.name'),
    getOperonBy: (root, {
      search,
      advancedSearch,
      limit,
      page,
      properties,
      organismName,
      fullMatchOnly
    }) => _operon_controller.operonController.getOperonBy(search, advancedSearch, limit, page)
  }
};