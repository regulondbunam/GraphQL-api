"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneExpressionResolvers = void 0;
var _geneExpression_controller = require("./geneExpression_controller");
/**
# [HT Gene Expression Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Gene Expression Service]

## Usage 

```javascript
import {geneExpressionResolvers} from './geneExpression_resolver'
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

"" web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

/** import the PeaksController that contains the resolver functions */

var geneExpressionResolvers = exports.geneExpressionResolvers = {
  Query: {
    getAllGeneExpressionOfDataset: function getAllGeneExpressionOfDataset(root, _ref) {
      var datasetId = _ref.datasetId,
        limit = _ref.limit,
        page = _ref.page;
      return _geneExpression_controller.geneExpressionController.getAllGeneExpressionOfDataset(datasetId, limit, page);
    },
    getGeneExpressionById: function getGeneExpressionById(root, _ref2) {
      var _id = _ref2._id;
      return _geneExpression_controller.geneExpressionController.getGeneExpressionById(_id);
    },
    getGeneExpressionFromSearch: function getGeneExpressionFromSearch(root, _ref3) {
      var advancedSearch = _ref3.advancedSearch,
        limit = _ref3.limit,
        page = _ref3.page;
      return _geneExpression_controller.geneExpressionController.getGeneExpressionFromSearch(advancedSearch);
    }
  }
};