/** import the geneController that contains the resolver functions */
import { GraphQLError } from 'graphql';
import { geneController } from './geneController';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range */
    listGenes: (root, { limit, page, leftEndPos, rightEndPos }) => {
      if (limit > 999)
        throw new GraphQLError(`Cannot resolve a response with limit ${limit}`);
      return geneController.listGenes(limit, page, leftEndPos, rightEndPos);
    },
    /** retrieves a specific Gene */
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name),
  },
};
