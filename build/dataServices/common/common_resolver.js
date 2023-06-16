"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commonResolvers = undefined;

var _controller_common_functions = require("./controller_common_functions");

const commonResolvers = exports.commonResolvers = {
    Query: {
        getProperties: (root, { collection }) => _controller_common_functions.commonController.getProperties(collection)
    }
}; /**
   # [Common Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for all Services with a same objective]
   
   ## Usage 
   
   ```javascript
   import { commonResolvers } from './common_resolver';
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

/** import the geneController that contains the resolver functions */