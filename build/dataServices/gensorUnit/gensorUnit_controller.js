'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gensorUnitController = undefined;

var _gensorUnit_model = require('./gensorUnit_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

var _controller_common_functions = require('../common/controller_common_functions');

var _graphql = require('graphql');

/**
# [Gensor Unit Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Gensor Unit Services]

## Usage 

```javascript
import { gensorUnitController } from './gensorUnit_controller';
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

// import { GraphQLError } from 'graphql';
class gensorUnitController {
  /** Retrieve all documents that match with a query
     *  @param {String} search usable for text search on fields defined in "Properties" parameter. **e.g.**:
     *  "arad AND arac OR \"biosynthesis of macromolecules\""
     *  @param {String} advancedSearch usable for specific query by a "value[field]" syntax
     *  @param {Number} limit defines the page results showed (10 by default)
     *  @param {Number} page select the current result page (0 by default)
     *  @param {String} properties select the fields to be queried by "search" (by default 
     *  gensorUnit[id, name])
     *  @param {String} organismName usable for specific organismName queries
     *  @param {String} fullMatchOnly define if "search" will be Case Sensitive and cannot be a substring 
     *  (by default "false")
     */
  static async getGUsBy(search, advancedSearch, limit = 0, page = 0, properties = ['gensorUnit._id', 'gensorUnit.name'], organismName, fullMatchOnly = false) {
    const offset = page * limit;
    let filter;
    let hasMore = false;
    if (advancedSearch !== undefined) {
      filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
    } else if (search !== undefined) {
      // filter = searchFilter(search);
      filter = (0, _mongodbFilterObjectParser.textSearchFilter)(search, properties, fullMatchOnly);
    }
    if (organismName !== undefined) {
      organismName = new RegExp(organismName, 'i');
      const organismFilter = { $and: [{ 'organism.organismName': organismName }] };
      organismFilter.$and.push(filter);
      filter = organismFilter;
    }
    const GensorUnits = await _gensorUnit_model.GensorUnit.find(filter).sort({ 'gensorUnit.name': 1 }).limit(limit).skip(offset);
    const total = await _controller_common_functions.commonController.countDocumentsIn(_gensorUnit_model.GensorUnit, filter);
    const lastPage = Math.floor(total / limit);
    if (limit * (page + 1) < total) hasMore = true;
    if (page > lastPage) {
      const err = new _graphql.GraphQLError('You must select an available page number');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    } else {
      return {
        data: GensorUnits,
        pagination: {
          limit: limit,
          currentPage: page,
          firstPage: 0,
          lastPage: lastPage || 0,
          totalResults: total,
          hasNextPage: hasMore
        }
      };
    }
  }
}

/** the gensorUnit Controller is referenced by the resolver of the Gensor Unit web service */
exports.gensorUnitController = gensorUnitController;