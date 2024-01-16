'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadableFilesResolver = undefined;

var _downloadableFiles_model = require('./downloadableFiles_model');

var _downloadableFiles_controller = require('./downloadableFiles_controller');

var _controller_common_functions = require('../common/controller_common_functions');

const downloadableFilesResolver = exports.downloadableFilesResolver = {
  Query: {
    getDataOfFile: (root, { fileName }) => _downloadableFiles_controller.downloadableFilesController.getDataOfFile(fileName),
    listAllFileNames: (root, {}) => _downloadableFiles_controller.downloadableFilesController.listAllFileNames(),
    listAllDownloadableFiles: (root, {}) => _downloadableFiles_controller.downloadableFilesController.listAllDownloadableFiles()
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