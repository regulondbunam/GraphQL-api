import { Peaks } from './peaks_model';

class peaksController {
    static async getAllPeaksOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return Peaks.find({"datasetIds": datasetId}).limit(limit).skip(offset);
    }
    static async getPeakById(_id) {
        return await Peaks.findOne({"_id": _id})
    }
}

export { peaksController }