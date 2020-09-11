/**
# name: geneController.js version: 1.0

## synopsis

```javascript
commonController.getAll(collection, limit, page);
```

## description
Defines function that resolves the query and responses with all documents of
the Collection restricted by a limit and pagination

## arguments
In getAllGenes:
	* collection
	tells to function the mongoose model to be used
	* limit
	defines the page results showed (10 by default)
	* page
	select the current result page (0 by default)
	* sortValue
	tells the function the field by which the results will be sorted

In countDocuments:
	* collection
	tells to function the mongoose model to be used
	* filter
	needs the filter used by the query to get the count (by default is 
	empty {} por getAll count)

* __Return:__
Object - __ MongoDB-Response
Returns an object containing a response that will be sent to GraphQL

## code
**/

class commonController {
	static async getAll(collection, limit = 20, page = 0, sortValue) {
		// start to define limit and page values to be used on query
		const lim = (page + 1) * limit;
		const skip = page * limit;

		// variable definitions
		let hasMore = false,
			response,
			total,
			showedResult;

		// get query response from mongodb through mongoose
		const offset = page * limit;

		// if the limit is greater than 100, the data will not be sorted to reduce the response time,
		// if it is less than or equal to 100 the data will be ordered alphabetically by Gene.name
		if (limit > 100) {
			response = await collection.aggregate([ { $limit: limit }, { $skip: offset } ]).allowDiskUse(true);
		} else response = await collection.find({}).sort(sortValue).limit(limit).skip(offset);

		// get another data that be in Pagination Type
		total = await this.countDocumentsIn(collection);
		showedResult = limit * (page + 1);
		if (showedResult < total) hasMore = true;
		return {
			data: response,
			pagination: {
				limit: limit,
				currentPage: page,
				firstPage: 0,
				lastPage: Math.floor(total / limit),
				totalResults: total,
				hasNextPage: hasMore
			}
		};
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

export { commonController };
