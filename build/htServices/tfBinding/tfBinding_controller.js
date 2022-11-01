"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tfBindingController = undefined;

var _tfBinding_model = require("./tfBinding_model");

class tfBindingController {
  /** Get all TF Binding Docs that are linked to a specific Dataset
   *  @param {String} datasetId the ID of the Dataset that is linked to the document
   *  @param {String} limit the number of results to be showed
   *  @param {String} page the page to be showed; this is used to calculate how many
   *  documents will be skiped to be showed
   */
  static async getAllTFBindingOfDataset(datasetId, limit, page) {
    const offset = page * limit;
    return _tfBinding_model.TFBinding.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
  }

  /** Get a single document based on its unique ID
   *  @param {String} _id the unique ID of the document to be queried
   */
  static async getTFBindingById(_id) {
    return await _tfBinding_model.TFBinding.findOne({ "_id": _id });
  }
} /**
  # [tfBinding Service Controller]
  	
  ## Description
  
  [Defines functions to resolve GraphQL queries of HT tfBinding Service]
  
  ## Usage 
  
  ```javascript
  import {tfBindingController} from './tfBinding_controller.js';
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

exports.tfBindingController = tfBindingController;