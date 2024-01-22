import {MCOTree} from "./mcoTree_model"
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';

class mcoTreeController {
  static async getGoTerms() {
      return MCOTree.find({"subclassOf":"RDBONTOLGON00001"});
  }
  static async getSubclassesOfTermId(_id) {
      return MCOTree.find({subclassOf:_id});
  }
  /*static async getAllTerms(depth) {
      return result = await MCOTree.find({}, { projection: depthLimitProjection(depth) }).toArray();
  }*/
  static async getTermBy(search, advancedSearch, properties, fullMatchOnly) {
    let filter;
    if (advancedSearch !== undefined) {
      filter = advancedSearchFilter(advancedSearch);
    } else if (search !== undefined) {
      // filter = searchFilter(search);
      filter = textSearchFilter(search, properties, fullMatchOnly);
    }
    return MCOTree.find(filter)
  }
}

function depthLimitProjection(depth) {
    const projection = {};
    for (let i = 0; i <= depth; i++) {
      // Get projection for each level
      projection[`subclasses.${'subclasses.'.repeat(i)}`] = 1;
    }
    return projection;
  }

export {mcoTreeController}