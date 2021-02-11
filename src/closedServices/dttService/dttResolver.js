/**
 # Drawing Traces Tool service resolver

 ## Description
 Here are contained all resolver to defined queries in the Graphql schema
 it´s used for the server definition 

## Usage
```javascript
import {dttResolver} from './dttResolver';
```

##Arguments/parameters
N/A

## Examples

## Return 
N/A

## Category
RegulonDB drawing traces tool web service

## License 

## Author 

 **/
// import dttController to use functions defined in it
import {dttController} from './dttController';

export const dttResolver = {
    Query: {
        getGeneticElementsFromInterval: (root, {leftEndPosition, rightEndPosition, strand, objectType, covered}) => dttController.getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered)
    }
};