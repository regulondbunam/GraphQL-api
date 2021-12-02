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
    static async getAllTSSOfDataset(datasetId) {
        return _tss_model.TranscriptionStartSite.find({ "datasetIds": datasetId });
    }
}

exports.transcriptionStartSiteController = transcriptionStartSiteController;