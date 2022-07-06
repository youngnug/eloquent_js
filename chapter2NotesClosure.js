//functions inside functions (I think this is called higher order)
//When you do this, you're returning a function within a function. Because of this, you will have TWO return values.
//The inner-most value is the value being returned by the nested function.
//The outer return is the NESTED FUNCTION ITSELF
//Because you can treat functions as the values they return, you're able to return the nested function as its return value.
//Not incredibly practicle in this example, but can imagine that added complexity can be built into the nested function which can then be returned as a value to the outer.
//You don't need to give this inner function a name (as seen in the arrow function and nameless declaration) as it is only called by the outer functiion
//This means it will automatically be called when the outer-function is called.

//Closure is the idea that functions create new copies of their local variables every function call. This means one function call will not effect the values of another.
//These functions also demonstrate closure. When multiplier is assigned to twice and 2 is passed in, it essentially creates let factor = 2; within the local environment.
//The function value returned by multiplier (newnums' return value, which then becomes newnums value) remembers this enviroment, so it can multiply 2 * 5 when called.

//Can write like this:
function multiplier(factor) {
  return function newnum(number){
    return number * factor;
  }
}

let twice = multiplier(2);
let three = multiplier(3);
console.log(twice(5));
// → 10
console.log(three(5));
// → 15

//OR THIS
function multiplier(factor) {
  return function(number){
    return number * factor;
  }
}

let twice = multiplier(2);
let three = multiplier(3);
console.log(twice(5));
// → 10
console.log(three(5));
// → 15

OR THIS
function multiplier(factor) {
  return number => {return number * factor};
  }

let twice = multiplier(2);
let three = multiplier(3);
console.log(twice(5));
// → 10
console.log(three(5));
// → 15

//OR THIS
function multiplier(factor) {
  return number => number * factor;
  }

let twice = multiplier(2);
let three = multiplier(3);
console.log(twice(5));
// → 10
console.log(three(5));
// → 15
