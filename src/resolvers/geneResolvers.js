import { Gene } from '../models/geneModel';

export const geneResolvers = {
  Query: {
    listGenes: (root, { limit, offset }) => {
      // console.log(Gene.find({}));
      if (limit) {
        return Gene.find({})
          .limit(limit)
          .skip(offset);
      }
      return Gene.find({})
        .limit(10)
        .skip(offset);
    },
    getGeneBy: (root, { id, name }) => {
      // console.log(Gene.findOne({ 'geneInfo.id': id }));
      if (id) {
        return Gene.findOne({ 'geneInfo.id': id });
      }
      if (name) {
        return Gene.findOne({ 'geneInfo.name': name });
      }
    },
    getGenesIn: (root, { lowerLimit, upperLimit }) =>
      Gene.find({
        'geneInfo.leftEndPosition': { $gt: lowerLimit, $lt: upperLimit },
      }),
  },
};
