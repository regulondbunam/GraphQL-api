'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesController = undefined;

var _phrasesModel = require('./phrasesModel');

var _gene_model = require('../geneService/gene_model');

var _operon_model = require('../operonService/operon_model');

var _regulon_model = require('../regulonService/regulon_model');

var _sigmulon_model = require('../sigmulonService/sigmulon_model');

var _srna_model = require('../srnaService/srna_model');

var _lodash = require('lodash');

class phrasesController {
  /** Retrieve all phrases for an specified Id
     *  @param {String} objectId Tells to function the id of the Gene to get phrases
     */
  static async getPhraseOf(objectId) {
    const foundPhrases = _phrasesModel.phrases.find({ _id: objectId });
    return await foundPhrases;
  }

  /** Retrieve associated phrases to all ids contained in a object
     *  @param {String} objectId Tells to function the id of the object to get phrases
     */
  static async getAllPhrasesInObject(objectId) {
    let ids = [];
    if (/^RDBECOLIGNC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(_gene_model.Gene, objectId);
    }
    if (/^RDBECOLITFC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(_regulon_model.Regulon, objectId);
    }
    if (/^RDBECOLIOPC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(_operon_model.Operon, objectId);
    }
    if (/^RDBECOLISFC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(_sigmulon_model.Sigmulon, objectId);
    }
    if (/^RDBECOLIPDC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(_srna_model.SRNA, objectId);
    }
    return _phrasesModel.phrases.find({ _id: ids });
  }
} /**
  # [Phrases Service Controller]
  	
  ## Description
  
  [Defines functions to resolve GraphQL queries of Phrases Service]
  
  ## Usage 
  
  ```javascript
  import {phrasesController} from './phrasesController';
  ```
  
  ## Arguments/Parameters
  
  N/A
  
  ## Examples
  
  N/A
  
  ## Return 
  
  N/A
  
  ## Category
  
  RegulonDB datamart web service
  
  ## License
  
  MIT License
  
  ## Author 
  
  RegulonDB Team: Lopez Almazo Andres Gerardo
  **/

function getAllAssociatedPhrases(collection, objectId) {
  return collection.findOne({ _id: objectId }).exec().then(item => {
    let values = JSON.stringify(item.toJSON()).match(/RDB[A-Z0-9_]{5}[A-Z]{3}[0-9A-Z]{5}/g);
    values = values.filter((item, index) => values.indexOf(item) === index);
    return values;
  });
}

exports.phrasesController = phrasesController;