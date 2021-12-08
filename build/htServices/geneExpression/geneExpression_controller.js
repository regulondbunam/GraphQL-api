"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geneExpressionController = undefined;

var _geneExpression_model = require("./geneExpression_model");

class geneExpressionController {
    static async getAllGeneExpressionOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _geneExpression_model.GeneExpression.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }
    static async getGeneExpressionById(_id) {
        return await _geneExpression_model.GeneExpression.findOne({ "_id": _id });
    }
}

exports.geneExpressionController = geneExpressionController;