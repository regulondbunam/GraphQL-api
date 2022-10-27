/**
# [HT Transcription Start Site Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Start Site Service]

## Usage 

```javascript
import { transcriptionStartSiteController } from './tss_resolver'
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

import { transcriptionStartSiteController } from './tss_controller'

export const transcriptionStartSiteResolvers = {
    Query: {
        getTSSByID: (root, {_id}) => transcriptionStartSiteController.getTSSByID(_id),
        getAllTSSOfDataset: (root, {datasetId, limit, page}) => transcriptionStartSiteController.getAllTSSOfDataset(datasetId, limit, page)
    }
};