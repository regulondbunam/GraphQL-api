/**
# Example Service Model
	
## Description

model object to access to DB of RegulonDB through mongoose

## Usage 

```javascript
import { Example } from './exampleModel';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: [full developer name]
**/

import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
	message: String,
	user: String
});

const Example = mongoose.model('name_of_collection', exampleSchema);

export { Example };
