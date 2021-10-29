"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.peaksController = undefined;

var _peaks_model = require("./peaks_model");

class peaksController {
    static async getAllPeaksOfDataset(datasetId) {
        return _peaks_model.Peaks.find({ "datasetIds": datasetId });
    }
}

exports.peaksController = peaksController;