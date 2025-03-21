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
import { MetadataCollection } from "./ht_dataset_model"
import {advancedSearchFilter} from 'mongodb-filter-object-parser'

class htDatasetController {
    /** Makes a advancedSearch Query in collection
     *  @param {String} advSearch the string that need to be parsed to valid BSON format
     *  for MongoDB Query, must have a format like key[value]
     */
    static async getDatasetsFromSearch(advSearch) {
        const filter  = advancedSearchFilter(advSearch)
        return await HTDataset.find(filter)
    }

    /** Get a single document based on its unique ID
     *  @param {String} datasetID the unique ID linked to a specific document to be queried
     */
    static async getDatasetByID(datasetID) {
        return await HTDataset.findOne({"_id": datasetID})
    }

    static async getDatasetsWithMetadata(datasetType, source){
        // TODO: Esto se debe hacer sobre el collectionName en lugar del datasetType, porque buscará el archivo metadata asociado al tipo de colección 
        // requerido
        const Datasets = await HTDataset.find({"collectionData.type":datasetType})
        const Metadata = await MetadataCollection.findOne({"$and":[{"datasetType": datasetType}, {"status": "CURRENT"}, {"source": source}]})
        if (Datasets && Metadata){
            return {
                datasets: Datasets,
                metadata: Metadata
            };
        } else {
            return {
                datasets: [],
                metadata: []
            }
        }
    }

    static async listAllHTSources() {
        const files = await MetadataCollection.find({}, 'source').exec();
        const sources = files.map(result => result.source);
        const uniqueSources = [...new Set(sources)];
        return uniqueSources;
    }

    static async listAllDatasetTypes() {
        const files = await HTDataset.find({}, 'collectionData.type').exec();
        const datasetTypes = files.map(result => result.collectionData.type);
        const uniqueSources = [...new Set(datasetTypes)];
        return uniqueSources;
    }

    static async listAllDatasetStrategies() {
        const files = await HTDataset.find({}, 'sourceSerie.strategy').exec();
        const datasetStrategies = files.map(result => result?.sourceSerie?.strategy).filter(strategy => strategy != null);;
        const uniqueStrategies = [...new Set(datasetStrategies)];
        return uniqueStrategies;
    }
}

export { htDatasetController }