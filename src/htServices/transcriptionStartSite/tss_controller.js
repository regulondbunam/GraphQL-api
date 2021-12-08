import { TranscriptionStartSite } from './tss_model'

class transcriptionStartSiteController {
    static async getTSSByID(id) {
        return TranscriptionStartSite.findOne({"_id":id})
    }
    static async getAllTSSOfDataset(datasetId, limit, page) {
        const offset = page * limit
        return TranscriptionStartSite.find({"datasetIds": datasetId}).limit(limit).skip(offset)
    }
}

export { transcriptionStartSiteController }