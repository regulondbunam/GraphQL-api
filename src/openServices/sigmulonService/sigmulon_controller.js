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
    properties = ['operon.id', 'operon.name'],
    fullMatchOnly = false
)   {

    }
}

/** the geneController is referenced by the resolver of the Gene web service */
export {sigmulonController};