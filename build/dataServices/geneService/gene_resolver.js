"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = void 0;
var _gene_model = require("./gene_model");
var _gene_controller = require("./gene_controller");
var _controller_common_functions = require("../common/controller_common_functions");
/**
# [Gene Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Gene Service]

## Usage 

```javascript
import {geneResolver} from './geneResolver'
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

var geneResolvers = exports.geneResolvers = {
  Query: {
    getAllGenes: function getAllGenes(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_gene_model.Gene, limit, page, 'gene.name');
    },
    getGenesBy: function getGenesBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        organismName = _ref2.organismName,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _gene_controller.geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly);
    }
  }
};