'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.geneResolvers = undefined;

var _gene_model = require('./gene_model');

var _gene_controller = require('./gene_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const geneResolvers = exports.geneResolvers = {
	Query: {
		/** obtains an array with Genes in a range
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
     */
		getAllGenes: (root, { limit, page }) => _gene_controller.geneController.getAllGenes(_gene_model.Gene, limit, page),
		/** retrieves a list of Genes defined by it name or id in geneInfo
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
    */
		getGenesBy: (root, { search, advancedSearch, limit, page, properties, organismName }) => _gene_controller.geneController.getGenesBy(search, advancedSearch, limit, page, properties, organismName)
	}
}; /** import the geneController that contains the resolver functions */