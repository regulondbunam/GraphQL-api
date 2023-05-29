/**
# [Operon Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Operon Service]

## Usage 

```javascript
import {operonController} from './operon_controller';
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

import { Operon } from './operon_model';
import { commonController } from '../common/controller_common_functions';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

/** Define a geneController. */
class operonController {
  /** Retrieve all documents that match with a query
   *  @param {String} search usable for text search on fields defined in "Properties" parameter. **e.g.**:
   *  "arad AND arac OR \"biosynthesis of macromolecules\""
   *  @param {String} advancedSearch usable for specific query by a "value[field]" syntax
   *  @param {Number} limit defines the page results showed (10 by default)
   *  @param {Number} page select the current result page (0 by default)
   *  @param {String} properties select the fields to be queried by "search" (by default 
   *  geneInfo[id, name, synonyms] and products[name])
   *  @param {String} fullMatchOnly define if "search" will be Case Sensitive and cannot be a substring 
   *  (by default "false")
   */
  static async getOperonBy(
    search,
    advancedSearch,
    limit = 10,
    page = 0,
    properties = ['operon._id', 'operon.name'],
    fullMatchOnly = false
) {
  const offset = page * limit;
  let filter;
  let hasMore = false;
  
  if (advancedSearch !== undefined) {
    filter = advancedSearchFilter(advancedSearch);
  } else if (search !== undefined) {
    filter = textSearchFilter(search, properties, fullMatchOnly);
  }

  const Operons = await Operon.find(filter).sort({'operon.name': 1}).limit(limit).skip(offset);
  const total = await commonController.countDocumentsIn(Operon, filter);
  const lastPage = Math.floor(total / limit);
  if (limit * (page + 1) < total) hasMore = true;
  if (page > lastPage) {
    const err = new GraphQLError('You must select an available page number');
    err.status = 'No Content';
    err.statusCode = 204;
    throw err;
  } else {
    return {
      data: Operons,
      pagination: {
        limit: limit,
        currentPage: page,
        firstPage: 0,
        lastPage: lastPage || 0,
        totalResults: total,
        hasNextPage: hasMore,
      },
    };
  }
}
}

/** the operonController is referenced by the resolver of the Operon web service */
export {operonController};