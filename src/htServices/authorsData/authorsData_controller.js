import {AuthorsData} from './authorsData_model';

class authorsDataController {
    static async getAuthorsDataOfDataset(datasetId) {
        return Peaks.find({"datasetId": datasetId})
    }
}

export { authorsDataController }