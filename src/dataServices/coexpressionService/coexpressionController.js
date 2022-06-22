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
    static async getTopCoexpressionRanking( id, gene, limit = 50){
        //The value of limit must be 50 maximum, when its more it takes the default value (50)
        if(limit > 50) limit = 50;

        //When the user make a search by id, the service execute this query by gene id
        if(id !== undefined)
        {
            return await CoexpressionData.find({"gene._id": id}).limit(limit).sort({"rank":1}).exec().then(coexpRes => {
                for(let i = 0; i<coexpRes.length;i++){
                    if (coexpRes[i]["gene"][0]["_id"] == id){
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][1]
                    } else {
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][0]
                    }
                }
                return coexpRes
            });
        }
        else
        {
            if (gene === ""){
                const err = new GraphQLError('Gene must have a valid string value');
                err.statusCode=400;
                throw err;
            }
            else{
                // When the user make a search by name , the service execute this query by name 
                return await CoexpressionData.find({"gene.name": gene}).limit(limit).sort({"rank":1}).exec().then(coexpRes => {
                    for(let i = 0; i<coexpRes.length;i++){
                        if (coexpRes[i]["gene"][0]["name"] == gene){
                            coexpRes[i]["gene"] = coexpRes[i]["gene"][1]
                        } else {
                            coexpRes[i]["gene"] = coexpRes[i]["gene"][0]
                        }
                    }
                    return coexpRes
                });
            }
        }
        
    }

    /** This function returns a list of genes compare with top 50 of principal gene
     *  @param {String} geneId ID of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneIdList ID list genes of the principal gene top 50  
     *  @param {String} gene Name of one of the genes to compare with principal gene top 50 in coexpression
     *  @param {String} geneList Name list genes of the principal gene top 50
     */
    static async getRankFromGeneList(geneId, geneIdList, gene, geneList){
        // Both arguments needs to be defined of ID type to work.
        if(geneId !== undefined && geneIdList !== undefined)
        {
            return await CoexpressionData.find({$and:[{"gene._id": geneId},{"gene._id": {$in: geneIdList}}]}).exec().then(coexpRes => {
                let newList = []
                for(let i = 0; i<coexpRes.length;i++){
                    if (coexpRes[i]["gene"][0]["_id"] == geneId){
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][1]
                    } else {
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][0]
                    }
                }
                for(let i = 0; i<geneIdList.length; i++){
                    for(let j = 0; j<coexpRes.length;j++){
                        if (coexpRes[j]["gene"][0]["_id"] == geneIdList[i]){
                            newList.push(coexpRes[j])
                        } 
                    }
                }
                return newList
            });
        }
        // Otherwise it works with names.
        else if(gene !== undefined && geneList !== undefined){
            return await CoexpressionData.find({$and:[{"gene.name": gene},{"gene.name": {$in: geneList}}]}).exec().then(coexpRes => {
                let newList = []
                for(let i = 0; i<coexpRes.length;i++){
                    if (coexpRes[i]["gene"][0]["name"] == gene){
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][1]
                    } else {
                        coexpRes[i]["gene"] = coexpRes[i]["gene"][0]
                    }
                }
                for(let i = 0; i<geneList.length; i++){
                    for(let j = 0; j<coexpRes.length;j++){
                        if (coexpRes[j]["gene"][0]["name"] == geneList[i]){
                            newList.push(coexpRes[j])
                        } 
                    }
                }
                return newList
            });
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