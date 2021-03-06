/**
# [Phrases Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of Phrases Service]

## Usage 

```javascript
import {phrasesController} from './phrasesController';
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


/**
	
# Functions description

## [getPhraseOf]

__Description:__ 

[Retrieve all phrases for an specified Id]


__Usage:__

```javascript
phrasesController.getPhraseOf(args);
```

__Input arguments/parameters:__ 

__[id]:__ Tells to function the id of the Gene to get phrases

__Return:__ 

__Object:__ foundPhrases
Returns an object containing a response that will be sent to GraphQL
**/

import { phrases } from './phrasesModel';

class phrasesController {
  static getPhraseOf(id) {
    const foundPhrases = phrases.find({_id: id});
    return foundPhrases;
  }
}

export {phrasesController};
