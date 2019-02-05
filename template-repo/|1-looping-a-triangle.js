//Looping a triangle
//Write a loop that makes seven calls to console.log to output the following triangle:

//#
//##
//###
//####
//#####
//######
//#######
//It may be useful to know that you can find the length of a string by writing .length after it.

let tag = "";
while (tag.length <= 6) {
  tag = tag += "#";
  console.log(tag);
}
