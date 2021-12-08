"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.peaksController = undefined;

var _peaks_model = require("./peaks_model");

class peaksController {
    static async getAllPeaksOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _peaks_model.Peaks.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }
    static async getPeakById(_id) {
        return await _peaks_model.Peaks.findOne({ "_id": _id });
    }
}

exports.peaksController = peaksController;