'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonController = undefined;

var _graphql = require('graphql');

var _mongoose = require('mongoose');

var _gene_model = require('../geneService/gene_model');

var _regulon_model = require('../regulonService/regulon_model');

var _operon_model = require('../operonService/operon_model');

var _srna_model = require('../srnaService/srna_model');

var _sigmulon_model = require('../sigmulonService/sigmulon_model');

class commonController {
  /** Retrieve a object with all the documents containing in selected collection
     *  @param {Model} collection tells to function the mongoose model to be used
     *  @param {Number} limit defines the page results showed (10 by default)
     *  @param {Number} page select the current result page (0 by default)
     *  @param {String} sortValue tells the function the field by which the results will be sorted
     */
  static async getAll(collection, limit = 0, page = 0, sortValue) {
    // variable definitions
    let hasMore = false;
    let response;

    // get query response from mongodb through mongoose
    const offset = page * limit;

    // if the limit is greater than 100, the data will not be sorted to
    // reduce the response time; if it is less than or equal to 100 the
    // data will be ordered alphabetically by sortValue
    if (limit > 100) {
      response = await collection.aggregate([{
        $limit: limit
      }, {
        $skip: offset
      }]).allowDiskUse(true);
    } else response = await collection.find({}).sort(sortValue).limit(limit).skip(offset);

    // get another data that be in Pagination Type
    const total = await this.countDocumentsIn(collection);
    const showedResult = limit * (page + 1);
    let lastPage = 0;
    if (limit > 0) {
      lastPage = Math.floor(total / limit);
    }
    if (showedResult < total) hasMore = true;
    if (page > lastPage) {
      const err = new _graphql.GraphQLError('You must select an available page number');
      err.status = 'No Content';
      err.statusCode = 204;
      throw err;
    } else {
      return {
        data: response,
        pagination: {
          limit: limit,
          currentPage: page,
          firstPage: 0,
          lastPage: lastPage || 0,
          totalResults: total,
          hasNextPage: hasMore
        }
      };
    }
  }

  /** Get the count document of the selected collection
     *  @param {Model} collection tells to function the mongoose model to be used
     *  @param {String} filter needs the filter used by the query to get the count (by default is 
     *  empty {} por getAll count)
     */
  static countDocumentsIn(collection, filter = {}) {
    return new Promise((resolve, object) => {
      collection.countDocuments(filter, (error, count) => {
        if (error) rejects(error);else resolve(count);
      });
    });
  }

  /** Get all fields contained in a specific datamart
   * @param {String} collection name of the collection that you want to get all fields
  */
  static async getProperties(collection) {
    let response;
    let doc;
    switch (collection) {
      case "gene":
        response = await _gene_model.Gene.findOne().lean();
        doc = JSON.parse(JSON.stringify(response));
        return getDeepKeys(doc);
      case "regulon":
        response = await _regulon_model.Regulon.findOne().lean();
        doc = JSON.parse(JSON.stringify(response));
        return getDeepKeys(doc);
      case "operon":
        response = await _operon_model.Operon.findOne().lean();
        doc = JSON.parse(JSON.stringify(response));
        return getDeepKeys(doc);
      case "srna":
        response = await _srna_model.SRNA.findOne().lean();
        doc = JSON.parse(JSON.stringify(response));
        return getDeepKeys(doc);
      case "sigmulon":
        response = await _sigmulon_model.Sigmulon.findOne().lean();
        doc = JSON.parse(JSON.stringify(response));
        return getDeepKeys(doc);
      default:
        return ["Select a valid collection from this list: gene, regulon, operon, srna, sigmulon"];
    }
  }
}

exports.commonController = commonController; /** Gets all keys in a object */
/**
# Controller Common Functions
	
## Description

Defines function that resolves the query and responses with all documents of
the Collection restricted by a limit and pagination

## Usage 

```javascript
import {commonController} from '../common/controller_common_functions';
```

## Category

RegulonDB datamart web service controller

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

function getDeepKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object") {
      var subkeys = getDeepKeys(obj[key]);
      keys = keys.concat(subkeys.map(function (subkey) {
        return key + "." + subkey;
      }));
    }
  }
  for (var i = 0; i < keys.length; i++) {
    keys[i] = keys[i].replace(/\.[0-9]/gm, '');
    keys[i] = keys[i].replace(/[0-9]/gm, '');
    keys[i] = keys[i].replace(/\.\./gm, '.');
    keys[i] = keys[i].replace(/\.$/gm, '');
  }
  return [...new Set(keys)];
}