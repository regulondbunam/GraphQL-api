/** import the geneController that contains the resolver functions */
import { geneController } from './geneController';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range */
    getAllGenes: (root, { limit, page, leftEndPos, rightEndPos }) =>
      geneController.getAllGenes(limit, page, leftEndPos, rightEndPos),
    /** retrieves a list of Genes defined by it name or id in geneInfo */
    getGenesBy: (root, { id, name }) => geneController.getGenesBy(id, name),
    getGenesByArgs: (root, { id, name, productName, strand }) =>
      geneController.getGenesByArgs(id, name, productName, strand),
  },
};
