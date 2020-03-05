// import { GraphQLError } from 'graphql';
import { Gene } from './geneModel';
import {
  defineFilter,
  setLimitResults,
} from '../common/controllerCommonFunctions';

/**
 * @description services that retrives documentes in Gene Datamart
 * @example E
 * @license UNAM2020
 * @author Andres Loal
 */

/** @constructor Define a class geneController */
class geneController {
  /** function that resolves the listGenes query with a Gene array
   * @param {int} limit set the number of genes that will be returned
   * @param {int} offset the page number that want to see
   * @param {int} leftEndPos leftEndPosition delimiter
   * @param {int} rightEndPos rightEndPosition delimiter
   */
  static async getAllGenes(limit = 0, page = 0, leftEndPos, rightEndPos) {
    /** checks if lower and upper limit has been defined, and returns the query by the
     * specified range in false case, only return the Gene array by the limit.
     */
    const filter = defineFilter(rightEndPos, leftEndPos);
    const lim = setLimitResults(Gene, limit, filter);
    const offset = page * limit;
    const geneList = await Gene.find(filter)
      .limit(lim)
      .skip(offset);
    return geneList;
  }

  /** function that resolves the getGeneBy query with an array Gene Result
   * @param {String} id the id defined on the geneInfo object of Gene
   * @param {String} name the name defined on the geneInfo object of Gene
   */
  static getGenesBy(id, name) {
    if (id !== undefined) {
      return Gene.find({ 'geneInfo.id': id });
    }
    return Gene.find({ 'geneInfo.name': name });
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export { geneController };
