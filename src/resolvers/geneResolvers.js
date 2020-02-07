import { geneController } from '../Controller/geneController';

export const geneResolvers = {
  Query: {
    listGenes: (root, { limit, offset }) =>
      geneController.listGenes(limit, offset),
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name),
    getGenesIn: (root, { lowerLimit, upperLimit }) =>
      geneController.getGenesIn(lowerLimit, upperLimit),
  },
};
