/*
 * Given a list of numbers, return the sum of all odd numbers
 */

/*
 * return 0 if even, 1 if odd
 */
function isOdd(num) {
	return (num & 1) ? 1 : 0;
}

let numL = [1, 6, 11, 7, 32, 54, 120];
let total = 0;

numL.forEach(function(num) {
	if ( isOdd(num) ) {
		total += num;
	}	
});

console.log("Sum of all odd numbers: " + total);
