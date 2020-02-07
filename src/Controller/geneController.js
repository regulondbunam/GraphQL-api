import { Gene } from '../models/geneModel';

class geneController {
  static listGenes(limit, offset) {
    if (limit) {
      return Gene.find({})
        .limit(limit)
        .skip(offset);
    }
    return Gene.find({})
      .limit(10)
      .skip(offset);
  }

  static getGeneBy(id, name) {
    if (id !== undefined) {
      return Gene.findOne({ 'geneInfo.id': id });
    }
    if (name !== undefined) {
      return Gene.findOne({ 'geneInfo.name': name });
    }
  }

  static getGenesIn(lowerLimit, upperLimit) {
    return Gene.find({
      'geneInfo.leftEndPosition': { $gt: lowerLimit, $lt: upperLimit },
    });
  }
}

export { geneController };
