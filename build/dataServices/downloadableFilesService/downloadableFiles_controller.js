"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadableFilesController = undefined;

var _downloadableFiles_model = require("./downloadableFiles_model");

class downloadableFilesController {
    static async getDataOfFile(fileName) {
        return _downloadableFiles_model.DownloadableFiles.findOne({ "fileName": fileName });
    }
}

exports.downloadableFilesController = downloadableFilesController;