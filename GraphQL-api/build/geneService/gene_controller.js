'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.geneController = undefined;

var _gene_model = require('./gene_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

var _textSearchFilter = require('../../lib/textSearchFilter');

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
	static getGenesBy(search, advancedSearch, limit = 0, page = 0, properties = ['geneInfo.id', 'geneInfo.name', 'geneInfo.synonyms', 'products.name'], organismName) {
		const offset = page * limit;
		let filter;
		if (advancedSearch !== undefined) {
			filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
		} else if (search !== undefined) {
			//filter = searchFilter(search);
			filter = (0, _textSearchFilter.textSearch)(search, properties);
		}
		if (organismName !== undefined) {
			organismName = new RegExp(organismName, 'i');
			let organismFilter = { $and: [{ organismName: organismName }] };
			organismFilter.$and.push(filter);
			filter = organismFilter;
		}
		console.log(JSON.stringify(filter));
		return _gene_model.Gene.find(filter).sort({ 'geneInfo.name': 1 }).limit(limit).skip(offset);
	}

	static countGenesBy(search, advancedSearch, properties = ['geneInfo.id', 'geneInfo.name', 'geneInfo.synonyms', 'products.name']) {
		let filter;
		if (advancedSearch !== undefined) {
			filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
		} else if (search !== undefined) {
			filter = (0, _textSearchFilter.textSearch)(search, properties);
		}
		return new Promise((resolve, object) => {
			_gene_model.Gene.countDocuments(filter, (error, count) => {
				if (error) rejects(error);else resolve(count);
			});
		});
	}
}

/** the geneController is referenced by the resolver of the Gene web service */
// import { GraphQLError } from 'graphql';
exports.geneController = geneController;