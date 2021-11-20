/**
# [HT Peaks Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Dataset Service]

## Usage 

```javascript
import {peaksResolvers} from './peaks_controller'
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

/** import the PeaksController that contains the resolver functions */
import { peaksController } from "./peaks_controller";

export const peaksResolvers = {
    Query: {
        getAllPeaksOfDataset: (root, {datasetId}) => peaksController.getAllPeaksOfDataset(datasetId),
        getPeakById: (root, {_id}) => peaksController.getPeakById(_id)
    },
};