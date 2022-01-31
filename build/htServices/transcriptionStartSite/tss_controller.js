"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcriptionStartSiteController = undefined;

var _tss_model = require("./tss_model");

class transcriptionStartSiteController {
  /** Get a single document based on its unique ID
   *  @param {String} _id the unique ID of the document to be queried
   */
  static async getTSSByID(_id) {
    return _tss_model.TranscriptionStartSite.findOne({ "_id": _id });
  }

  /** Get all TSS Docs that are linked to a specific Dataset
   *  @param {String} datasetId the ID of the Dataset that is linked to the document
   *  @param {String} limit the number of results to be showed
   *  @param {String} page the page to be showed; this is used to calculate how many
   *  documents will be skiped to be showed
   */
  static async getAllTSSOfDataset(datasetId, limit, page) {
    const offset = page * limit;
    return _tss_model.TranscriptionStartSite.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
  }
} /**
  # [transcriptionStartSite Service Controller]
  	
  ## Description
  
  [Defines functions to resolve GraphQL queries of HT TSS Service]
  
  ## Usage 
  
  ```javascript
  import {transcriptionStartSiteController} from './tss_controller.js';
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

exports.transcriptionStartSiteController = transcriptionStartSiteController;