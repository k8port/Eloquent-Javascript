function arrayToList(a) {
  let head = {value: 0, rest: null};
  let current = head;
  for (let num=0; num<a.length-1; num++) {
  	if (current.value !== a[num])
        current.value = a[num];
    current.rest = {value: 0, rest: null};
    current = current.rest;
  }
  current.value = a[a.length-1]
  current.rest = null;
  return head;
}

function listToArray(list) {
  	let arr = [];
  	let current = list;
  	while (current.rest !== null) {
     	arr.push(current.value);
    	current = current.rest;
   	}
  	arr.push(current.value);
  	return arr;
}

// param: element, list
// create new list from list
// prepends element to front of new list
// return new list
function prepend(element, list) {
  let head = {value: element, rest: list};
  return head;
}

// param: list and number
// returns element at given position (0 is 1st element)
// returns undefined when no such element
function nth(list, num) {
	let n = 0;
  	let head = list;
  	while (n < num) {
    	head = head.rest;
      	n++;
    }
  	return head.value;
}

// alt version: recursive
function nth(list, num) {
  if (num < 0)
    return undefined;
  return nthRec(list, num, 0);
}

function nthRec(list, num, ind) {
	let head = list;
  	if (ind < num)
      return nthRec(list.rest, num, ind+1);
  	else if (ind > num)
      return undefined;
  	else
      return head.value;
}
