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

/**
	
# Functions description

## getGenesBy

__Description:__ 

Retrieve all documents that match with a query


__Usage:__

```javascript
geneController.getGenesBy(args);
```

__Input arguments/parameters:__ 

__search:__ usable for text search on fields defined in "Properties" parameter. **e.g.**:
    "arad AND arac OR \"biosynthesis of macromolecules\""
__advancedSearch]:__ usable for specific query by a "value[field]" syntax
__limit:__ defines the page results showed (10 by default)
__page:__ select the current result page (0 by default)
__properties:__ select the fields to be queried by "search" (by default
    geneInfo[id, name, synonyms] and products[name])
__organismName:__ usable for specific organismName queries
__fullMatchOnly:__ define if "search" will be Case Sensitive and cannot be a substring
    (by default "false")

__Return:__ 

__Object:__ Genes
Returns an object containing a response that will be sent to GraphQL
**/

// import { GraphQLError } from 'graphql';
import { Gene } from './gene_model';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { commonController } from '../common/controller_common_functions';
import { GraphQLError } from 'graphql';

class geneController {
  static async getGenesBy(
      search,
      advancedSearch,
      limit = 10,
      page = 0,
      properties = ['gene.id', 'gene.name', 'gene.synonyms', 'gene.type', 'products.name'],
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
    const Genes = Gene.find(filter).sort({'gene.name': 1}).limit(limit).skip(offset);
    const total = await commonController.countDocumentsIn(Gene, filter);
    const lastPage = Math.floor(total / limit);
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
          lastPage: lastPage,
          totalResults: total,
          hasNextPage: hasMore,
        },
      };
    }
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export {geneController};
