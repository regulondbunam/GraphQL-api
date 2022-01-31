/**
# [Dataset Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT Dataset Service]

## Usage 

```javascript
import {htDatasetController} from './ht_dataset_controller.js';
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

import {HTDataset} from "./ht_dataset_model"
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class htDatasetController {
    /** Makes a advancedSearch Query in collection
     *  @param {String} advSearch the string that need to be parsed to valid BSON format 
     *  for MongoDB Query, must have a format like key[value]
     */
    static async getDatasetsFromSearch(advSearch) {
        const filter  = advancedSearchFilter(advSearch)
        return HTDataset.find(filter)
    }

    /** Get a single document based on its unique ID
     *  @param {String} datasetID the unique ID linked to a specific document to be queried
     */
    static async getDatasetByID(datasetID) {
        return await HTDataset.findOne({"_id": datasetID})
    }
}

export { htDatasetController }