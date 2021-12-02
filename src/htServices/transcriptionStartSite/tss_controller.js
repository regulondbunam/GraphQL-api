import { TranscriptionStartSite } from './tss_model'

class transcriptionStartSiteController {
    static async getTSSByID(id) {
        return TranscriptionStartSite.findOne({"_id":id})
    }
    static async getAllTSSOfDataset(datasetId) {
        return TranscriptionStartSite.find({"datasetIds": datasetId})
    }
}

export { transcriptionStartSiteController }