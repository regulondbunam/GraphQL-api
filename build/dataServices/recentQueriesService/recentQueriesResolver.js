"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolverMap = exports.recentUsedQueriesResolver = void 0;
var _recentQueriesController = require("./recentQueriesController");
var _graphql = require("graphql");
var _controller_common_functions = require("../common/controller_common_functions");
var _recentQueriesModel = require("./recentQueriesModel");
/**
# ["" Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for "" Service]

## Usage 

```javascript
import {} from './'
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

/** import the geneController that contains the resolver functions */

var recentUsedQueriesResolver = exports.recentUsedQueriesResolver = {
  Query: {
    getAllUsedQueries: function getAllUsedQueries(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _recentQueriesController.UsedQueriesController.getAllUsedQueries(limit, page);
    }
  },
  Mutation: {
    addUsedQuery: function addUsedQuery(root, _ref2) {
      var querySearchString = _ref2.querySearchString;
      return _recentQueriesController.UsedQueriesController.addUsedQuery(querySearchString);
    }
  }
};
var resolverMap = exports.resolverMap = {
  Date: new _graphql.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: function parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize: function serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral: function parseLiteral(ast) {
      if (ast.kind === _graphql.Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};