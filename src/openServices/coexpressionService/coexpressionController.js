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

import { GraphQLError } from 'graphql';
//import defined model of the collection to be used
import {CoexpressionData} from './coexpressionModel';

class coexpressionController {
    /** This function return those genes expression in diferents conditions.
     *  @param {String} id id of the gene
     *  @param {String} gene name of the gene
     *  @param {Number} limit limit of the results (50 by default)
     */
    static getTopCoexpressionRanking( id, gene, limit = 50){
        //The value of limit must be 50 maximum, when its more it takes the default value (50)
        if(limit > 50) limit = 50;

        //When the user make a search by id, the service execute this query by gene id
        if(id !== undefined)
        {
            return CoexpressionData.find({$or:[{"gene_id1": id},{"gene_id2": id}]}).limit(limit).sort({"rank":1}).exec().then(
                coexpressionResponse => {
                    let objExtract
                    for(let i = 0; i<coexpressionResponse.length; i++){
                        objExtract = coexpressionResponse[i].toJSON();
                        if(id == objExtract.gene_id1){
                            objExtract.gene_id1 = objExtract.gene_id2;
                            objExtract.gene_name1 = objExtract.gene_name2;
                        }
                        coexpressionResponse[i] = objExtract; 
                    }
                    
                    return coexpressionResponse
                }
            );
        }
        else
        {
            if (gene === ""){
                const err = new GraphQLError('Gene must have a valid string value');
                err.statusCode=400;
                throw err;
            }
            else{
                 // Defines a variable who make Case Insentive the parameter
                let geneCI = RegExp(gene,'i');
                
                // When the user make a search by name , the service execute this query by name 
                return CoexpressionData.find({$or:[{"gene_name1": geneCI},{"gene_name2": geneCI}]}).limit(limit).sort({"rank":1}).exec().then(
                    coexpressionResponse => {
                        let objExtract
                        for(let i = 0; i<coexpressionResponse.length; i++){
                            objExtract = coexpressionResponse[i].toJSON();
                            if(objExtract.gene_name1.match(geneCI)){
                                objExtract.gene_id1 = objExtract.gene_id2;
                                objExtract.gene_name1 = objExtract.gene_name2;
                            }
                            coexpressionResponse[i] = objExtract; 
                        }
                        return coexpressionResponse
                    }
                );
            }
        }
        
    }

    /** This function returns a list of genes compare with top 50 of principal gene
     *  @param {String} geneId ID of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneIdList ID list genes of the principal gene top 50  
     *  @param {String} gene Name of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneList Name list genes of the principal gene top 50
     */
    static getRankFromGeneList(geneId, geneIdList, gene, geneList){
        // Both arguments needs to be defined of ID type to work.
        if(geneId !== undefined && geneIdList !== undefined)
        {
            return CoexpressionData.find({$or:[{$and:[{"gene_id1": geneId},{"gene_id2": {$in: geneIdList}}]},
                                               {$and:[{"gene_id1":{$in: geneIdList}},{"gene_id2": geneId}]}]}).sort({"rank":1}).exec().then(
                                                //This function is for mapping the response to the elements of the resume type
                                                coexpressionResponse => {
                                                    let objExtract
                                                    for(let i = 0; i<coexpressionResponse.length; i++){
                                                        objExtract = coexpressionResponse[i].toJSON();
                                                        if(geneId == objExtract.gene_id1){
                                                            objExtract.gene_id1 = objExtract.gene_id2;
                                                            objExtract.gene_name1 = objExtract.gene_name2;
                                                        }
                                                        coexpressionResponse[i] = objExtract; 
                                                    }
                                                    return coexpressionResponse
                                                }
                                            );
        }
        // Otherwise it works with names.
        else if(gene !== undefined && geneList !== undefined){
            // This function makes the string as Case Insensitive
            let geneCI = RegExp(gene,'i');
            let geneListCI=[];
            for (let i=0;i<geneList.length; i++){
                geneListCI[i]= RegExp(geneList[i],'i');
            }
            return CoexpressionData.find({$or:[{$and:[{"gene_name1":geneCI},{"gene_name2":{$in: geneListCI}}]},
                                               {$and:[{"gene_name1":{$in:geneListCI}},{"gene_name2":geneCI}]}]}).sort({"rank":1}).exec().then(
                                                //This function is for mapping the response to the elements of the resume type
                                                coexpressionResponse => {
                                                    let objExtract
                                                    for(let i = 0; i<coexpressionResponse.length; i++){
                                                        objExtract = coexpressionResponse[i].toJSON();
                                                        if(objExtract.gene_name1.match(geneCI)){
                                                            objExtract.gene_id1 = objExtract.gene_id2;
                                                            objExtract.gene_name1 = objExtract.gene_name2;
                                                        }
                                                        coexpressionResponse[i] = objExtract; 
                                                    }
                                                    return coexpressionResponse
                                                }
                                            );
        }
        // When you set a name type with an id type togheter it throws graphql error due consistency
        else {
            const err = new GraphQLError('Variables not defined correctly');
            err.statusCode=400;
            throw err; 
        }
    }
}

export {coexpressionController};