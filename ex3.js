/*
 * Given the temperature in degree Celsius, write a function that convert to Fahrenheit (hint: F = t * 9/5 + 32)
 * output: 
 * 			32C : 89.6F
 *				0C : 32F
 * 			17C : 62.6F
 */

function convertToFahrenheit(deg) {
	return deg * 9 / 5 + 32;
}

console.log( "32C : " + convertToFahrenheit(32) + "F" );
console.log( "0C : " + convertToFahrenheit(0) + "F" );
console.log( "17C : " + convertToFahrenheit(17) + "F" );
