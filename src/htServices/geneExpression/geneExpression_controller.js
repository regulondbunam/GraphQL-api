import { GeneExpression } from './geneExpression_model';

class geneExpressionController {
    static async getAllGeneExpressionOfDataset(datasetId, limit, page) {
        const offset = page * limit;
        return GeneExpression.find({"datasetIds": datasetId}).limit(limit).skip(offset);
    }
    static async getGeneExpressionById(_id) {
        return await GeneExpression.findOne({"_id": _id})
    }
}

export { geneExpressionController }