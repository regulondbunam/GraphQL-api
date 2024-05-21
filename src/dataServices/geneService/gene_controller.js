/**
# [Gene Service Controller]

## Description

[Defines functions to resolve GraphQL queries of Gene Service]

## Usage

```javascript
import {geneController} from './gene_controller';
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
import { Gene } from './gene_model';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { commonController } from '../common/controller_common_functions';
import { GraphQLError } from 'graphql';

class geneController {
  /** Retrieve all documents that match with a query
     *  @param {String} search usable for text search on fields defined in "Properties" parameter. **e.g.**:
     *  "arad AND arac OR \"biosynthesis of macromolecules\""
     *  @param {String} advancedSearch usable for specific query by a "value[field]" syntax
     *  @param {Number} limit defines the page results showed (10 by default)
     *  @param {Number} page select the current result page (0 by default)
     *  @param {String} properties select the fields to be queried by "search" (by default 
     *  geneInfo[id, name, synonyms] and products[name])
     *  @param {String} organismName usable for specific organismName queries
     *  @param {String} fullMatchOnly define if "search" will be Case Sensitive and cannot be a substring 
     *  (by default "false")
     */
  static async getGenesBy(
      search,
      advancedSearch,
      limit = 0,
      page = 0,
      properties = ['gene._id', 'gene.name', 'gene.synonyms', 'gene.type', 'gene.bnumber', 'products.name', 'products.abbreviatedName'],
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
      filter = textSearchFilter(search, properties, fullMatchOnly);
    }
    if (organismName !== undefined) {
      organismName = new RegExp(organismName, 'i');
      const organismFilter = {$and: [{'organism.organismName': organismName}]};
      organismFilter.$and.push(filter);
      filter = organismFilter;
    }
    const Genes = await Gene.find(filter).sort({'gene.name': 1}).limit(limit).skip(offset);
    const total = await commonController.countDocumentsIn(Gene, filter);
    const lastPage = 0
    if (limit > 0) {
      lastPage = Math.floor(total / limit);
    }
    if (limit * (page + 1) < total) hasMore = true;
    if (page > lastPage) {
      const err = new GraphQLError('You must select an available page number');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    } else {
      return {
        data: Genes,
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

/** the geneController is referenced by the resolver of the Gene web service */
export {geneController};
