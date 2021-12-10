'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nlpGrowthConditionsController = undefined;

var _nlpGrowthConditions_model = require('./nlpGrowthConditions_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

class nlpGrowthConditionsController {
    static async getNLPGrowthConditionById(datasetId) {
        return await _nlpGrowthConditions_model.NLPGrowthConditions.findOne({ "datasetIds": datasetId });
    }

    static async getNLPGrowthConditionBySearch(advancedSearch) {
        let filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
        return await _nlpGrowthConditions_model.NLPGrowthConditions.find(filter);
    }
}

exports.nlpGrowthConditionsController = nlpGrowthConditionsController;