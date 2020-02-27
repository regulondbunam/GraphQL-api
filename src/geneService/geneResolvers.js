/** import the geneController that contains the resolver functions */
import { geneController } from './geneController';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range */
    listGenes: (root, { limit, page, leftEndPos, rightEndPos }) =>
      geneController.listGenes(limit, page, leftEndPos, rightEndPos),
    /** retrieves a specific Gene */
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name),
    /** retrieves a list of Genes defined by it name or id in geneInfo */
    getGenesBy: (root, { id, name }) => geneController.getGenesBy(id, name),
  },
};
