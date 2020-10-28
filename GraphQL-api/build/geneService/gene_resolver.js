"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = undefined;

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
const geneResolvers = exports.geneResolvers = {
  Query: {
    getAllGenes: (root, {
      limit,
      page
    }) => _controller_common_functions.commonController.getAll(_gene_model.Gene, limit, page, 'gene.name'),
    getGenesBy: (root, {
      search,
      advancedSearch,
      limit,
      page,
      properties,
      organismName,
      fullMatchOnly
    }) => _gene_controller.geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismName, fullMatchOnly)
  }
};