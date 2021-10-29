import {TFBinding} from './tfBinding_model';

class tfBindingController {
    static async getAllTFBindingOfDataset(datasetId) {
        return TFBinding.find({"datasetIds": datasetId})
    }
}

export { tfBindingController }