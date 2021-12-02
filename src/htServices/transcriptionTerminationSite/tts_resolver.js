/**
# [HT Transcription Termination Site Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Termination Site Service]

## Usage 

```javascript
import { transcriptionTerminationSiteController } from './tts_resolver'
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

HT web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

import { transcriptionTerminationSiteController } from './tts_controller'

export const transcriptionTerminationSiteResolvers = {
    Query: {
        getTTSByID: (root, {_id}) => transcriptionTerminationSiteController.getTTSByID(_id),
        getAllTTSOfDataset: (root, {datasetId}) => transcriptionTerminationSiteController.getAllTTSOfDataset(datasetId)
    }
};