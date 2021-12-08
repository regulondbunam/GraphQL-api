"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionStartSiteController = undefined;

var _tss_model = require("./tss_model");

class transcriptionStartSiteController {
    static async getTSSByID(id) {
        return _tss_model.TranscriptionStartSite.findOne({ "_id": id });
    }
    static async getAllTSSOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _tss_model.TranscriptionStartSite.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }
}

exports.transcriptionStartSiteController = transcriptionStartSiteController;