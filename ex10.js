/*
 * Write a function findSum. Up to and including n, this function will return the sum of all multiples of 3 and 5.
 */

function findSum(n) {
	let sum = 0;
	for(let i=1;i <= n; i +=1) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}

	return sum;
}

console.log('5', findSum(5) );
console.log('10', findSum(10) );
console.log('3', findSum(3) );
console.log('33', findSum(33) );
console.log('2', findSum(2) );
