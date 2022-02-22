/**
# [geneExpression Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT geneExpression Service]

## Usage 

```javascript
import {geneExpressionController} from './geneExpression_controller.js';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB HT Web Service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

import { GeneExpression } from './geneExpression_model';
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class geneExpressionController {
    /** Get all geneExpression Docs that are linked to a specific Dataset
     *  @param {String} datasetId the ID of the Dataset that is linked to the document
     *  @param {Number} limit the number of results to be showed
     *  @param {Number} page the page to be showed; this is used to calculate how many
     *  documents will be skiped to be showed
     */
    static async getAllGeneExpressionOfDataset(datasetId, limit = 10, page = 0) {
        let offset = page * limit;
        return GeneExpression.find({"datasetIds": datasetId}).limit(limit).skip(offset);
    }

    /** Get a single document based on its unique ID
     *  @param {String} _id the unique ID of the document to be queried
     */
    static async getGeneExpressionById(_id) {
        return await GeneExpression.findOne({"_id": _id})
    }

    /** Get all geneExpression documents matching in a advancedSearch query
     *  @param {String} advancedSearch the string that need to be parsed to valid BSON format 
     *  for MongoDB Query, must have a format like key[value]
     *  @param {Number} limit the number of results to be showed
     *  @param {Number} page the page to be showed; this is used to calculate how many
     *  documents will be skiped to be showed
     */
    static async getGeneExpressionFromSearch(advancedSearch, limit = 10, page = 0) {
        let offset = page * limit;
        let filter = advancedSearchFilter(advancedSearch)
        return await GeneExpression.find(filter).limit(limit).skip(offset)
    }
}

export { geneExpressionController }