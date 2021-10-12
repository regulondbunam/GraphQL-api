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
import {Data} from './dttModel';
import {GraphQLError} from 'graphql';

class dttController {
    static getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand='both', objectType = 'all', covered = false){
        if (leftEndPosition > rightEndPosition){
            const err = new GraphQLError('leftEndPosition must be lower than rightEndPosition')
            err.statusCode = 400;
            throw err;
        }
            
        else{
            //When objectType is not defined by the user takes all values by default
            if(objectType == 'all')
                objectType = [
                    'gene', //Ready
                    'promoter', //Ready
                    'operon', // For Second Phase with transcription_unit
                    'tf_binding_site', //Ready
                    'translational_tf_binding_site', //Ready
                    'srna', //Ready
                    'riboswitch',
                    'terminator', //Ready
                    'translational_attenuator',
                    'transcriptional_attenuator',
                    'ppGpp' //Ready
                ];
            // When covered is true means draw only the elements that are contained in the selected range
            if (covered)
            {
                // When strand is "forward" OR "reverse"
                if(strand == 'both')
                    strand = ["forward","reverse"]
                // Return the elements that are completely contained in the selected range
                    return Data.find({$and:[
                        {$or:[
                            {leftEndPosition: {$gte:leftEndPosition}}, 
                            {"linkedObjectWhenNoPositions.leftEndPosition":{$gte:leftEndPosition}}
                        ]}, 
                        {$or:[
                            {rightEndPosition: {$lte: rightEndPosition}}, 
                            {"linkedObjectWhenNoPositions.rightEndPosition":{$lte:rightEndPosition}}
                        ]}, 
                        {$or:[
                            {strand: strand},
                            {strand: {$exists: false}}
                        ]},
                        {objectType: {$in: objectType}}
                    ]});
            }
            //When covered is false means draw both cases, when elements are contained in the range and those that not.
            else{
                //When strand is "forward" OR "reverse"
                if(strand == 'both')
                    strand = ["forward","reverse"]
                // Return all elements that are contained in the selected range.
                return Data.find({$and:[
                    {$or:[
                        {$and:[
                            {leftEndPosition:{$gte:leftEndPosition}},
                            {rightEndPosition:{$lte:rightEndPosition}}
                        ]},
                        // Return those elements start outside the selected range but finish inside the range.
                        {$and:[
                            {leftEndPosition:{$lt:leftEndPosition}},
                            {rightEndPosition:{$gt:leftEndPosition,$lte:rightEndPosition}}
                        ]},
                        // Return those elements start inside the selected range but finish outside the range.
                        {$and:[
                            {leftEndPosition:{$gte:leftEndPosition,$lte:rightEndPosition}},
                            {rightEndPosition:{$gt:rightEndPosition}}
                        ]},
                        // Return those elements that start and finish outside the range
                        {$and:[
                            {leftEndPosition:{$lte:leftEndPosition}},
                            {rightEndPosition:{$gte:rightEndPosition}}
                        ]},
                        // Test for object when positions aren't defined, search in relatedObjects..
                        {$and:[
                            {"linkedObjectWhenNoPositions.leftEndPosition":{$gte:leftEndPosition}},
                            {"linkedObjectWhenNoPositions.rightEndPosition":{$lte:rightEndPosition}}
                        ]},
                        // Return those elements start outside the selected range but finish inside the range.
                        {$and:[
                            {"linkedObjectWhenNoPositions.leftEndPosition":{$lt:leftEndPosition}},
                            {"linkedObjectWhenNoPositions.rightEndPosition":{$gt:leftEndPosition,$lte:rightEndPosition}}
                        ]},
                        // Return those elements start inside the selected range but finish outside the range.
                        {$and:[
                            {"linkedObjectWhenNoPositions.leftEndPosition":{$gte:leftEndPosition,$lte:rightEndPosition}},
                            {"linkedObjectWhenNoPositions.rightEndPosition":{$gt:rightEndPosition}}
                        ]},
                        // Return those elements that start and finish outside the range
                        {$and:[
                            {"linkedObjectWhenNoPositions.leftEndPosition":{$lte:leftEndPosition}},
                            {"linkedObjectWhenNoPositions.rightEndPosition":{$gte:rightEndPosition}}
                        ]}
                    ]},
                    {$or:[
                        {strand: strand},
                        {strand: {$exists: false}}
                    ]},
                    {objectType:{$in: objectType}}
                ]}).exec().
                // This function add to the position of the element a character "+" wich means if the position is outside the range
                then(dtt_response => {
                    let dtt_obj_extracted
                    for(let i =0; i<dtt_response.length; i++){
                        dtt_obj_extracted = dtt_response[i].toJSON();
                        if(dtt_obj_extracted.leftEndPosition != null && dtt_obj_extracted.leftEndPosition < leftEndPosition)
                            dtt_obj_extracted.leftEndPosition = "+" + dtt_obj_extracted.leftEndPosition;
                        if(dtt_obj_extracted.rightEndPosition != null && dtt_obj_extracted.rightEndPosition > rightEndPosition)
                            dtt_obj_extracted.rightEndPosition += "+";
                        dtt_response[i] = dtt_obj_extracted;
                    }
                    return dtt_response
                });
            }
        }    
            
    }
}

export {dttController};