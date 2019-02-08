 // Your code here.
//We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//Zero is even.

//One is odd.

//For any other number N, its evenness is the same as N - 2.

//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?


// Your code here.
function range(start, end){
  let tableOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return tableOfNumbers;
}

function sum(array){
  let tableOfNumbers2 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let totaal = 0;
  
  for(i = 0; i < tableOfNumbers2.length; i++){
    totaal += i;
  }
  
  return totaal;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
