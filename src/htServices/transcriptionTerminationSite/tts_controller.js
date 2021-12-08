import { TranscriptionTerminationSite } from './tts_model'

class transcriptionTerminationSiteController {
    static async getTTSByID(id) {
        return TranscriptionTerminationSite.findOne({"_id":id})
    }
    static async getAllTTSOfDataset(datasetId, limit, page) {
        const offset = page * limit
        return TranscriptionTerminationSite.find({"datasetIds": datasetId}).limit(limit).skip(offset)
    }
}

export { transcriptionTerminationSiteController }