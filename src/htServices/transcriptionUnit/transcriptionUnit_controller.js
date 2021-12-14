import {TranscriptionUnit} from './transcriptionUnit_model'

class transcriptionUnitController {
    static async getTUByID(id) {
        return TranscriptionUnit.findOne({"_id":id})
    }
    static async getAllTransUnitsOfDataset(datasetId, limit, page) {
        const offset = page * limit
        return TranscriptionUnit.find({"datasetIds": datasetId}).limit(limit).skip(offset)
    }
}

export { transcriptionUnitController }