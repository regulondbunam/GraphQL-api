import { TranscriptionTerminationSite } from './tts_model'

class transcriptionTerminationSiteController {
    static async getTTSByID(id) {
        return TranscriptionTerminationSite.findOne({"_id":id})
    }
    static async getAllTTSOfDataset(datasetId) {
        return TranscriptionTerminationSite.find({"datasetIds": datasetId})
    }
}

export { transcriptionTerminationSiteController }