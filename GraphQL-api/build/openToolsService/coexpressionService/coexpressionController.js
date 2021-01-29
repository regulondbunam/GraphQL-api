'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coexpressionController = undefined;

var _graphql = require('graphql');

var _coexpressionModel = require('./coexpressionModel');

/**
 # Coexpression service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {coexpressionController} from './coexpressionController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License 

## Author

**/
/**
# Function description

## getTopCoexpressionRanking

_Description:_
This function return those genes expression in diferents conditions.

_Usage:_
```javascript
coexpressionController.getTopCoexpressionRanking(id, gene , limit)
```
_Input parameters:_
_id:_ id of the gene
_gene:_ name of the gene
_limit:_ limit of the results (50 by default)

_Return:_
coexpressionController: [CoexpressionResume]

## getRankFromGeneList

_Description:_
This function returns a list of genes compare with top 50 of principal gene

_Usage:_
```javascript
coexpressionController.getRankFromGeneList(geneId, geneIdList, gene , geneList);
```
_Input parameters:_
_geneId:_ ID of one of the genes to compare with principal gene top 50 in coexpression
_geneIdList:_ ID list genes of the principal gene top 50  
_gene:_  Name of one of the genes to compare with principal gene top 50 in coexpression
_geneList:_ Name list genes of the principal gene top 50

_Return:_
coexpressionController: [CoexpressionResume]

**/
class coexpressionController {
    static getTopCoexpressionRanking(id, gene, limit = 50) {
        //The value of limit must be 50 maximum, when its more it takes the default value (50)
        if (limit > 50) limit = 50;

        //When the user make a search by id, the service execute this query by gene id
        if (id !== undefined) {
            return _coexpressionModel.CoexpressionData.find({ $or: [{ "gene_id1": id }, { "gene_id2": id }] }).limit(limit).sort({ "rank": 1 }).exec().then(coexpressionResponse => {
                let objExtract;
                for (let i = 0; i < coexpressionResponse.length; i++) {
                    objExtract = coexpressionResponse[i].toJSON();
                    if (id == objExtract.gene_id1) {
                        objExtract.gene_id1 = objExtract.gene_id2;
                        objExtract.gene_name1 = objExtract.gene_name2;
                    }
                    coexpressionResponse[i] = objExtract;
                }

                return coexpressionResponse;
            });
        } else {
            if (gene === "") {
                const err = new _graphql.GraphQLError('Gene must have a valid string value');
                err.statusCode = 400;
                throw err;
            } else {
                // Defines a variable who make Case Insentive the parameter
                let geneCI = RegExp(gene, 'i');

                // When the user make a search by name , the service execute this query by name 
                return _coexpressionModel.CoexpressionData.find({ $or: [{ "gene_name1": geneCI }, { "gene_name2": geneCI }] }).limit(limit).sort({ "rank": 1 }).exec().then(coexpressionResponse => {
                    let objExtract;
                    for (let i = 0; i < coexpressionResponse.length; i++) {
                        objExtract = coexpressionResponse[i].toJSON();
                        if (objExtract.gene_name1.match(geneCI)) {
                            objExtract.gene_id1 = objExtract.gene_id2;
                            objExtract.gene_name1 = objExtract.gene_name2;
                        }
                        coexpressionResponse[i] = objExtract;
                    }
                    return coexpressionResponse;
                });
            }
        }
    }

    static getRankFromGeneList(geneId, geneIdList, gene, geneList) {
        // Both arguments needs to be defined of ID type to work.
        if (geneId !== undefined && geneIdList !== undefined) {
            return _coexpressionModel.CoexpressionData.find({ $or: [{ $and: [{ "gene_id1": geneId }, { "gene_id2": { $in: geneIdList } }] }, { $and: [{ "gene_id1": { $in: geneIdList } }, { "gene_id2": { $in: geneIdList } }] }] }).sort({ "rank": 1 }).exec().then(
            //This function is for mapping the response to the elements of the resume type
            coexpressionResponse => {
                let objExtract;
                for (let i = 0; i < coexpressionResponse.length; i++) {
                    objExtract = coexpressionResponse[i].toJSON();
                    if (geneId == objExtract.gene_id1) {
                        objExtract.gene_id1 = objExtract.gene_id2;
                        objExtract.gene_name1 = objExtract.gene_name2;
                    }
                    coexpressionResponse[i] = objExtract;
                }
                return coexpressionResponse;
            });
        }
        // Otherwise it works with names.
        else if (gene !== undefined && geneList !== undefined) {
                // This function makes the string as Case Insensitive
                let geneCI = RegExp(gene, 'i');
                return _coexpressionModel.CoexpressionData.find({ $or: [{ $and: [{ "gene_name1": geneCI }, { "gene_name2": { $in: geneList } }] }, { $and: [{ "gene_name1": { $in: geneList } }, { "gene_name2": geneCI }] }] }).sort({ "rank": 1 }).exec().then(
                //This function is for mapping the response to the elements of the resume type
                coexpressionResponse => {
                    let objExtract;
                    for (let i = 0; i < coexpressionResponse.length; i++) {
                        objExtract = coexpressionResponse[i].toJSON();
                        if (objExtract.gene_name1.match(geneCI)) {
                            objExtract.gene_id1 = objExtract.gene_id2;
                            objExtract.gene_name1 = objExtract.gene_name2;
                        }
                        coexpressionResponse[i] = objExtract;
                    }
                    return coexpressionResponse;
                });
            }
            // When you set a name type with an id type togheter it throws graphql error due consistency
            else {
                    const err = new _graphql.GraphQLError('Variables not defined correctly');
                    err.statusCode = 400;
                    throw err;
                }
    }
}
//import defined model of the collection to be used
exports.coexpressionController = coexpressionController;