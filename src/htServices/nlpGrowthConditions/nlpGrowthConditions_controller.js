import { NLPGrowthConditions } from './nlpGrowthConditions_model';
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class nlpGrowthConditionsController {
    static async getNLPGrowthConditionById(datasetId) {
        return await NLPGrowthConditions.findOne({"datasetIds": datasetId})
    }

    static async getNLPGrowthConditionBySearch(advancedSearch) {
        let filter = advancedSearchFilter(advancedSearch)
        return await NLPGrowthConditions.find(filter)
    }
}

export { nlpGrowthConditionsController }