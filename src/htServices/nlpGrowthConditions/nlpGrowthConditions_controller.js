import { NLPGrowthConditions } from './nlpGrowthConditions_model';

class nlpGrowthConditionsController {
    static async getNLPGrowthConditionById(datasetId) {
        return await NLPGrowthConditions.findOne({"datasetIds": datasetId})
    }
}

export { nlpGrowthConditionsController }