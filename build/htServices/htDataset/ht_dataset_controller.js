"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htDatasetController = undefined;

var _ht_dataset_model = require("./ht_dataset_model");

var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");

class htDatasetController {
    static async getDatasetsFromSearch(advSearch) {
        const filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advSearch);
        return _ht_dataset_model.HTDataset.find(filter);
    }

    static getDatasetByID(datasetID) {
        return _ht_dataset_model.HTDataset.findOne({ "datasetID": datasetID });
    }
}

exports.htDatasetController = htDatasetController;