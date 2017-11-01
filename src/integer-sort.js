"use strict";
/**
 *
 * Given a positive integer between 0 and 100,000,000, sort the individual numbers in the integer from greatest to smallest,
 * generating the largest integer possible.
 * Example:  input set: (12345) would return 54321
 * Example:  input set: (52067146) would return 76654210
 *
 */
class IntegerSort {

  static sort(integer) {

    var intArray = ("" + integer).split("").map(Number);

    if (intArray.length === 1) {
      return intArray[0];
    }

    intArray = this.quickSort(intArray, 0, intArray.length - 1);
    return +(intArray.join(""));
  }

  static quickSort(intArray, left, right) {

    var pivot;
    var partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = this.partition(intArray, pivot, left, right);

      this.quickSort(intArray, left, partitionIndex - 1);
      this.quickSort(intArray, partitionIndex + 1, right);
    }
    return intArray;
  }

  static partition(intArray, pivot, left, right) {

    var pivotValue = intArray[pivot];
    var partitionIndex = left;

    for (var i = left; i < right; i++) {
      if (intArray[i] > pivotValue) {
        this.swap(intArray, i, partitionIndex);
        partitionIndex++;
      }
    }
    this.swap(intArray, right, partitionIndex);
    return partitionIndex;
  }

  static swap(intArray, i, j) {

    var temp = intArray[i];

    intArray[i] = intArray[j];
    intArray[j] = temp;
  }
}

module.exports = IntegerSort;
