'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dttController = undefined;

var _dttModel = require('./dttModel');

var _graphql = require('graphql');

/**
 # Drawing Traces Tool service controller

 ## Description
 Here are defined all functions with all logic to connect and get data from db,
 they return responses obtained to the resolvers

## Usage
```javascript
import {dttController} from './dttController';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB drawing traces tool web service

## License 

## Author

 **/

/**
# Function description

## getGeneticElementsFromInterval

_Description:_
This function return all genetic elements from an interval of position (left and right)
also strand, and the object type of the elements.

_Usage:_
```javascript
dttController.getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered);
```
_Input parameters:_
_leftEndPosition:_ beginning of element position to draw
_rightEndPosition:_ ending of element position to draw
_strand:_ direction of the element (forward, reverse, both)
_objectType:_ type of the genetic element to draw 
_covered:_ indicate elements that are completely contained in the selected range(true)

_Return:_
dttController: [dttData]

**/

// import defined model of the collection to be used
class dttController {
    static getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand = 'both', objectType = 'all', covered = false) {
        if (leftEndPosition > rightEndPosition) {
            const err = new _graphql.GraphQLError('leftEndPosition must be lower than rightEndPosition');
            err.statusCode = 400;
            throw err;
        } else {
            //When objectType is not defined by the user takes all values by default
            if (objectType == 'all') objectType = ['gene', 'promoter', 'operon', 'tf_binding_site', 'srna', 'riboswitch', 'terminator', 'translational_attenuator', 'transcriptional_attenuator', 'ppGpp'];
            // When covered is true means draw only the elements that are contained in the selected range
            if (covered) {
                // When strand is "forward" OR "reverse"
                if (strand != 'both')
                    // Return the elements that are completely contained in the selected range
                    return _dttModel.Data.find({ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }, { strand: strand }, { objectType: { $in: objectType } }] });

                    // When strand is "forward" AND "reverse"
                else
                    // Return the elements that are completely contained en the selected range
                    return _dttModel.Data.find({ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }, { strand: { $in: ["forward", "reverse"] } }, { objectType: { $in: objectType } }] });
            }
            //When covered is false means draw both cases, when elements are contained in the range and those that not.
            else {
                    //When strand is "forward" OR "reverse"
                    if (strand != 'both')
                        // Return all elements that are contained in the selected range.
                        return _dttModel.Data.find({ $and: [{ $or: [{ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }] },
                                // Return those elements start outside the selected range but finish inside the range.
                                { $and: [{ leftEndPosition: { $lt: leftEndPosition } }, { rightEndPosition: { $gt: leftEndPosition, $lte: rightEndPosition } }] },
                                // Return those elements start inside the selected range but finish outside the range.
                                { $and: [{ leftEndPosition: { $gte: leftEndPosition, $lte: rightEndPosition } }, { rightEndPosition: { $gt: rightEndPosition } }] },
                                // Return those elements that start and finish outside the range
                                { $and: [{ leftEndPosition: { $lte: leftEndPosition } }, { rightEndPosition: { $gte: rightEndPosition } }] }] }, { strand: strand }, { objectType: { $in: objectType } }] }).exec().
                        // This function add to the position of the element a character "+" wich means if the position is outside the range
                        then(dtt_response => {
                            let dtt_obj_extracted;
                            for (let i = 0; i < dtt_response.length; i++) {
                                dtt_obj_extracted = dtt_response[i].toJSON();
                                if (dtt_obj_extracted.leftEndPosition < leftEndPosition) dtt_obj_extracted.leftEndPosition = "+" + dtt_obj_extracted.leftEndPosition;
                                if (dtt_obj_extracted.rightEndPosition > rightEndPosition) dtt_obj_extracted.rightEndPosition += "+";
                                dtt_response[i] = dtt_obj_extracted;
                            }
                            return dtt_response;
                        });
                        // When strand is "forward" AND "reverse"
                    else
                        // Return all elements that are contained in the selected range.
                        return _dttModel.Data.find({ $and: [{ $or: [{ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }] },
                                // Return those elements start outside the selected range but finish inside the range.
                                { $and: [{ leftEndPosition: { $lt: leftEndPosition } }, { rightEndPosition: { $gt: leftEndPosition, $lte: rightEndPosition } }] },
                                // Return those elements start inside the selected range but finish outside the range.
                                { $and: [{ leftEndPosition: { $gte: leftEndPosition, $lte: rightEndPosition } }, { rightEndPosition: { $gt: rightEndPosition } }] },
                                // Return those elements that start and finish outside the range
                                { $and: [{ leftEndPosition: { $lte: leftEndPosition } }, { rightEndPosition: { $gte: rightEndPosition } }] }] }, { strand: { $in: ["forward", "reverse"] } }, { objectType: { $in: objectType } }] }).exec().
                        // This function add to the position of the element a character "+" wich means if the position is outside the range
                        then(dtt_response => {
                            let dtt_obj_extracted;
                            for (let i = 0; i < dtt_response.length; i++) {
                                dtt_obj_extracted = dtt_response[i].toJSON();
                                if (dtt_obj_extracted.leftEndPosition < leftEndPosition) dtt_obj_extracted.leftEndPosition = "+" + dtt_obj_extracted.leftEndPosition;
                                if (dtt_obj_extracted.rightEndPosition > rightEndPosition) dtt_obj_extracted.rightEndPosition += "+";
                                dtt_response[i] = dtt_obj_extracted;
                            }
                            return dtt_response;
                        });
                }
        }
    }
}

exports.dttController = dttController;