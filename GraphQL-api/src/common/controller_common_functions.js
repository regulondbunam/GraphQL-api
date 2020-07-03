class commonController {
	/** function that resolves the query and responses with all documents of
   * the Collection restricted by a limit and pagination
   * @param {Collection} collection is the collection where the query
   * needs to be resolved
   * @param {number} limit set the number of genes that will be returned
   * @param {number} page the page number that want to see
   * @param {String} sortValue value by which the response will be sorted
   */
	static async getAll(collection, limit = 0, page = 0, sortValue) {
		const lim = (page + 1) * limit;
		const skip = page * limit;
		let hasMore = false,
			response;
		if (limit > 0) {
			const offset = page * limit;
			response = await collection.find({}).sort(sortValue).limit(limit).skip(offset);
		} else response = await collection.aggregate([ { $sort: { sortValue: 1 } } ]).allowDiskUse(true);
		const total = await this.countDocumentsIn(collection, {});
		const showedResult = limit * (page + 1);
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

	static countDocumentsIn(collection, filter) {
		return new Promise((resolve, object) => {
			collection.countDocuments(filter, (error, count) => {
				if (error) rejects(error);
				else resolve(count);
			});
		});
	}
}

export { commonController };
