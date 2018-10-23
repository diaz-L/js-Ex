/*
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * Guaranteed constraints:
 *		2 ≤ numL.length ≤ 10,
 *		-1000 ≤ numL[i] ≤ 1000.
 */

function adjacentElementsProduct(numL) {
   
	 /* limit the number of elements in array */ 
    if (numL.length < 2 || numL.length > 10) {
            return null;
    }
    
    let largest = numL[0] * numL[1];
    
    for( let i = 1, j = 2, total = 0; j <= numL.length; i++, j++ ) {
        total = numL[i] * numL[j];
        if (total > largest) {
            largest = total;
        }
    }
    
    return (largest >= -1000 || largest <= 1000) ? largest : null;

}

let print = console.log;

print( "-12 = " + adjacentElementsProduct( [-23, 4, -3, 8, -12] ) );
print( "6 = " + adjacentElementsProduct( [4, 1, 2, 3, 1, 5, 1, 0, 1000] ) );
print( "15 = " + adjacentElementsProduct( [3, 5, -1, 2] ) );
print( "-10 = " + adjacentElementsProduct( [2, -5, 7, -11] ) );
print( "null = " + adjacentElementsProduct( [4, 1, 2, 3, 1, 5, 1, 0, 1, 0, 1000] ) );
