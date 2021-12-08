"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionTerminationSiteController = undefined;

var _tts_model = require("./tts_model");

class transcriptionTerminationSiteController {
    static async getTTSByID(id) {
        return _tts_model.TranscriptionTerminationSite.findOne({ "_id": id });
    }
    static async getAllTTSOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _tts_model.TranscriptionTerminationSite.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }
}

exports.transcriptionTerminationSiteController = transcriptionTerminationSiteController;