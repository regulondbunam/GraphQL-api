/**
# [Sigmulon Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Sigmulon Service]

## Usage 

```javascript
import { sigmulonController } from './sigmulon_controller';
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

## [getSigmulonBy]

__Description:__ 

[Retrieve all documents that match with a query]


__Usage:__

```javascript
operonController.getSigmulonBy(args);
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

__Object:__ Sigmulon
Returns an object containing a response that will be sent to GraphQL
**/

import { Sigmulon } from './sigmulon_model';
import { commonController } from '../common/controller_common_functions';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

/** Define a geneController. */
class sigmulonController {
  static async getOperonBy(
    search,
    advancedSearch,
    limit = 10,
    page = 0,
    properties = ['sigmaFactor._id', 'sigmaFactor.name', 'sigmaFactor.synonyms', 'transcribedPromoters.name'],
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
        
        const Sigmulons = Sigmulon.find(filter).sort({'sigmaFactor.name': 1}).limit(limit).skip(offset);
        const total = await commonController.countDocumentsIn(Sigmulon, filter);
        const lastPage = Math.floor(total / limit);
        if (limit * (page + 1) < total) hasMore = true;
        if (page > lastPage) {
            const err = new GraphQLError('You must select an available page number');
            err.status = 'No Content';
            err.statusCode = 204;
            throw err;
        } else {
        return {
            data: Sigmulons,
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
export {sigmulonController};