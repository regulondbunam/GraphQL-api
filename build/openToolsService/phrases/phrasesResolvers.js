'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesResolvers = undefined;

var _phrasesController = require('./phrasesController');

const phrasesResolvers = exports.phrasesResolvers = {
  Query: {
    getPhraseOf: (root, { id }) => _phrasesController.phrasesController.getPhraseOf(id)
  }
}; /**
   # [Phrases Service resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for Phrases Service]
   
   ## Usage 
   
   ```javascript
   import {phrasesResolver} from './phrasesResolver'
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