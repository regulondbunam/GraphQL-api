"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tfBindingController = undefined;

var _tfBinding_model = require("./tfBinding_model");

class tfBindingController {
    static async getAllTFBindingOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return _tfBinding_model.TFBinding.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }

    static async getTFBindingById(_id) {
        return await _tfBinding_model.TFBinding.findOne({ "_id": _id });
    }
}

exports.tfBindingController = tfBindingController;