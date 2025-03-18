"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadableFilesResolver = void 0;
var _downloadableFiles_model = require("./downloadableFiles_model");
var _downloadableFiles_controller = require("./downloadableFiles_controller");
var _controller_common_functions = require("../common/controller_common_functions");
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); } /**
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
**/ /** import the geneController that contains the resolver functions */
var downloadableFilesResolver = exports.downloadableFilesResolver = {
  Query: {
    getDataOfFile: function getDataOfFile(root, _ref) {
      var fileName = _ref.fileName;
      return _downloadableFiles_controller.downloadableFilesController.getDataOfFile(fileName);
    },
    listAllFileNames: function listAllFileNames(root, _ref2) {
      _objectDestructuringEmpty(_ref2);
      return _downloadableFiles_controller.downloadableFilesController.listAllFileNames();
    },
    listAllDownloadableFiles: function listAllDownloadableFiles(root, _ref3) {
      _objectDestructuringEmpty(_ref3);
      return _downloadableFiles_controller.downloadableFilesController.listAllDownloadableFiles();
    }
  }
};