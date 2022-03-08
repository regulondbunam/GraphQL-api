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

import { phrases } from './phrasesModel';

class phrasesController {
  /** Retrieve all phrases for an specified Id
     *  @param {String} id Tells to function the id of the Gene to get phrases
     */
  static async getPhraseOf(id) {
    const foundPhrases = phrases.find({_id: id});
    return await foundPhrases;
  }
}

export {phrasesController};
