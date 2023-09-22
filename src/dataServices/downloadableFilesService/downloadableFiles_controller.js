import {DownloadableFiles} from "./downloadableFiles_model"

class downloadableFilesController {
    static async getDataOfFile(fileName) {
        return DownloadableFiles.findOne({"fileName": fileName})
    }

    static async listAllFileNames() {
        const files = await DownloadableFiles.find({}, 'fileName').exec();
        return files.map(resultado => resultado.fileName)
    }
}

export {downloadableFilesController}