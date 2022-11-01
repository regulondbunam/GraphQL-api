/**
# [HT Authors Data Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT Dataset Service]

## Usage 

```javascript
import {authorsDataResolvers} from './authorsData_controller'
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
import { authorsDataController } from "./authorsData_controller";

export const authorsDataResolvers = {
    Query: {
        getAuthorsDataOfDataset: (root, {datasetId}) => authorsDataController.getAuthorsDataOfDataset(datasetId),
        getAuthorsDataById: (root, {_id}) => authorsDataController.getAuthorsDataById(_id)
    },
};