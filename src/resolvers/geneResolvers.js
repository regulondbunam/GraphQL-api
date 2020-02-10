import { geneController } from '../Controller/geneController';

export const geneResolvers = {
  Query: {
    // obtains an array with Genes in a range
    listGenes: (root, { limit, offset, lowerLimit, upperLimit }) =>
      geneController.listGenes(limit, offset, lowerLimit, upperLimit),
    // retrieves a specific Gene
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name,),
  },
};
