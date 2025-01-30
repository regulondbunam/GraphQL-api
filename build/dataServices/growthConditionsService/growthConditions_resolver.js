"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.growthConditionResolvers = void 0;
var _growthConditions_model = require("./growthConditions_model");
var _growthConditions_controller = require("./growthConditions_controller");
var _controller_common_functions = require("../common/controller_common_functions");
var growthConditionResolvers = exports.growthConditionResolvers = {
  Query: {
    getAllGrowthCondition: function getAllGrowthCondition(root, _ref) {
      var limit = _ref.limit,
        page = _ref.page;
      return _controller_common_functions.commonController.getAll(_growthConditions_model.GrowthCondition, limit, page, 'gcPhrase');
    },
    getGrowthConditionBy: function getGrowthConditionBy(root, _ref2) {
      var search = _ref2.search,
        advancedSearch = _ref2.advancedSearch,
        limit = _ref2.limit,
        page = _ref2.page,
        properties = _ref2.properties,
        fullMatchOnly = _ref2.fullMatchOnly;
      return _growthConditions_controller.growthConditionController.getGrowthConditionBy(search, advancedSearch, limit, page, properties, fullMatchOnly);
    }
  }
};