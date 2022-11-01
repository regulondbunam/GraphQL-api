/**
# [HT TF Binding Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for HT TF Binding Service]

## Usage 

```javascript
import {tfBindingResolvers} from './tfBinding_resolver'
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

/** import the tfBindingController that contains the resolver functions */
import { tfBindingController } from "./tfBinding_controller";

export const tfBindingResolvers = {
    Query: {
        getAllTFBindingOfDataset: (root, {datasetId, limit, page}) => tfBindingController.getAllTFBindingOfDataset(datasetId, limit, page),
        getTFBindingById: (root, {_id}) => tfBindingController.getTFBindingById(_id)
    },
};