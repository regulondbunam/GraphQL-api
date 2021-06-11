'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sigmulonController = undefined;

var _sigmulon_model = require('./sigmulon_model');

var _controller_common_functions = require('../common/controller_common_functions');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

var _graphql = require('graphql');

/** Define a geneController. */
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

class sigmulonController {
    static async getOperonBy(search, advancedSearch, limit = 10, page = 0, properties = ['sigmaFactor._id', 'sigmaFactor.name', 'sigmaFactor.synonyms', 'transcribedPromoters.name'], fullMatchOnly = false) {
        const offset = page * limit;
        let filter;
        let hasMore = false;
        if (advancedSearch !== undefined) {
            filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
        } else if (search !== undefined) {
            // filter = searchFilter(search);
            filter = (0, _mongodbFilterObjectParser.textSearchFilter)(search, properties, fullMatchOnly);
        }

        const Sigmulons = _sigmulon_model.Sigmulon.find(filter).sort({ 'sigmaFactor.name': 1 }).limit(limit).skip(offset);
        const total = await _controller_common_functions.commonController.countDocumentsIn(_sigmulon_model.Sigmulon, filter);
        const lastPage = Math.floor(total / limit);
        if (limit * (page + 1) < total) hasMore = true;
        if (page > lastPage) {
            const err = new _graphql.GraphQLError('You must select an available page number');
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
                    hasNextPage: hasMore
                }
            };
        }
    }
}

/** the sigmulonController is referenced by the resolver of the Sigmulon web service */
exports.sigmulonController = sigmulonController;