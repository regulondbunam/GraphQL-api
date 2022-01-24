'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.regulatoryNetworkController = undefined;

var _regulatoryNetworkModel = require('./regulatoryNetworkModel');

var _graphql = require('graphql');

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

// import defined model of the collection to be used
class regulatoryNetworkController {
    /** This function return nodes defined by id or name with objects regulated by this node and object 
    *  that regulate this node
    *  @param {String} object_id id of the element (gene or transcription factor)
    *  @param {String} object_name name of the element (gene or transcription factor)
    *  @param {String} networkType network type of the node (TF-TF, Gene-Gene, TF-Gene)
    */
    static getNodesOf(object_id, object_name, networkType = null) {
        let search_filter = null;
        if (object_id != null) search_filter = { _id: object_id };else search_filter = { name: object_name };

        if (networkType != null) return _regulatoryNetworkModel.RegulatoryNetwork.find(search_filter).exec().then(regNetworkResponse => {
            let currentItem;
            for (let i = 0; i < regNetworkResponse.length; i++) {
                let indegree = [],
                    outdegree = [];
                currentItem = regNetworkResponse[i].toJSON();
                let itemOutdegree = currentItem.outdegree;
                for (let j = 0; j < itemOutdegree.length; j++) {
                    if (itemOutdegree[j].networkType == networkType) outdegree.push(itemOutdegree[j]);
                }
                let itemIndegree = currentItem.indegree;
                for (let j = 0; j < itemIndegree.length; j++) {
                    if (itemIndegree[j].networkType == networkType) indegree.push(itemIndegree[j]);
                }
                currentItem.indegree = indegree;
                currentItem.outdegree = outdegree;
                regNetworkResponse[i] = currentItem;
            }
            return regNetworkResponse;
        });else return _regulatoryNetworkModel.RegulatoryNetwork.find(search_filter);
    }

    /** This function return all nodes based on it objectType
    *  @param {String} objectType type of the node object(TF, Gene)
    *  @param {String} networkType network type of the node (TF-TF, Gene-Gene, TF-Gene)
    */
    static getAllNodes(objectType = null, networkType = null) {
        if (networkType != null) return _regulatoryNetworkModel.RegulatoryNetwork.find({ type: objectType }).exec().then(regNetworkResponse => {
            let currentItem;
            for (let i = 0; i < regNetworkResponse.length; i++) {
                let indegree = [],
                    outdegree = [];
                currentItem = regNetworkResponse[i].toJSON();
                let itemOutdegree = currentItem.outdegree;
                for (let j = 0; j < itemOutdegree.length; j++) {
                    if (itemOutdegree[j].networkType == networkType) outdegree.push(itemOutdegree[j]);
                }
                let itemIndegree = currentItem.indegree;
                for (let j = 0; j < itemIndegree.length; j++) {
                    if (itemIndegree[j].networkType == networkType) indegree.push(itemIndegree[j]);
                }
                currentItem.indegree = indegree;
                currentItem.outdegree = outdegree;
                regNetworkResponse[i] = currentItem;
            }
            return regNetworkResponse;
        });else return _regulatoryNetworkModel.RegulatoryNetwork.find({ type: objectType });
    }
}
exports.regulatoryNetworkController = regulatoryNetworkController;