"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coexpressionResolver = void 0;
var _coexpressionController = require("./coexpressionController");
/**
 # Coexpression service resolver

 ## Description
 Here are contained all resolver to defined queries in the Graphql schema
 it´s used for the server definition 

## Usage
```javascript
import {coexpressionResolver} from './coexpressionResolver.js';
```

##Arguments/parameters
N/A

## Examples

## Return 
N/A

## Category
RegulonDB coexpression web service

## License 

## Author 

 **/
// import coexpressionController to use functions defined in it

var coexpressionResolver = exports.coexpressionResolver = {
  Query: {
    getTopCoexpressionRanking: function getTopCoexpressionRanking(root, _ref) {
      var id = _ref.id,
        gene = _ref.gene,
        limit = _ref.limit;
      return _coexpressionController.coexpressionController.getTopCoexpressionRanking(id, gene, limit);
    },
    getRankFromGeneList: function getRankFromGeneList(root, _ref2) {
      var geneId = _ref2.geneId,
        geneIdList = _ref2.geneIdList,
        gene = _ref2.gene,
        geneList = _ref2.geneList;
      return _coexpressionController.coexpressionController.getRankFromGeneList(geneId, geneIdList, gene, geneList);
    }
  }
};