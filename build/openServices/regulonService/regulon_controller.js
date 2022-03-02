'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regulonController = undefined;

var _regulon_model = require('./regulon_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

var _controller_common_functions = require('../common/controller_common_functions');

var _graphql = require('graphql');

/** Define a geneController. */
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

class regulonController {
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
  static async getRegulonBy(search, advancedSearch, limit = 0, page = 0, properties = ["transcriptionFactor.id", "transcriptionFactor.name"], fullMatchOnly) {
    const offset = page * limit;
    let filter;
    let hasMore = false;
    if (advancedSearch !== undefined) {
      filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
    } else if (search !== undefined) {
      // filter = searchFilter(search);
      filter = (0, _mongodbFilterObjectParser.textSearchFilter)(search, properties, fullMatchOnly);
    }
    const Regulons = await _regulon_model.Regulon.find(filter).sort({ 'transcriptionFactor.name': 1 }).limit(limit).skip(offset);
    const total = await _controller_common_functions.commonController.countDocumentsIn(_regulon_model.Regulon, filter);
    const lastPage = Math.floor(total / limit);
    if (limit * (page + 1) < total) hasMore = true;
    if (page > lastPage) {
      const err = new _graphql.GraphQLError('You must select an available page number');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    } else {
      return {
        data: Regulons,
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

/** the regulonController is referenced by the resolver of the Regulon web service */
exports.regulonController = regulonController;