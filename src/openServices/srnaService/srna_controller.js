/**
# [SRNA Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of SRNA Service]

## Usage 

```javascript
import { srnaController } from './srna_controller';
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

## [getSrnaBy]

__Description:__ 

[Retrieve all documents that match with a query]


__Usage:__

```javascript
operonController.getSrnaBy(args);
```

__Input arguments/parameters:__ 

__[search]:__ usable for text search on fields defined in "Properties" parameter. **e.g.**:
    "arad AND arac OR \"biosynthesis of macromolecules\""
__[advancedSearch]:__ usable for specific query by a "value[field]" syntax
__[limit]:__ defines the page results showed (10 by default)
__[page]:__ select the current result page (0 by default)
__[properties]:__ select the fields to be queried by "search" (by default
    ["_id", "product.name", "product.synonyms"])
__[organismName]:__ usable for specific organismName queries
__[fullMatchOnly]:__ define if "search" will be Case Sensitive and cannot be a substring
    (by default "false")

__Return:__ 

__Object:__ Sigmulon
Returns an object containing a response that will be sent to GraphQL
**/

import { SRNA } from './srna_model';
import { commonController } from '../common/controller_common_functions';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

/** Define a geneController. */
class srnaController {
  static async getSrnaBy(
    search,
    advancedSearch,
    limit = 10,
    page = 0,
    properties = ["_id", "product.name", "product.synonyms"],
    fullMatchOnly = false
)   {
        const offset = page * limit;
        let filter;
        let hasMore = false;
        if (advancedSearch !== undefined) {
        filter = advancedSearchFilter(advancedSearch);
        } else if (search !== undefined) {
        // filter = searchFilter(search);
        filter = textSearchFilter(search, properties, fullMatchOnly);
        }
        
        const SRNAS = SRNA.find(filter).sort({'product.name': 1}).limit(limit).skip(offset);
        const total = await commonController.countDocumentsIn(SRNA, filter);
        const lastPage = Math.floor(total / limit);
        if (limit * (page + 1) < total) hasMore = true;
        if (page > lastPage) {
            const err = new GraphQLError('You must select an available page number');
            err.status = 'No Content';
            err.statusCode = 204;
            throw err;
        } else {
        return {
            data: SRNAS,
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

/** the srnaController is referenced by the resolver of the SRNA web service */
export {srnaController};