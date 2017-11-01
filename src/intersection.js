"use strict";

/**
 *
 * Write an intersection function that takes two arrays and returns the intersection of the two arrays.
 * The return data type will be an array.  There is a naive O(n^2) solution and a better O(n) solution.
 *
 */
class Intersection {

  static intersect(array1, array2) {
    var intersection = [];
    let Set1 = new Set(array1);
    let Set2 = new Set(array2);

    /*  for ( var index in array2 )
        if ( array1.indexOf(array2[index]) != -1 )
          intersection.push(array2[index]); */

    for (let value of Set2) {
      if (Set1.has(value)) {
        intersection.push(value);
      }
    }
    return intersection;
  }
}

module.exports = Intersection;
