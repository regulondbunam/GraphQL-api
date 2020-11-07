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


/**
	
# Functions description

## [getRegulonBy]

__Description:__ 

[Retrieve all documents that match with a query]


__Usage:__

```javascript
operonController.getOperonBy(args);
```

__Input arguments/parameters:__ 

__[search]:__ usable for text search on fields defined in "Properties" parameter. **e.g.**:
    "arad AND arac OR \"biosynthesis of macromolecules\""
__[advancedSearch]:__ usable for specific query by a "value[field]" syntax
__[limit]:__ defines the page results showed (10 by default)
__[page]:__ select the current result page (0 by default)
__[properties]:__ select the fields to be queried by "search" (by default
    geneInfo[id, name, synonyms] and products[name])
__[organismName]:__ usable for specific organismName queries
__[fullMatchOnly]:__ define if "search" will be Case Sensitive and cannot be a substring
    (by default "false")

__Return:__ 

__Object:__ Regulon
Returns an object containing a response that will be sent to GraphQL
**/

import { Operon } from './operon_model';
import { commonController } from '../common/controller_common_functions';
import { advancedSearchFilter, textSearch } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

/** Define a geneController. */
class operonController {
  static async getOperonBy(
    search,
    advancedSearch,
    limit = 10,
    page = 0,
    properties = ['operon.id', 'gene.name'],
    organismName,
    fullMatchOnly = false
) {
  const offset = page * limit;
  let filter;
  let hasMore = false;
  if (advancedSearch !== undefined) {
    filter = advancedSearchFilter(advancedSearch);
  } else if (search !== undefined) {
    // filter = searchFilter(search);
    filter = textSearch(search, properties, fullMatchOnly);
  }
  const Operons = Operon.find(filter).sort({'gene.name': 1}).limit(limit).skip(offset);
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
        lastPage: lastPage,
        totalResults: total,
        hasNextPage: hasMore,
      },
    };
  }
}
}

/** the geneController is referenced by the resolver of the Gene web service */
export {operonController};