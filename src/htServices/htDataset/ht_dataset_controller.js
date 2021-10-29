import {HTDataset} from "./ht_dataset_model"
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class htDatasetController {
    static async getDatasetsFromSearch(advSearch) {
        const filter  = advancedSearchFilter(advSearch)
        return HTDataset.find(filter)
    }

    static getDatasetByID(datasetID) {
        return HTDataset.findOne({"datasetID": datasetID})
    }
}

export { htDatasetController }