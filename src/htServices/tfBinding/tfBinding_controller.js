import {TFBinding} from './tfBinding_model';

class tfBindingController {
    static async getAllTFBindingOfDataset(datasetId) {
        return TFBinding.find({"datasetIds": datasetId})
    }

    static async getTFBindingById(_id) {
        return await TFBinding.findOne({"_id": _id})
    }
}

export { tfBindingController }