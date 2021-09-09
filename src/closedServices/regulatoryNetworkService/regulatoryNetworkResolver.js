/**
 # Regulatory Network service resolver

 ## Description
 Here are contained all resolver to defined queries in the Graphql schema
 it´s used for the server definition 

## Usage
```javascript
import {regulatoryNetworkResolver} from './regulatoryNetworkResolver';
```

##Arguments/parameters
N/A

## Examples

## Return 
N/A

## Category
RegulonDB regulatory network web service

## License 
ISC

## Author
Andres Gerardo Lopez Almazo 

 **/
// import regulatoryNetworkControler to use functions defined in it
import {regulatoryNetworkController} from './regulatoryNetworkController';

export const regulatoryNetworkResolver = {
    Query: {
        getNodesOf: (root, {object_id, object_name, networkType}) => regulatoryNetworkController.getNodesOf(object_id, object_name, networkType)
    }
}