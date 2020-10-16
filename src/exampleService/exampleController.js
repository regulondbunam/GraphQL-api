/**
# Example Service Model
	
## Description

Here are defined all function with logic to connect and get data from DB,
they return responses obtained to the resolvers

## Usage 

```javascript
import { exampleController } from './exampleController';
exampleController.getExample()
```

## Arguments/Parameters

N/A

## Examples

[Example details]

## Return 

N/A

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: [full developer name]
**/


/**
	
# Functions description

## [Function name]

__Description:__ 

[Description of the function]


__Usage:__

```javascript
&function(Parameters, if any);
```

__Input arguments/parameters:__ 

__[Name]:__ [Description]
__[Name]:__ [Description]

__Return:__ 

__[Type]:__ [Name]
[Description (if necessary)]
**/

// import defined model of the collection to be used
import { Example } from './exampleModel';

class exampleController {
	static async getExample() {
		return {
			message: 'Hello World',
			user: 'RegulonDB'
		};
	}
}

export { exampleController };
