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
    static async getPeakById(_id) {
        return await _peaks_model.Peaks.findOne({ "_id": _id });
    }
}

exports.peaksController = peaksController;