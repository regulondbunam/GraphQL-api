/**
 # Regulatory Network service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {regulatoryNetworkController} from './regulatoryNetworkController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB regulatory network web service

## License 
ISC

## Author
Andres Gerardo Lopez Almazo

 **/
 
 /**
# Function description

## getGeneticElementsFromInterval

_Description:_
This function return nodes defined by id or name with objects regulated by this node and object 
that regulate this node

_Usage:_
```javascript
regulatoryNetworkController.getNodesOf(object_id, object_name, networkType);
```
_Input parameters:_
object_id: id of the element (gene or transcription factor)
object_name: name of the element (gene or transcription factor)
networkType: network type of the node (TF-TF, Gene-Gene, TF-Gene)

_Return:_
regulatoryNetworkController: [dttData]

**/
 
 // import defined model of the collection to be used
 import {RegulatoryNetwork} from './regulatoryNetworkModel';
 import { GraphQLError } from 'graphql';

 class regulatoryNetworkController {
     static getNodesOf(object_id, object_name, networkType = ["TF-TF", "TF-Gene", "Gene-Gene"]){
         if(object_id != null)
             return RegulatoryNetwork.find({
                 $and:[
                    {_id: object_id},
                    {networkType: networkType}
                ]
            })
         else
            return RegulatoryNetwork.find({
                $and:[
                   {name: object_name},
                   {networkType: networkType}
               ]
           })
     }
 }
 export {regulatoryNetworkController}