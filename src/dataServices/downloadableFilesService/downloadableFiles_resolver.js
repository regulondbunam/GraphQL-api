/**
# ["" Service Resolver]
	
## Description

[Resolves the GraphQL Query based on controller's response
for "" Service]

## Usage 

```javascript
import {} from './'
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

"" web service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

/** import the geneController that contains the resolver functions */
import { DownloadableFiles } from './downloadableFiles_model';
import { downloadableFilesController } from './downloadableFiles_controller';
import { commonController } from '../common/controller_common_functions';

export const downloadableFilesResolver = {
  Query: {
    getDataOfFile: (root, {fileName}) => downloadableFilesController.getDataOfFile(fileName),
  },
};
 