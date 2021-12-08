import {TFBinding} from './tfBinding_model';

class tfBindingController {
    static async getAllTFBindingOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return TFBinding.find({"datasetIds": datasetId}).limit(limit).skip(offset);
    }

    static async getTFBindingById(_id) {
        return await TFBinding.findOne({"_id": _id})
    }
}

export { tfBindingController }