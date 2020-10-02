"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = undefined;

var _regulon_model = require("./regulon_model");

var _regulon_controller = require("./regulon_controller");

var _controller_common_functions = require("../common/controller_common_functions");

/**
# name: regulon_Resolver.js version: 1.0

## synopsis

```javascript
import {regulonResolver} from './regulon_Resolver'
```

## description
Resolves the GraphQL Query based on controller's response
for Regulon Service

## arguments
   N/A

* __Return:__
Returns a JSON object containing a response to send to GraphQL

## code
**/

/** import the regulonController that contains the resolver functions */
const geneResolvers = exports.geneResolvers = {
  Query: {
    getAllRegulon: (root, {
      limit,
      page
    }) => _controller_common_functions.commonController.getAll(_regulon_model.Regulon, limit, page),
    getRegulonBy: (root, {
      search,
      advancedSearch,
      limit,
      page
    }) => _regulon_controller.regulonController.getRegulonBy(search, advancedSearch, limit, page)
  }
};