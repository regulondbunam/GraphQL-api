"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peaksController = undefined;

var _peaks_model = require("./peaks_model");

class peaksController {
  /** Get all Peaks Docs that are linked to a specific Dataset
   *  @param {String} datasetId the ID of the Dataset that is linked to the document
   *  @param {String} limit the number of results to be showed
   *  @param {String} page the page to be showed; this is used to calculate how many
   *  documents will be skiped to be showed
   */
  static async getAllPeaksOfDataset(datasetId, limit, page) {
    const offset = page * limit;
    return _peaks_model.Peaks.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
  }

  /** Get a single document based on its unique ID
   *  @param {String} _id the unique ID of the document to be queried
   */
  static async getPeakById(_id) {
    return await _peaks_model.Peaks.findOne({ "_id": _id });
  }
} /**
  # [Peaks Service Controller]
  	
  ## Description
  
  [Defines functions to resolve GraphQL queries of HT Peaks Service]
  
  ## Usage 
  
  ```javascript
  import {peaksController} from './peaks_controller.js';
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

exports.peaksController = peaksController;