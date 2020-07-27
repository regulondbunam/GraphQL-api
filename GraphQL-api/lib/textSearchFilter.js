/** This function contains all needed to build filters for Search
 *  without using $text operator that mongoDB use, this function can
 *  define if the search will be partial or full match, also accepts 
 *  a String array that contains all the fields that will be queried
 * 
 *  textSearch is the Main function and this start the build process
 *  @param {String} searchString contains all argument and operator that
 * 	will be parsed
 * 	@param {Array} properties contains all field that will be queried by
 * 	all search args.
 * 	@param {Boolean} fullMatchOnly indicates if the query accepts partial
 * 	or full match 
 */
const textSearch = (searchString, properties, fullMatchOnly) => {
	let finalObject = {};
	// used to search args defined by two or more words
	searchString = replaceDoubleQuotes(searchString);
	// get an array with all arguments and operators and remove all possible
	// empty objects
	// prettier-ignore
	let wordsToFind = searchString.split(/\"|\s/);
	wordsToFind = removeEmptyObject(wordsToFind);
	let regexOperator = /^OR|AND|NOT$/i;
	// function start a loop to search all possible operator
	if (wordsToFind.length > 1) {
		do {
			// obtain the first element in array and detects if is an operator
			let extractedWord = wordsToFind.shift();
			if (regexOperator.test(extractedWord)) {
				// with an operator encounter, function needs next element in array,
				// and identified all special characters that are contained
				extractedWord = extractedWord.toLowerCase();
				let nextExtract = escapeChar(wordsToFind.shift());
				// build the filter based on the operator obtained
				let operatorObject;
				let filterPlaceHolder;
				switch (extractedWord) {
					case 'or':
						operatorObject = buildOrObject(properties, nextExtract, fullMatchOnly);
						filterPlaceHolder = finalObject;
						finalObject = {
							$or: [ operatorObject, filterPlaceHolder ]
						};
						break;
					case 'and':
						operatorObject = buildOrObject(properties, nextExtract, fullMatchOnly);
						filterPlaceHolder = finalObject;
						finalObject = {
							$and: [ operatorObject, filterPlaceHolder ]
						};
						break;
					case 'not':
						operatorObject = buildNotObject(properties, nextExtract, fullMatchOnly);
						filterPlaceHolder = finalObject;
						finalObject = {
							$and: [ operatorObject, filterPlaceHolder ]
						};
						break;
				}
			} else {
				//if is not an operator, continues here, replace the possible '_' on word
				extractedWord = replaceChar(extractedWord, 1);
				finalObject = buildOrObject(properties, escapeChar(extractedWord), fullMatchOnly);
			}
		} while (wordsToFind.length != 0);
	} else {
		// if is only an arg in the string the filter will be builded without a loop
		let word = replaceChar(wordsToFind[0], 1);
		finalObject = buildOrObject(properties, escapeChar(word), fullMatchOnly);
	}
	return finalObject;
};

/** this function removes all empty elements that could be in an array
 * @param {Array} elementsArray the array that need to remove empty elements
 */
function removeEmptyObject(elementsArray) {
	// this variable is false until array has empty elements
	var noEmptyElements = false;
	do {
		const index = elementsArray.indexOf('');
		//identifies if a element is empty, and remove them
		if (index > -1) {
			elementsArray.splice(index, 1);
		} else noEmptyElements = true; //if there are no empty elements, change the variable to true to break the loop
	} while (noEmptyElements === false);
	return elementsArray;
}

/** Replace a char in specific position 
 * @param {String} str string that will change
 * @param {number} index position of the char
 * @param {Char} chr char value that replace in position
*/
function setCharAt(str, index, chr) {
	if (index > str.length - 1) return str;
	return str.substr(0, index) + chr + str.substr(index + 1);
}

/** function that locates parentheses and changes values in arguments with multiple words
* @param {String} searchString String to parse
*/
function replaceDoubleQuotes(searchString) {
	let i = 0;
	do {
		if (String(searchString).charAt(i) == '"') {
			do {
				i++;
				if (String(searchString).charAt(i) === ' ') {
					searchString = setCharAt(searchString, i, '_');
				}
			} while (String(searchString).charAt(i) != '"');
		}
		i++;
	} while (i < searchString.length);
	return searchString;
}

/** function that locates parentheses and changes values in arguments with multiple words
* @param {String} variousWord String to change to it original form
* @param {number} skip if it exists, don't add the escaped quotes
*/
function replaceChar(variousWord, skip) {
	for (let i = 0; i < variousWord.length; i++) {
		if (String(variousWord).charAt(i) === '_') {
			variousWord = setCharAt(variousWord, i, ' ');
			if (skip === undefined) variousWord = `\"${variousWord}\"`;
		}
	}
	return variousWord;
}

/** function to build a filter part with the arg transformed to regex and applied to
 *  all field to be queried
 *  @param {Array} fieldsToUse contains all fields to use
 *  @param {String} wordToSearch arg to be queried
 *  @param {Boolean} fullMatchOnly defines if will be partial or full match
 */
function buildOrObject(fieldsToUse, wordToSearch, fullMatchOnly) {
	let orObject = { $or: [] };
	if (fullMatchOnly) wordToSearch = new RegExp('\\b' + wordToSearch + '\\b', 'i');
	else wordToSearch = new RegExp('\\b' + wordToSearch, 'i');
	for (let i = 0; i < fieldsToUse.length; i++) {
		let property = fieldsToUse[i];
		orObject['$or'].push({
			[property]: wordToSearch
		});
	}
	return orObject;
}

/** function to build a filter part with the argument transformed to regular expression 
 *  and applied to all the fields to query when the argument is preceded by a "NO" operator
 *  @param {Array} fieldsToUse contains all fields to use
 *  @param {String} wordToSearch arg to be queried
 *  @param {Boolean} fullMatchOnly defines if will be partial or full match
 */
function buildNotObject(fieldsToUse, wordToSearch, fullMatchOnly) {
	let notObject = { $and: [] };
	if (fullMatchOnly) wordToSearch = new RegExp('\\b' + wordToSearch + '\\b', 'i');
	else wordToSearch = new RegExp('\\b' + wordToSearch, 'i');
	for (let i = 0; i < fieldsToUse.length; i++) {
		let property = fieldsToUse[i];
		notObject['$and'].push({
			[property]: { $not: wordToSearch }
		});
	}
	return notObject;
}

/** function to replace all special characters in the argument with the same 
 *  character but escaped */
// prettier-ignore
function escapeChar(str) {
	return str.replace(/[\+\-\&\/]/g, (match) => {
		return {
			'\+': '\\+',
			'\-': '\\-',
			'\&': '\\&',
			'\/': '\\/',
		}[match];
	});
}

module.exports = { textSearch };
