/** import the geneController that contains the resolver functions */
import { geneController } from '../controllers/geneController';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range */
    listGenes: (root, { limit, offset, leftEndPos, rightEndPos }) =>
      geneController.listGenes(limit, offset, leftEndPos, rightEndPos),
    /** retrieves a specific Gene */
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name),
  },
};
