"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authorsDataController = undefined;

var _authorsData_model = require("./authorsData_model");

class authorsDataController {
    static async getAuthorsDataOfDataset(datasetId) {
        return Peaks.find({ "datasetId": datasetId });
    }
}

exports.authorsDataController = authorsDataController;