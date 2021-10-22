import {Peaks} from './peaks_model';

class peaksController {
    static async getAllPeaksOfDataset(datasetId) {
        return Peaks.find({"datasetId": datasetId})
    }
}

export { peaksController }