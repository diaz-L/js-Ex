/*
 * Find the first non repeated character of a given String
 */

function findNonRepeat(str) {
	/* verified non-empty string */
	if (str.length === 0) {	
		return null;
	}

	let letters = str.split('');
	for (let i = 1, letter = letters[0]; i < str.length; i++) {
		if (letters.indexOf(letter, 1) == -1 ) {
			return letter; 
		} else {
			letters.push( letters.shift() );	/* move current elemnt to end of array */	
			letter = letters[0];	/* reset target */
		}
	}

	return null; /* failed to find non-repeated character */
}

console.log("''", findNonRepeat('') );
console.log( 'hello world', findNonRepeat('hello world') );
console.log( 'say something..', findNonRepeat('say something..') );
console.log( 'acaramanamaraca', findNonRepeat('acaramanamaraca') );
console.log( 'anna', findNonRepeat('anna') );
