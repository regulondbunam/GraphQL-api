/** import the geneController that contains the resolver functions */
import {geneController} from './gene_controller';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
     */
    getAllGenes: (root, {limit, page, leftEndPos, rightEndPos}) =>
      geneController.getAllGenes(limit, page, leftEndPos, rightEndPos),
    /** retrieves a list of Genes defined by it name or id in geneInfo
     * @return {JSON} retrieves the result of the query
     * @param {undefined} root description will added asa
    */
    getGenesBy: (root, {id, name}) => geneController.getGenesBy(id, name),
  },
};
