/*
 * Given a year, write a function that returns the century it is in. Guaranteed constraints 1 <= year <= 2030.
 */

function centuryFromYear(year) {
	if(year < 1 || year > 2030) {
		console.log('Invalid year');
	} else {
		/* determine century */
		let rem = year % 100;
		let century = (rem > 1) ? Math.floor(year / 100) + 1 : Math.floor(year / 100);

		console.log(century);
	}
}

centuryFromYear(1920);		// 20
centuryFromYear(-18);		// invalid year
centuryFromYear(2000);		// 20
centuryFromYear(1879);		// 19
centuryFromYear(2100); 		// invalid year
centuryFromYear(2018);		// 21
