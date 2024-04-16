"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dttResolver = void 0;
var _dttController = require("./dttController");
/**
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

var dttResolver = exports.dttResolver = {
  Query: {
    getGeneticElementsFromInterval: function getGeneticElementsFromInterval(root, _ref) {
      var leftEndPosition = _ref.leftEndPosition,
        rightEndPosition = _ref.rightEndPosition,
        strand = _ref.strand,
        objectType = _ref.objectType,
        covered = _ref.covered;
      return _dttController.dttController.getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered);
    }
  }
};