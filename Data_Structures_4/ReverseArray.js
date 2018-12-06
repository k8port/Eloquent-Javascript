/*
    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the standard
    reverse method.
 */

// swap algorithms
// #1 The Temp Swap
//		a. init left index to 0 and right index to len-1
//		b. swap current left index with swap right index
//		c. decrement right index, increment left index
// 		d. stop when left >= right
// #2 The XOR Swap  (faster in Chrome)
//		a. int left index to 0, init right to len-1-left
//      b. swap current left index with current right index
//		c. increment left index
//	 	d. stop when left index >= len/2
function reverseArray(arr) {
  let nArr = [];
  for (let x=arr.length-1; x>=0; x--) {
    nArr.push(arr[x]);
  }
  return nArr;
}

function reverseArrayInPlace(arr) {
  	for (let l=0; l<arr.length/2; l++) {
      let r = arr.length - 1 - l;
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
    }
  	return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
