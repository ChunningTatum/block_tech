//Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

//Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

//Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// Your code here.
//class maken met bijbehorende.
class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  //zorg ervoor dat de vectoren bij elkaar opgeteld worden.
  plus(vector){
  let x = this.x + vector.x;
  let y = this.y + vector.y;
  return new Vector(x, y)
  } 
  
  //zorg ervoor dat vectoren afgetrokken worden.
  minus(vector){
  let x = this.x - vector.x;
  let y = this.y - vector.y;
  return new Vector(x, y);
  } 
  
  //Voer math.hypot uit en geef dan de niewe x en y 
  get length() {
  return Math.hypot(this.x, this.y);
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
