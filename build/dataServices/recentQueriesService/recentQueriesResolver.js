'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolverMap = exports.recentUsedQueriesResolver = undefined;

var _recentQueriesController = require('./recentQueriesController');

var _graphql = require('graphql');

var _controller_common_functions = require('../common/controller_common_functions');

var _recentQueriesModel = require('./recentQueriesModel');

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
const recentUsedQueriesResolver = exports.recentUsedQueriesResolver = {
  Query: {
    getAllUsedQueries: (root, { limit, page }) => _recentQueriesController.UsedQueriesController.getAllUsedQueries(limit, page)
  },
  Mutation: {
    addUsedQuery: (root, { querySearchString }) => _recentQueriesController.UsedQueriesController.addUsedQuery(querySearchString)
  }
};

const resolverMap = exports.resolverMap = {
  Date: new _graphql.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === _graphql.Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};