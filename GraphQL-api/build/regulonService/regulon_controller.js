"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulonController = undefined;

var _regulon_model = require("./regulon_model");

var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");

/**
# [Regulon Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Regulon Service]

## Usage 

```javascript
import {regulonController} from './regulon_controller';
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
regulonController.getRegulonBy(args);
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

/** Define a geneController. */
class regulonController {
  static getRegulonBy(search, advancedSearch, limit = 0, page = 0) {
    const offset = page * limit;
    let filter;

    if (advancedSearch !== undefined) {
      filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
    } else if (search !== undefined) {
      filter = (0, _mongodbFilterObjectParser.searchFilter)(search);
    }

    console.log(JSON.stringify(filter));
    return _regulon_model.Regulon.find(filter).limit(limit).skip(offset);
  }

}
/** the geneController is referenced by the resolver of the Gene web service */


exports.regulonController = regulonController;