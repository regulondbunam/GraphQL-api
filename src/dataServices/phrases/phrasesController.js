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
import { Gene } from '../geneService/gene_model';
import { Operon } from '../operonService/operon_model';
import { Regulon } from '../regulonService/regulon_model';
import { Sigmulon } from '../sigmulonService/sigmulon_model';
import { SRNA } from '../srnaService/srna_model';
import { values } from 'lodash';

class phrasesController {
  /** Retrieve all phrases for an specified Id
     *  @param {String} objectId Tells to function the id of the Gene to get phrases
     */
   static async getPhraseOf(objectId) {
    const foundPhrases = phrases.find({_id: objectId});
    return await foundPhrases;
  }

  /** Retrieve associated phrases to all ids contained in a object
     *  @param {String} objectId Tells to function the id of the object to get phrases
     */
  static async getAllPhrasesInObject(objectId) {
    let ids = []
    if(/^RDBECOLIGNC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(Gene, objectId)
    }
    if(/^RDBECOLITFC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(Regulon, objectId)
    }
    if(/^RDBECOLIOPC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(Operon, objectId)
    }
    if(/^RDBECOLISFC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(Sigmulon, objectId)
    }
    if(/^RDBECOLIPDC[0-9A-Z]{5}$/.test(objectId)) {
      ids = await getAllAssociatedPhrases(SRNA, objectId)
    }
    return phrases.find({_id: ids})
  }
}

function getAllAssociatedPhrases(collection, objectId){
  return collection.findOne({_id: objectId}).exec().then(item => {
    let values = JSON.stringify(item.toJSON()).match(/RDB[A-Z0-9_]{5}[A-Z]{3}[0-9A-Z]{5}/g)
    values = values.filter((item, index) => values.indexOf(item) === index)
    return values
  })
}

export {phrasesController};
