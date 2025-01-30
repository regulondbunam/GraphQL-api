import { GrowthCondition } from './growthConditions_model';
import { commonController } from '../common/controller_common_functions';
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

class growthConditionController {
    static async getGrowthConditionBy(
        search,
        advancedSearch,
        limit = 0,
        page = 0,
        properties = ['_id', 'gcPhrase'],
        fullMatchOnly = false
    ) {
        const offset = page * limit;
        let filter;
        let hasMore = false;

        if (advancedSearch !== undefined) {
            filter = advancedSearchFilter(advancedSearch);
        } else if (search !== undefined) {
            filter = textSearchFilter(search, properties, fullMatchOnly);
        }

        const growthConditions = await GrowthCondition.find(filter).sort({ 'gcPhrase': 1 }).limit(limit).skip(offset);
        const total = await commonController.countDocumentsIn(GrowthCondition, filter);
        let lastPage = Math.floor(total / limit);
        if (limit * (page + 1) < total) hasMore = true;
        if (page > lastPage) {
            throw new GraphQLError('Page number exceeds available results.');
        }

        return {
            data: growthConditions,
            pagination: {
                limit,
                currentPage: page,
                firstPage: 0,
                lastPage: lastPage || 0,
                totalResults: total,
                hasNextPage: hasMore,
            },
        };
    }
}

export { growthConditionController };