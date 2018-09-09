"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    var array2 = "";
    array.forEach(function(element, i) {
      if (i === array.length - 1) {
        array2 += element;
        console.log(array2);
        // return array2;
      }
      array2 += element + separator + ' ';
    });
  }
}


const value = _.join(["hello", "goodbye"], ", ")

console.log(value);