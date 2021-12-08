"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nlpGrowthConditionsController = undefined;

var _nlpGrowthConditions_model = require("./nlpGrowthConditions_model");

class nlpGrowthConditionsController {
    static async getNLPGrowthConditionById(datasetId) {
        return await _nlpGrowthConditions_model.NLPGrowthConditions.findOne({ "datasetIds": datasetId });
    }
}

exports.nlpGrowthConditionsController = nlpGrowthConditionsController;