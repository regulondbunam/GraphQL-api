"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htDatasetController = undefined;

var _ht_dataset_model = require("./ht_dataset_model");

var _mongodbFilterObjectParser = require("mongodb-filter-object-parser");

class htDatasetController {
    /** Makes a advancedSearch Query in collection
     *  @param {String} advSearch the string that need to be parsed to valid BSON format 
     *  for MongoDB Query, must have a format like key[value]
     */
    static async getDatasetsFromSearch(advSearch) {
        const filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advSearch);
        return await _ht_dataset_model.HTDataset.find(filter);
    }

    /** Get a single document based on its unique ID
     *  @param {String} datasetID the unique ID linked to a specific document to be queried
     */
    static async getDatasetByID(datasetID) {
        return await _ht_dataset_model.HTDataset.findOne({ "_id": datasetID });
    }

    static async getDatasetsWithMetadata(datasetType) {
        // TODO: Esto se debe hacer sobre el collectionName en lugar del datasetType, porque buscará el archivo metadata asociado al tipo de colección 
        // requerido
        const Datasets = await _ht_dataset_model.HTDataset.find({ "datasetType": datasetType });
        const Metadata = await _ht_dataset_model.MetadataCollection.findOne({ "$and": [{ "datasetType": datasetType }, { "status": "latest" }] });
        return {
            datasets: Datasets,
            metadata: Metadata
        };
    }
} /**
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

exports.htDatasetController = htDatasetController;