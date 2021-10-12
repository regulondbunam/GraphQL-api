import {HTDataset} from "./ht_dataset_model"
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class htDatasetController {
    static async getDatasetsFromSearch(advSearch) {
        const filter  = advancedSearchFilter(advSearch)
        return HTDataset.find(filter)
    }
}

export {htDatasetController}