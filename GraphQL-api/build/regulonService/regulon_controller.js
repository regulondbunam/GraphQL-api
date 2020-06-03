'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.regulonController = undefined;

var _regulon_model = require('./regulon_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

/** Define a geneController. */
class regulonController {
	/** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} search contains all argument and operators for search
   * query by construct a text search filter
   * @param {String} advancedSearch contains all the arguments and operators
   * to make an advanced search after build a query filter
   * @param {Number} limit the maximum of documents that query returns
   * can not be passed and get all documents with the query
   * @param {Number} page allows control on skip function of the query
   * @return {Object} return the results obtained by the filter
   */
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