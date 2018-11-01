/*
    You can get the Nth character, or letter, from a string by writing "string"[N].
    The returned value will be a string containing only one character (for example, "b").
    The first character has position 0, which causes the last one to be found at
    position string.length - 1. In other words, a two-character string has length
    2, and its characters have positions 0 and 1.

    Step 1: Write a function countBs that takes a string as its only argument and returns
    a number that indicates how many uppercase “B” characters there are in the string.

 Step 1 Function:
           function countBs(str, count=0) {
             for(let N=0; N<str.length; N++) {
               if (str[N] == 'B')
           		count++;
             }
             return count;
           }


    Next, write a function called countChar that behaves like countBs, except it
    takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase “B” characters). Rewrite countBs to make
    use of this new function.
*/


// Step 2 Functions
function countChar(str, letter, count=0) {
  for(let N=0; N<str.length; N++) {
    if (str[N] == letter)
		count++;
  }
  return count;
}

let countBs = function(str) {
	return countChar(str, 'B');
}
