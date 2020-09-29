/**
# name: exampleModel.js version: 1.0

## synopsis

```javascript

import { Example } from './exampleModel'

```

## description
model object to access to DB of RegulonDB through mongoose

## arguments
NA

* __Return:__
NA


## code

**/

import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
	message: String,
	user: String
});

const Example = mongoose.model('name_of_collection', exampleSchema);

export { Example };
