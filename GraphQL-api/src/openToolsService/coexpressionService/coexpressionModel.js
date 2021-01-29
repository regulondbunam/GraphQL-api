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

const coexpressionDataObject = new mongoose.Schema({
    _id: String,
    gene_id1: String,
    gene_id2: String,
    locusTag1: String,
    locusTag2: String,
    gene_name1: String,
    gene_name2: String,
    rank: Number,
    organism: {
        organism_id: String,
        organism_name: String
    }
});

const CoexpressionData = mongoose.model('genecoexpressionTests',coexpressionDataObject,'geneCoexpressionTests');

export {CoexpressionData};