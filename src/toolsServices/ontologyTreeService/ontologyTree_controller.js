import {ontologyTree} from "./ontologyTree_model"
import { advancedSearchFilter, textSearchFilter } from 'mongodb-filter-object-parser';
import { GraphQLError } from 'graphql';

class ontologyTreeController {
  static async getTreeTopParents(treeType) {
      if (treeType == "GO")
        return ontologyTree.find({subclassOf:"RDBONTOLGON00001"});
      if (treeType == "MCO")
        return ontologyTree.find({subclassOf:"RDBONTOLMCO00005"});
      if (treeType == "Multifun")
        return ontologyTree.find({subclassOf:"RDBONTOLMTF00001"});
  }

  static async getSubclassesOfTermId(_id) {
      return ontologyTree.find({subclassOf:_id});
  }

  static async getSuperclassesOfTermId(_id) {
      return ontologyTree.find({subclasses:_id});
  }

  /*static async getAllTerms(depth) {
      return result = await ontologyTree.find({}, { projection: depthLimitProjection(depth) }).toArray();
  }*/

  static async getTermBy(search, advancedSearch, properties, fullMatchOnly) {
    let filter;
    if (advancedSearch !== undefined) {
      filter = advancedSearchFilter(advancedSearch);
    } else if (search !== undefined) {
      // filter = searchFilter(search);
      filter = textSearchFilter(search, properties, fullMatchOnly);
    }
    return ontologyTree.find(filter)
  }

  static async filterTermsNameBySearch(search) {
    if (search.length < 3){
      const err = new GraphQLError('You must send at least 3 letters in search');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    }else
    {
      const files = await ontologyTree.find(
        { name: { $regex: search, $options: 'i' } },
        'name'
      ).exec();
      const sources = files.map(result => result.name);
      const uniqueSources = [...new Set(sources)];
      return uniqueSources;
    }
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

export {ontologyTreeController}