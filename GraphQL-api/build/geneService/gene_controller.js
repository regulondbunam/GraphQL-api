'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.geneController = undefined;

var _gene_model = require('./gene_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

var _textSearchFilter = require('../../lib/textSearchFilter');

var _controller_common_functions = require('../common/controller_common_functions');

var _graphql = require('graphql');

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
	static async getAllGenes(collection, limit = 0, page = 0) {
		/** checks if lower and upper limit has been defined, and returns
  * the query by the specified range in false case, only return
  * the Gene array by the limit.
  */
		// const filter = defineFilter(leftEndPos, rightEndPos);
		const lim = (page + 1) * limit;
		const skip = page * limit;
		let hasMore = false;
		(0, _controller_common_functions.setLimitResults)(collection, limit);
		let response;
		if (limit > 0) {
			const offset = page * limit;
			response = await collection.find({}).sort({ 'geneInfo.name': 1 }).limit(limit).skip(offset);
		} else response = await collection.aggregate([{ $sort: { 'geneInfo.name': 1 } }]).allowDiskUse(true);
		const total = await this.countGenesBy({});
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

	static async getGenesBy(search, advancedSearch, limit = 0, page = 0, properties = ['geneInfo.id', 'geneInfo.name', 'geneInfo.synonyms', 'products.name'], organismName) {
		const offset = page * limit;
		let filter;
		let hasMore = false;
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
		const Genes = _gene_model.Gene.find(filter).sort({ 'geneInfo.name': 1 }).limit(limit).skip(offset);
		const total = await this.countGenesBy(filter);
		const lastPage = Math.floor(total / limit);
		if (limit * (page + 1) < total) hasMore = true;
		if (page > lastPage) {
			const err = new _graphql.GraphQLError('You must select an available page number');
			err.status = 'No Content';
			err.statusCode = 204;
			throw err;
		} else return {
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

	static countGenesBy(filter = {}) {
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