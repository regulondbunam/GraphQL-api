// import { GraphQLError } from 'graphql';
import {Gene} from './gene_model';
import { advancedSearchFilter, simpleSearchFilter } from 'mongodb-filter-object-parser';

/** Define a geneController. */
class geneController {
  /** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} id the id defined on the geneInfo object of Gene
   * @param {String} name the name defined on the geneInfo object of Gene
   * @param {String} advancedSearch contains all the arguments and operators
   * with which to build a search filter
   * @return {Object} return the results of the query identified by the
   *                  ID or name
   */
  static getGenesBy(simpleSearch, advancedSearch, limit = 0, page = 0) {
    const offset = page * limit;
    if (simpleSearch !== undefined) {
      const filter = simpleSearchFilter(simpleSearch);
      //console.log(JSON.stringify(filter));
      return Gene.find(filter).limit(limit).skip(offset);
    }else if (advancedSearch !== undefined) {
      //const filter = advancedSearchFilter(advancedSearch);
      console.log(JSON.stringify(filter));
      return Gene.find(filter).limit(limit).skip(offset);
    }
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export {geneController};
