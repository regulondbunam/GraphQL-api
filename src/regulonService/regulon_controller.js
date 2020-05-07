import {Regulon} from './regulon_model';
import buildFilter from 'mongodb-filter-object-parser';

/** Define a geneController. */
class geneController {
  /** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} advancedSearch contains all the arguments and operators
   * with which to build a search filter
   * @return {Object} return the results obtained by the filter
   */
  static getGenesBy(id, name, advancedSearch) {
    if (id !== undefined) {
      return Regulon.find({'_id': id});
    } else if (name !== undefined) {
      return Regulon.find({'transcriptionFactor.name': name});
    } else if (advancedSearch !== undefined) {
      const filter = buildFilter(advancedSearch);
      console.log(JSON.stringify(filter));
      return Regulon.find(filter);
    }
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export {geneController};
