"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulonController = undefined;

var _regulon_model = require("./regulon_model");

var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");

/**
# name: regulon_Controller.js version: 1.0

## synopsis

```javascript
regulonController.getRegulonBy(search, properties, fullMatchOnly);
```

## description
Defines functions to resolve GraphQL queries of Gene Service

## arguments
	* search
		usable for text search on fields defined in "Properties" parameter. **e.g.**: "arad AND arac OR \"biosynthesis of macromolecules\""
	* advancedSearch
	  usable for specific query by a "value[field]" syntax
	* limit
	  defines the page results showed (10 by default)
	* page
	  select the current result page (0 by default)
	* properties
	  select the fields to be queried by "search" (by default geneInfo[id, name, synonyms] and products[name])
	* organismName
	  usable for specific organismName queries
	* fullMatchOnly
	  define if "search" will be Case Sensitive and cannot be a substring (by default "false")

* __Return:__
Object - __ Genes
Returns an object containing a response that will be sent to GraphQL

## code
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