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
     static getNodesOf(object_id, object_name, networkType = null){
        let search_filter = null
        if(object_id != null)
            search_filter = {_id: object_id}
        else
            search_filter = {name: object_name}

        if (networkType != null)
            return RegulatoryNetwork.find(search_filter).exec().then(regNetworkResponse => {
                let currentItem
                for(let i=0; i<regNetworkResponse.length; i++){
                    let indegree = [], outdegree = []
                    currentItem = regNetworkResponse[i].toJSON()
                    let itemOutdegree = currentItem.outdegree
                    for(let j=0; j<itemOutdegree.length; j++){
                        if(itemOutdegree[j].networkType == networkType)
                            outdegree.push(itemOutdegree[j])
                    }
                    let itemIndegree = currentItem.indegree
                    for(let j=0; j<itemIndegree.length; j++){
                        if(itemIndegree[j].networkType == networkType)
                            indegree.push(itemIndegree[j])
                    }
                    currentItem.indegree = indegree
                    currentItem.outdegree = outdegree
                    regNetworkResponse[i] = currentItem
                }
                return regNetworkResponse
            });
        else
            return RegulatoryNetwork.find(search_filter);
     }

     static getAllNodes(objectType = null, networkType = null){
        if (networkType != null)
            return RegulatoryNetwork.find({type: objectType}).exec().then(regNetworkResponse => {
                let currentItem
                for(let i=0; i<regNetworkResponse.length; i++){
                    let indegree = [], outdegree = []
                    currentItem = regNetworkResponse[i].toJSON()
                    let itemOutdegree = currentItem.outdegree
                    for(let j=0; j<itemOutdegree.length; j++){
                        if(itemOutdegree[j].networkType == networkType)
                            outdegree.push(itemOutdegree[j])
                    }
                    let itemIndegree = currentItem.indegree
                    for(let j=0; j<itemIndegree.length; j++){
                        if(itemIndegree[j].networkType == networkType)
                            indegree.push(itemIndegree[j])
                    }
                    currentItem.indegree = indegree
                    currentItem.outdegree = outdegree
                    regNetworkResponse[i] = currentItem
                }
                return regNetworkResponse
            });
        else
            return RegulatoryNetwork.find({type: objectType});
     }
 }
 export {regulatoryNetworkController}