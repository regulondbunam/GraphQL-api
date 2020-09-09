"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = undefined;

var _gene_model = require("./gene_model");

var _gene_controller = require("./gene_controller");

var _controller_common_functions = require("../common/controller_common_functions");

/**
# name: geneResolver.js version: 1.0

## synopsis

```javascript
import {geneResolver} from './geneResolver'
```

## description
Resolves the GraphQL Query based on controller's response 
for Gene Service

## arguments
   N/A
   
* __Return:__
Object - __ Genes
Returns a JSON object containing a response to send to GraphQL

## code
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