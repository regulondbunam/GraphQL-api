import { Gene } from '../models/geneModel';

export const geneResolvers = {
  Query: {
    getGenes: (root, { limit, offset }) =>
      // console.log(Gene.find({}));
      Gene.find({})
        .limit(limit)
        .skip(offset),
    getGene: (root, { id }) =>
      // console.log(Gene.findOne({ 'geneInfo.id': id }));
      Gene.findOne({ 'geneInfo.id': id }),
  },
};
