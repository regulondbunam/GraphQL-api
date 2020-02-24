/** import the geneController that contains the resolver functions */
import { GraphQLError } from 'graphql';
import { geneController } from './geneController';

export const geneResolvers = {
  Query: {
    /** obtains an array with Genes in a range */
    listGenes: (root, { limit, page, leftEndPos, rightEndPos }) => {
      if (limit >= 1000) {
        const err = new GraphQLError(
          `Cannot resolve a response with limit ${limit}. Limit must be less than 1000`
        );
        err.status = 'Request Entity Too Large';
        err.statusCode = 413;
        throw err;
      }
      return geneController.listGenes(limit, page, leftEndPos, rightEndPos);
    },
    /** retrieves a specific Gene */
    getGeneBy: (root, { id, name }) => geneController.getGeneBy(id, name),
    getGenesBy: (root, { id, name }) => geneController.getGenesBy(id, name),
  },
};
