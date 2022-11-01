/**
# [authorsData Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT authorsData Service]

## Usage 

```javascript
import {authorsDataController} from './authorsData_controller.js';
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

import {AuthorsData} from './authorsData_model';

class authorsDataController {
    /** Get authrosData Doc that are linked to a specific Dataset
     *  @param {String} datasetId the ID of the Dataset that is linked to the document
     */
    static async getAuthorsDataOfDataset(datasetId) {
        return AuthorsData.find({"datasetIds": datasetId})
    }
    
    /** Get a single document based on its unique ID
     *  @param {String} _id the unique ID of the document to be queried
     */
    static async getAuthorsDataById(_id) {
        return await AuthorsData.findOne({"_id": _id})
    }
}

export { authorsDataController }