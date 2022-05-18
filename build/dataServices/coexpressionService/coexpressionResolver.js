'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coexpressionResolver = undefined;

var _coexpressionController = require('./coexpressionController');

const coexpressionResolver = exports.coexpressionResolver = {
    Query: {
        getTopCoexpressionRanking: (root, { id, gene, limit }) => _coexpressionController.coexpressionController.getTopCoexpressionRanking(id, gene, limit).then(func1 => {
            var newObj = func1.map(item => {
                return {
                    coexpressionId: item._id,
                    geneId: item.gene_id1,
                    geneName: item.gene_name1,
                    rank: item.rank
                };
            });
            return newObj;
        }),
        getRankFromGeneList: (root, { geneId, geneIdList, gene, geneList }) => _coexpressionController.coexpressionController.getRankFromGeneList(geneId, geneIdList, gene, geneList).then(func2 => {
            var newObj = func2.map(item => {
                return {
                    coexpressionId: item._id,
                    geneId: item.gene_id1,
                    geneName: item.gene_name1,
                    rank: item.rank
                };
            });
            return newObj;
        })
    }
}; /**
    # Coexpression service resolver
   
    ## Description
    Here are contained all resolver to defined queries in the Graphql schema
    it´s used for the server definition 
   
   ## Usage
   ```javascript
   import {coexpressionResolver} from './coexpressionResolver.js';
   ```
   
   ##Arguments/parameters
   N/A
   
   ## Examples
   
   ## Return 
   N/A
   
   ## Category
   RegulonDB coexpression web service
   
   ## License 
   
   ## Author 
   
    **/
// import coexpressionController to use functions defined in it