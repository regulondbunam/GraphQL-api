/**
 # Coexpression service model

 ## Description
 This model object is used to access to DB of RegulonDB through mongoose

## Usage
```javascript
import {CoexpressionData} from './coexpressionModel';
```

##Arguments/parameters
N/A

## Examples
N/A

## Return 
N/A

## Category
RegulonDB Coexpression web service

## License 

## Author 

 **/
import mongoose from 'mongoose';

const coexpressedGenesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    locusTag: String
});

const coexpressionDataObject = new mongoose.Schema({
    _id: String,
    gene: [coexpressedGenesSchema],
    rank: Number,
    organism: {
        _id: String,
        name: String
    }
});

const CoexpressionData = mongoose.model('geneCoexpressions',coexpressionDataObject,'geneCoexpressions');

export {CoexpressionData};