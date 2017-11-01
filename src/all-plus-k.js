"use strict";

/**
 *
 * Given a set of ‘N’ numbers and K, return an array of values where "value + K" also exists in the set of numbers.
 * Example:  input set: (1, 2, 3, 4) where  K = 2.  In this case you result would be [1, 2] because 3 (i.e. 1 + K = 3) is in the array, and 4 (2 + K = 4) is also in the array.
 * Example:  input set: (1, 4, 7, 20, 23) where  K = 3.  In this case you result would be [4, 20] because 4 + K = 7 (which is in the set) and 20 + K = 23 (which is in the set)
 *
 */
class AllPlusK {

  static get(array, k) {

    var resultArry = [];
    let set = new Set(array);

    /* for (let i in array) {

      if (array.indexOf(array[i] + k) > -1) {

        resultArry.push(array[i]);

      } else {
        // Do Nothing
      }
    } */

    for (let value of set) {
      if (set.has(value + k)) {
        resultArry.push(value);
      }
    }
    return resultArry;
  }
}

module.exports = AllPlusK;
