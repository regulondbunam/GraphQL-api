/**
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
import {coexpressionController} from './coexpressionController';

export const coexpressionResolver = {
    Query:{
        getTopCoexpressionRanking: (root, {id, gene, limit}) => coexpressionController.getTopCoexpressionRanking(id, gene, limit),
        getRankFromGeneList: (root, {geneId, geneIdList, gene, geneList}) => coexpressionController.getRankFromGeneList(geneId, geneIdList, gene, geneList)
    }
}