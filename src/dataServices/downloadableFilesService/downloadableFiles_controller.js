import {DownloadableFiles} from "./downloadableFiles_model"

class downloadableFilesController {
    static async getDataOfFile(fileName) {
        return DownloadableFiles.findOne({"fileName": fileName})
    }
}

export {downloadableFilesController}