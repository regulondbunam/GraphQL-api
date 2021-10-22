import {TFBinding} from './tfBinding_model';

class tfBindingController {
    static async getAllTFBindingOfDataset(datasetId) {
        return TFBinding.find({"datasetId": datasetId})
    }
}

export { tfBindingController }