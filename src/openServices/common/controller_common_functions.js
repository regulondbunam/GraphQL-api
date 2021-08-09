/**
# Controller Common Functions
	
## Description

Defines function that resolves the query and responses with all documents of
the Collection restricted by a limit and pagination

## Usage 

```javascript
import {commonController} from '../common/controller_common_functions';
```

## Category

RegulonDB datamart web service controller

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

/**
	
# Functions description

## getAll

__Description:__ 

Retrieve a object with all the documents containing in selected collection


__Usage:__

```javascript
commonController.getAll(collection, limit, page, sortValue);
```

__Input arguments/parameters:__ 

__collection:__ tells to function the mongoose model to be used
__limit:__ defines the page results showed (10 by default)
__page:__ select the current result page (0 by default)
__sortValue:__ tells the function the field by which the results will be sorted

__Return:__ 

__Object:__ unnamed
Returns an object containing a response that will be sent to GraphQL


## countDocumentsIn

__Description:__ 

Get the count document of the selected collection


__Usage:__

```javascript
commonController.getAll(collection, filter);
```

__Input arguments/parameters:__ 

__collection:__ tells to function the mongoose model to be used
__filter:__ needs the filter used by the query to get the count (by default is
empty {} por getAll count)

__Return:__ 

__int:__ count
Contains document count
**/

import { GraphQLError } from 'graphql';

class commonController {
  static async getAll(collection, limit = 10, page = 0, sortValue) {
    // variable definitions
    let hasMore = false;
    let response;

    // get query response from mongodb through mongoose
    const offset = page * limit;

    // if the limit is greater than 100, the data will not be sorted to
    // reduce the response time; if it is less than or equal to 100 the
    // data will be ordered alphabetically by sortValue
    if (limit > 100) {
      response = await collection
          .aggregate([
            {
              $limit: limit,
            },
            {
              $skip: offset,
            },
          ])
          .allowDiskUse(true);
    } else response = await collection.find({}).sort(sortValue).limit(limit).skip(offset);

    // get another data that be in Pagination Type
    const total = await this.countDocumentsIn(collection);
    const showedResult = limit * (page + 1);
    const lastPage = Math.floor(total / limit);
    if (showedResult < total) hasMore = true;
    if (page > lastPage) {
      const err = new GraphQLError('You must select an available page number');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    } else {
      return {
        data: response,
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

  static countDocumentsIn(collection, filter = {}) {
    return new Promise((resolve, object) => {
      collection.countDocuments(filter, (error, count) => {
        if (error) rejects(error);
        else resolve(count);
      });
    });
  }
}

export {commonController};
