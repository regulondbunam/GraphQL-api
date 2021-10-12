'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htResolvers = undefined;

var _ht_search_controller = require('./ht_search_controller');

var _controller_common_functions = require('../common/controller_common_functions');

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
const htResolvers = exports.htResolvers = {
  Query: {
    findOnSample: (root, { advSearch, limit, page }) => _ht_search_controller.htController.findOnSample(advSearch, limit, page)
  }
};