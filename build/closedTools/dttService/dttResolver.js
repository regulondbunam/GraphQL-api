'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dttResolver = undefined;

var _dttController = require('./dttController');

const dttResolver = exports.dttResolver = {
  Query: {
    getGeneticElementsFromInterval: (root, { leftEndPosition, rightEndPosition, strand, objectType, covered }) => _dttController.dttController.getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered)
  }
}; /**
    # Drawing Traces Tool service resolver
   
    ## Description
    Here are contained all resolver to defined queries in the Graphql schema
    it´s used for the server definition 
   
   ## Usage
   ```javascript
   import {dttResolver} from './dttResolver';
   ```
   
   ##Arguments/parameters
   N/A
   
   ## Examples
   
   ## Return 
   N/A
   
   ## Category
   RegulonDB drawing traces tool web service
   
   ## License 
   
   ## Author 
   
    **/
// import dttController to use functions defined in it