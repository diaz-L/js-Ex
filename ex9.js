/*
 * The nth Fibonacci number is given by: Fn = Fn-1 + Fn-2
 * The first two terms of the series are 0, 1.
 * Hence, the series is : 0, 1, 1, 2, 3, 5, 8, 13...
 * Write a function that determines nth Fibonacci
 */

function fibonacci(n) {
	if(n < 0) { return 0 }
	else if (n == 1) { return 1 }

	return fibonacci(n-1) + fibonacci(n-2)
}


console.log('0', fibonacci(0))
console.log('1', fibonacci(1))
console.log('2', fibonacci(2))
console.log('3', fibonacci(3))
console.log('4', fibonacci(4))
console.log('5', fibonacci(5))
console.log('6', fibonacci(6))
console.log('7', fibonacci(7))
console.log('8', fibonacci(8))
console.log('9', fibonacci(9))
console.log('10', fibonacci(10))
