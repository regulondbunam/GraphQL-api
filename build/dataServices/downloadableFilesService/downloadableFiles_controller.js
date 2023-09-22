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

    static async listAllFileNames() {
        const files = await _downloadableFiles_model.DownloadableFiles.find({}, 'fileName').exec();
        return files.map(resultado => resultado.fileName);
    }
}

exports.downloadableFilesController = downloadableFilesController;