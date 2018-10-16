/* 
 * factorial is defined only for non-negative integer numbers
 * note: recursion makes the operation more expensive because of the use of the stack
 * output: 5! = 120
 *			  11! = 39916800
 */

function factorial(num) {
	if ( num <= 1 ) {
		return 1;
	}

	return num * factorial(num - 1);
}

console.log( "5! = " + factorial(5) );
console.log( "11! = " + factorial(11) );
