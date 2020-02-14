import { Gene } from '../models/geneModel';

/**
 * @description services that retrives documentes in Gene Datamart
 * @example E
 * @license UNAM2020
 * @author Andres Loal
 */

function setFilter(rightEndPosition, leftEndPosition) {
  let filter = {};
  if (leftEndPosition !== undefined) {
    filter = {
      'geneInfo.leftEndPosition': {
        $gt: leftEndPosition,
      },
    };
  }
  if (rightEndPosition !== undefined) {
    filter = {
      'geneInfo.rightEndPosition': {
        $lt: rightEndPosition,
      },
    };
  }
  if (leftEndPosition !== undefined && rightEndPosition !== undefined) {
    filter = {
      $and: [
        {
          'geneInfo.leftEndPosition': {
            $gt: leftEndPosition,
          },
        },
        {
          'geneInfo.rightEndPosition': {
            $lt: rightEndPosition,
          },
        },
      ],
    };
  }
  return filter;
}

/** @constructor Define a class geneController */
class geneController {
  /** function that resolves the listGenes query with a Gene array
   * @param {int} limit set the number of genes that will be returned
   * @param {int} offset the page number that want to see
   * @param {int} leftEndPos leftEndPosition delimiter
   * @param {int} rightEndPos rightEndPosition delimiter
   */
  static listGenes(limit = 10, offset = 0, leftEndPos, rightEndPos) {
    /** checks if lower and upper limit has been defined, and returns the query by the
     * specified range in false case, only return the Gene array by the limit.
     */
    let totalCount;
    const filter = setFilter(rightEndPos, leftEndPos);
    const geneList = Gene.find(filter)
      .limit(limit)
      .skip(offset * limit);
    Gene.countDocuments(filter).exec(function(err, count) {
      totalCount = count;
      console.log(`Resultados totales: ${count}`);
    });
    geneList['total Count'] = totalCount;
    console.log(geneList);
    return geneList;
  }

  /** function that resolves the getGeneBy query with one only Gene Result
   * @param {String} id the id defined on the geneInfo object of Gene
   * @param {String} name the name defined on the geneInfo object of Gene
   */
  static getGeneBy(id, name) {
    /** checks if id has been defined, in false case, passes to resolve by name,
     * in case that both are defined, it resolves by the id */
    if (id !== undefined) {
      return Gene.findOne({ 'geneInfo.id': id });
    }
    if (name !== undefined) {
      return Gene.findOne({ 'geneInfo.name': name });
    }
  }
}

/** the geneController is referenced by the resolver of the Gene web service */
export { geneController };
