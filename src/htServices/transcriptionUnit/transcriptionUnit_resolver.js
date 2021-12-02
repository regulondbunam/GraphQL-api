/**
# [HT Transcription Unit Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Transcription Unit Service]

## Usage 

```javascript
import { transcriptionUnitController } from './transcriptionUnit_resolver'
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

import { transcriptionUnitController } from './transcriptionUnit_controller'

export const transcriptionUnitResolvers = {
    Query: {
        getTUByID: (root, {_id}) => transcriptionUnitController.getTUByID(_id),
        getAllTransUnitsOfDataset: (root, {datasetId}) => transcriptionUnitController.getAllTransUnitsOfDataset(datasetId)
    }
};