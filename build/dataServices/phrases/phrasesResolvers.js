"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrasesResolvers = void 0;
var _phrasesController = require("./phrasesController");
/**
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

var phrasesResolvers = exports.phrasesResolvers = {
  Query: {
    getPhraseOf: function getPhraseOf(root, _ref) {
      var objectId = _ref.objectId;
      return _phrasesController.phrasesController.getPhraseOf(objectId);
    },
    getAllPhrasesInObject: function getAllPhrasesInObject(root, _ref2) {
      var objectId = _ref2.objectId;
      return _phrasesController.phrasesController.getAllPhrasesInObject(objectId);
    }
  }
};