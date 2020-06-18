const textSearch = (searchString, properties) => {
	let finalObject = {};
	searchString = replaceDoubleQuotes(searchString);
	// prettier-ignore
	let wordsToFind = searchString.split(/\"|\s/);
	wordsToFind = removeEmptyObject(wordsToFind);
	let regexOperator = /^OR|AND|NOT$/i;
	if (wordsToFind.length > 1) {
		do {
			let extractedWord = wordsToFind.shift();
			if (regexOperator.test(extractedWord)) {
				extractedWord = extractedWord.toLowerCase();
				let nextExtract = wordsToFind.shift();
				let orObject;
				let filterPlaceHolder;
				switch (extractedWord) {
					case 'or':
						orObject = buildOrObject(properties, nextExtract);
						filterPlaceHolder = finalObject;
						finalObject = {
							$or: [ orObject, filterPlaceHolder ]
						};
						break;
					case 'and':
						orObject = buildOrObject(properties, nextExtract);
						filterPlaceHolder = finalObject;
						finalObject = {
							$and: [ orObject, filterPlaceHolder ]
						};
						break;
					case 'not':
						orObject = buildNotObject(properties, nextExtract);
						filterPlaceHolder = finalObject;
						finalObject = {
							$and: [ orObject, filterPlaceHolder ]
						};
						break;
				}
			} else {
				//if is not an operator, continues here, replace the possible '_' on word
				finalObject = buildOrObject(properties, replaceChar(extractedWord, 1));
			}
		} while (wordsToFind.length != 0);
	} else {
		finalObject = buildOrObject(properties, replaceChar(wordsToFind[0], 1));
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

function buildOrObject(fieldsToUse, wordToSearch) {
	let orObject = { $or: [] };
	wordToSearch = new RegExp('^' + wordToSearch + '|' + wordToSearch + '\\b', 'i');
	for (let i = 0; i < fieldsToUse.length; i++) {
		let property = fieldsToUse[i];
		orObject['$or'].push({
			[property]: wordToSearch
		});
	}
	return orObject;
}

function buildNotObject(fieldsToUse, wordToSearch) {
	let notObject = { $and: [] };
	wordToSearch = new RegExp(wordToSearch + '\\b', 'i');
	for (let i = 0; i < fieldsToUse.length; i++) {
		let property = fieldsToUse[i];
		notObject['$and'].push({
			[property]: { $not: wordToSearch }
		});
	}
	return notObject;
}

module.exports = { textSearch };
