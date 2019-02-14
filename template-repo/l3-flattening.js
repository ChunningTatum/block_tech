//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.


//Array die ik om moet zetten naar → [1, 2, 3, 4, 5, 6]
let arrays = [[1, 2, 3], [4, 5], [6]];
//Maak een lege array aan, waar de oude array in moet
let newArray = [];

//For loop, omdat het een mulidimentionaal array is en geconvert moet worden naar een single dimentionaal.
for (var i = 0; i < arrays.length; i++) {
  newArray = newArray.concat(arrays[i]);
}

console.log(newArray);
// → [1, 2, 3, 4, 5, 6]
