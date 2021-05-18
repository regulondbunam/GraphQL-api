import {HT_Samples} from "./ht_search_model"
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class htController {
    static async findOnSample(
        advSearch,
        limit,
        page
    ) {
        const offset = page * limit;
        const filter  = advancedSearchFilter(advSearch)
        return HT_Samples.find(filter).limit(limit).skip(offset)
    }
}

export {htController}