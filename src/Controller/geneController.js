import { Gene } from '../models/geneModel';

// Defining a class geneController
class geneController {
  // function that resolves the listGenes query
  static listGenes(limit, offset, lowerLimit, upperLimit) {
    // checks if limit has been defined, in false case, assigns 10 to limit
    if (!limit) {
      limit = 10;
    }

    // checks if lower and upper limit has been defined, and returns the correct case
    if(lowerLimit && upperLimit){
      return Gene.find({'geneInfo.leftEndPosition': { $gt: lowerLimit, $lt: upperLimit }})
        .limit(limit)
          .skip(offset);
    } else {
    return Gene.find({})
      .limit(limit)
      .skip(offset);}
  }

  // function that resolves the getGeneBy query
  static getGeneBy(id, name) {
    // checks if id has been defined, in false case, passes to resolve by  name, 
    // in case that both are defined, it resolves by the id
    if (id !== undefined) {
      return Gene.findOne({ 'geneInfo.id': id });
    }
    if (name !== undefined) {
      return Gene.findOne({ 'geneInfo.name': name });
    }
  }
}

export { geneController };
