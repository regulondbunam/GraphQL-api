"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcriptionUnitController = undefined;

var _transcriptionUnit_model = require("./transcriptionUnit_model");

class transcriptionUnitController {
  /** Get a single document based on its unique ID
   *  @param {String} _id the unique ID of the document to be queried
   */
  static async getTUByID(_id) {
    return _transcriptionUnit_model.TranscriptionUnit.findOne({ "_id": _id });
  }

  /** Get all TUS Docs that are linked to a specific Dataset
   *  @param {String} datasetId the ID of the Dataset that is linked to the document
   *  @param {String} limit the number of results to be showed
   *  @param {String} page the page to be showed; this is used to calculate how many
   *  documents will be skiped to be showed
   */
  static async getAllTransUnitsOfDataset(datasetId, limit, page) {
    const offset = page * limit;
    return _transcriptionUnit_model.TranscriptionUnit.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
  }
} /**
  # [transcriptionUnit Service Controller]
  	
  ## Description
  
  [Defines functions to resolve GraphQL queries of HT Transcription Unit Service]
  
  ## Usage 
  
  ```javascript
  import {transcriptionUnitController} from './transcriptionUnit_controller.js';
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

exports.transcriptionUnitController = transcriptionUnitController;