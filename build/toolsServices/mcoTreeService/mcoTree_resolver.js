'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mcoTreeResolver = undefined;

var _mcoTree_controller = require('./mcoTree_controller');

const mcoTreeResolver = exports.mcoTreeResolver = {
  Query: {
    getGoTerms: (root, {}) => _mcoTree_controller.mcoTreeController.getGoTerms(),
    getSubclassesOfTermId: (root, { _id }) => _mcoTree_controller.mcoTreeController.getSubclassesOfTermId(_id),
    getSuperclassesOfTermId: (root, { _id }) => _mcoTree_controller.mcoTreeController.getSuperclassesOfTermId(_id),
    getTermBy: (root, { search, advancedSearch, properties, fullMatchOnly }) => _mcoTree_controller.mcoTreeController.getTermBy(search, advancedSearch, properties, fullMatchOnly)
  }
}; /**
   # ["" Service Resolver]
   
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for "" Service]
   
   ## Usage
   
   ```javascript
   import {} from './'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return
   
   N/A
   
   ## Category
   
   "" web service
   
   ## License
   
   MIT License
   
   ## Author
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the geneController that contains the resolver functions */