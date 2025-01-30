import { GrowthCondition } from './growthConditions_model';
import { growthConditionController } from './growthConditions_controller';
import { commonController } from '../common/controller_common_functions';

export const growthConditionResolvers = {
  Query: {
    getAllGrowthCondition: (root, { limit, page }) => commonController.getAll(GrowthCondition, limit, page, 'gcPhrase'),
    getGrowthConditionBy: (root, { search, advancedSearch, limit, page, properties, fullMatchOnly }) =>
      growthConditionController.getGrowthConditionBy(search, advancedSearch, limit, page, properties, fullMatchOnly),
  },
};