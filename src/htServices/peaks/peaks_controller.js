import {Peaks} from './peaks_model';

class peaksController {
    static async getAllPeaksOfDataset(datasetId) {
        return Peaks.find({"datasetIds": datasetId})
    }
    static async getPeakById(_id) {
        return await Peaks.findOne({"_id": _id})
    }
}

export { peaksController }