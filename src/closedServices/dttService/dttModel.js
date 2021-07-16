/**
 # Drawing Traces Tool service model

 ## Description
 This model object is used to access to DB of RegulonDB through mongoose

## Usage
```javascript
import {Data} from './dttModel';
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

import mongoose from 'mongoose';

const linkedObjectsWhenNoPositionsSchema = new mongoose.Schema({
    _id: String,
    leftEndPosition: Number,
    name: String,
    rightEndPosition: Number,
    strand: String,
    type: String
})

const dttDataObject = new mongoose.Schema({
    _id: String,
    objectType: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    strand: String,
    objectRGBColor: String,
    lineWidth: Number,
    lineType: Number,
    labelName: String,
    labelFont: String,
    labelRGBColor: String,
    labelSize: Number,
    tooltip: String,
    lineRGBColor: String,
    organism: {
        organism_id: String,
        organism_name: String
    },
    relatedGenes: [{
        gene_id: String,
        effect: String,
        objectRGBColor: String,
        strand: String,
        tooltip: String
    }],
    linkedObjectsWhenNoPositions: [linkedObjectsWhenNoPositionsSchema]
});

const Data = mongoose.model('dnafeatures', dttDataObject, 'dnaFeatures');

export {Data};

