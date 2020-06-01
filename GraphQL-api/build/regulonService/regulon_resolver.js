"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geneResolvers = undefined;

var _regulon_model = require("./regulon_model");

var _regulon_controller = require("./regulon_controller");

var _controller_common_functions = require("../common/controller_common_functions");

/** import the regulonController that contains the resolver functions */
const geneResolvers = exports.geneResolvers = {
  Query: {
    /** obtains an array with regulon docs
       * @return {JSON} retrieves the result of the query
       * @param {undefined} root description will added asa
       */
    getAllRegulon: (root, {
      limit,
      page
    }) => _controller_common_functions.commonController.getAll(_regulon_model.Regulon, limit, page),

    /** retrieves a list of Regulon docs defined by an advancedSearch string
       * @return {JSON} retrieves the result of the query
       * @param {undefined} root description will added asa
      */
    getRegulonBy: (root, {
      search,
      advancedSearch,
      limit,
      page
    }) => _regulon_controller.regulonController.getRegulonBy(search, advancedSearch, limit, page)
  }
};