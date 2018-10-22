/* 
 * Create a function that returns 'true' if the given string is a palindrome. Otherwise, return false. Remove all alphanumberic
 * characters. Constraint to 1 <= palindrome <= 10^5.
 * (hint: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, 
 * and spacing.)
 */


function reverseString(str) {
	return str.split('').reverse().join('');
}

function isPalindrome(str) {
	/* constraint */
	if (str.length < 1 || str.length > 100000) {
		return false;
	}

	/* remove non-alphanum */
	let regex = /[ ,.;:!?]+/gi;
	str = str.replace(regex, '').toLowerCase();

	/* reverse string */
	let reverseStr = str.split('').reverse().join('');

	return (str === reverseStr) ? true : false;
}

console.log( 'Maps, DNA, and spam.', isPalindrome('Maps, DNA, and spam.') );
console.log( 'Pull up if I pull up.', isPalindrome('Pull up if I pull up.') );
console.log( 'Cigar? Toss it in a can. It is so tragic.', isPalindrome('Cigar? Toss it in a can. It is so tragic.') );
console.log( 'Anna', isPalindrome('Anna') );
console.log( 'hello world', isPalindrome('hello world') );
