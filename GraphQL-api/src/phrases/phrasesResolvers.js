/**
# [Phrases Service resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for Phrases Service]

## Usage 

```javascript
import {phrasesResolver} from './phrasesResolver'
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

RegulonDB Team: Lopez Almazo Andres Gerardo
**/
import { phrasesController } from './phrasesController';

export const phrasesResolvers = {
  Query: {
    getPhraseOf: (root, {id}) => phrasesController.getPhraseOf(id),
  },
};
