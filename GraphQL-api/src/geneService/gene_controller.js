// import { GraphQLError } from 'graphql';
import { Gene } from './gene_model';
import { advancedSearchFilter, searchFilter } from 'mongodb-filter-object-parser';

/** Define a geneController. */
class geneController {
	/** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} search contains all argument and operators for search
   * query by construct a text search filter
   * @param {String} advancedSearch contains all the arguments and operators
   * to make an advanced search after build a query filter
   * @param {Number} limit the maximum of documents that query returns
   * can not be passed and get all documents with the query
   * @param {Number} page allows control on skip function of the query
   * @return {Object} return the results of the query identified by the
   *                  ID or name
   */
	static getGenesBy(search, advancedSearch, limit = 0, page = 0, organismName) {
		const offset = page * limit;
		let filter;
		if (advancedSearch !== undefined) {
			filter = advancedSearchFilter(advancedSearch);
		} else if (search !== undefined) {
			filter = searchFilter(search);
		}
		if (organismName !== undefined) {
			organismName = new RegExp(organismName, 'i');
			let organismFilter = { $and: [ { organismName: organismName } ] };
			organismFilter.$and.push(filter);
			filter = organismFilter;
		}
		console.log(JSON.stringify(filter));
		return Gene.find(filter).sort({ 'geneInfo.name': 1 }).limit(limit).skip(offset);
	}

	static countGenesBy(search, advancedSearch) {
		let filter;
		if (advancedSearch !== undefined) {
			filter = advancedSearchFilter(advancedSearch);
		} else if (search !== undefined) {
			filter = searchFilter(search);
		}
		return new Promise((resolve, object) => {
			Gene.countDocuments(filter, (error, count) => {
				if (error) rejects(error);
				else resolve(count);
			});
		});
	}
}

/** the geneController is referenced by the resolver of the Gene web service */
export { geneController };
