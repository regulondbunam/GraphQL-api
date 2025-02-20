"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mcoTreeResolver = void 0;
var _mcoTree_controller = require("./mcoTree_controller");
/**
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

var mcoTreeResolver = exports.mcoTreeResolver = {
  Query: {
    getTreeTopParents: function getTreeTopParents(root, _ref) {
      var treeType = _ref.treeType;
      return _mcoTree_controller.mcoTreeController.getTreeTopParents(treeType);
    },
    getSubclassesOfTermId: function getSubclassesOfTermId(root, _ref2) {
      var _id = _ref2._id;
      return _mcoTree_controller.mcoTreeController.getSubclassesOfTermId(_id);
    },
    getSuperclassesOfTermId: function getSuperclassesOfTermId(root, _ref3) {
      var _id = _ref3._id;
      return _mcoTree_controller.mcoTreeController.getSuperclassesOfTermId(_id);
    },
    getTermBy: function getTermBy(root, _ref4) {
      var search = _ref4.search,
        advancedSearch = _ref4.advancedSearch,
        properties = _ref4.properties,
        fullMatchOnly = _ref4.fullMatchOnly;
      return _mcoTree_controller.mcoTreeController.getTermBy(search, advancedSearch, properties, fullMatchOnly);
    },
    filterTermsNameBySearch: function filterTermsNameBySearch(root, _ref5) {
      var search = _ref5.search;
      return _mcoTree_controller.mcoTreeController.filterTermsNameBySearch(search);
    }
  }
};