/**
# Example Service Resolver
	
## Description

Here are contained all resolver to defined queries in the GraphQL schema
it's used for the server definition

## Usage 

```javascript
import {resolvers} from './resolvers'
```

## Arguments/Parameters

N/A

## Examples

[Example details]

## Return 

N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: [full developer name]
**/

// imports exampleController to use functions defined in it
import { exampleController } from './exampleController';

export const exampleResolvers = {
	Query: {
		getExample: (root, {}) => exampleController.getExample()
	}
};
