// import { GraphQLError } from 'graphql';
import { Gene } from './gene_model';
import { advancedSearchFilter, searchFilter } from 'mongodb-filter-object-parser';
import { textSearch } from '../../lib/textSearchFilter';
import { commonController } from '../common/controller_common_functions';
import { GraphQLError } from 'graphql';

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

	static async getGenesBy(
		search,
		advancedSearch,
		limit = 0,
		page = 0,
		properties = [ 'geneInfo.id', 'geneInfo.name', 'geneInfo.synonyms', 'products.name' ],
		organismName,
		fullMatchOnly = false
	) {
		const offset = page * limit;
		let filter;
		let hasMore = false;
		if (advancedSearch !== undefined) {
			filter = advancedSearchFilter(advancedSearch);
		} else if (search !== undefined) {
			//filter = searchFilter(search);
			filter = textSearch(search, properties, fullMatchOnly);
		}
		if (organismName !== undefined) {
			organismName = new RegExp(organismName, 'i');
			let organismFilter = { $and: [ { organismName: organismName } ] };
			organismFilter.$and.push(filter);
			filter = organismFilter;
		}
		const Genes = Gene.find(filter).sort({ 'geneInfo.name': 1 }).limit(limit).skip(offset);
		const total = await commonController.countDocumentsIn(Gene, filter);
		const lastPage = Math.floor(total / limit);
		if (limit * (page + 1) < total) hasMore = true;
		if (page > lastPage) {
			const err = new GraphQLError('You must select an available page number');
			err.status = 'No Content';
			err.statusCode = 204;
			throw err;
		} else
			return {
				data: Genes,
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

/** the geneController is referenced by the resolver of the Gene web service */
export { geneController };
