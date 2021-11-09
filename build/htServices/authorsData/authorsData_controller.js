"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authorsDataController = undefined;

var _authorsData_model = require("./authorsData_model");

class authorsDataController {
    static async getAuthorsDataOfDataset(datasetId) {
        return _authorsData_model.AuthorsData.find({ "datasetIds": datasetId });
    }

    static async getAuthorsDataById(_id) {
        return await _authorsData_model.AuthorsData.findOne({ "_id": _id });
    }
}

exports.authorsDataController = authorsDataController;