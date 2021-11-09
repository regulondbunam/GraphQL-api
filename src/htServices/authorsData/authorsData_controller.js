import {AuthorsData} from './authorsData_model';

class authorsDataController {
    static async getAuthorsDataOfDataset(datasetId) {
        return AuthorsData.find({"datasetIds": datasetId})
    }
    
    static async getAuthorsDataById(_id) {
        return await AuthorsData.findOne({"_id": _id})
    }
}

export { authorsDataController }