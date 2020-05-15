import {Regulon} from './regulon_model';
import {advancedSearchFilter, searchFilter} from 'mongodb-filter-object-parser';

/** Define a geneController. */
class geneController {
  /** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} search contains all argument and operators for search
   * query by construct a text search filter
   * @param {String} advancedSearch contains all the arguments and operators
   * to make an advanced search after build a query filter
   * @param {Number} limit the maximum of documents that query returns
   * can not be passed and get all documents with the query
   * @param {Number} page allows control on skip function of the query
   * @return {Object} return the results obtained by the filter
   */
  static getGenesBy(search, advancedSearch, limit = 0, page = 0) {
    if (search !== undefined) {
      const filter = searchFilter(search);
      console.log(JSON.stringify(filter));
      return Regulon.find(filter).limit(limit).skip(offset);
    } else if (advancedSearch !== undefined) {
      const filter = advancedSearchFilter(advancedSearch);
      console.log(JSON.stringify(filter));
      return Regulon.find(filter).limit(limit).skip(offset);
    }
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export {geneController};
