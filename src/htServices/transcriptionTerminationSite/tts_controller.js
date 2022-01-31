/**
# [transcriptionTerminationSite Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT TTS Service]

## Usage 

```javascript
import {transcriptionTerminationSiteController} from './tts_controller.js';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB HT Web Service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

import { TranscriptionTerminationSite } from './tts_model'

class transcriptionTerminationSiteController {
    /** Get a single document based on its unique ID
     *  @param {String} _id the unique ID of the document to be queried
     */
    static async getTTSByID(_id) {
        return TranscriptionTerminationSite.findOne({"_id":_id})
    }

    /** Get all TTS Docs that are linked to a specific Dataset
     *  @param {String} datasetId the ID of the Dataset that is linked to the document
     *  @param {String} limit the number of results to be showed
     *  @param {String} page the page to be showed; this is used to calculate how many
     *  documents will be skiped to be showed
     */
    static async getAllTTSOfDataset(datasetId, limit, page) {
        const offset = page * limit
        return TranscriptionTerminationSite.find({"datasetIds": datasetId}).limit(limit).skip(offset)
    }
}

export { transcriptionTerminationSiteController }