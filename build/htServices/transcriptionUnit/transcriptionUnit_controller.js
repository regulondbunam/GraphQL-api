"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionUnitController = undefined;

var _transcriptionUnit_model = require("./transcriptionUnit_model");

class transcriptionUnitController {
    static async getTUByID(id) {
        console.log(id);
        return _transcriptionUnit_model.TranscriptionUnit.findOne({ "_id": id });
    }
    static async getAllTransUnitsOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _transcriptionUnit_model.TranscriptionUnit.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }
}

exports.transcriptionUnitController = transcriptionUnitController;