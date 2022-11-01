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
import { UsedQueriesController } from './recentQueriesController';
import { Kind, GraphQLScalarType } from 'graphql'
import { commonController } from '../common/controller_common_functions';
import {UsedQueries} from "./recentQueriesModel"

export const recentUsedQueriesResolver = {
  Query: {
    getAllUsedQueries: (root, {limit, page}) => UsedQueriesController.getAllUsedQueries(limit, page),
  },
  Mutation: {
    addUsedQuery: (root, {querySearchString}) => UsedQueriesController.addUsedQuery(querySearchString),
  }
};

export const resolverMap = {
 Date: new GraphQLScalarType({
 name: 'Date',
 description: 'Date custom scalar type',
 parseValue(value) {
 return new Date(value) // value from the client
 },
 serialize(value) {
 return value.getTime() // value sent to the client
 },
 parseLiteral(ast) {
 if (ast.kind === Kind.INT) {
 return new Date(+ast.value) // ast value is always in string format
 }
 return null
 }
 })
}
