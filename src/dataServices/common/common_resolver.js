/**
# [Common Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for all Services with a same objective]

## Usage 

```javascript
import { commonResolvers } from './common_resolver';
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

/** import the geneController that contains the resolver functions */
import { commonController } from "./controller_common_functions";

export const commonResolvers = {
    Query: {
        getProperties: (root, {collection}) => commonController.getProperties(collection),
    },
};