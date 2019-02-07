 // Your code here.
//You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs(string) {
	const searchForB = "B";
  	let countB = 0;
  
  for(let i = 0; i < string.length; i++){
    if(string[i] === searchForB){
      countB++;
    }
  }
  return "Er zijn " + countB + " B's.";
}

function countChar(string, k) {
  let countK = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === k.toLowerCase()) {
      countK++;
    }
  }
  return "Er zijn " + countK + " K's.";
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "K"));
// → 4
