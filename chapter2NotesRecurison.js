function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
    // Base case returns 1                  power(2 * (0))   --> 1
    // ^                                    |
    // |                                    |
    // Recurses down to base case           v
    // ^                                    power(2 * (2^0)) --> 2
    // |                                    power(2 * (2^1)) --> 4
    // Pass in (2,3) (See logic below)-->   power(2 * (2^2)) --> 8
  }
  //Remember, you're returning exponent - 1 as the value of exponent when its called.
  //Also remember that knowing the value of the base case why this logically makes any sense.
  //Logic: Pass in 2, 3 to power function. Well 2^3 is equal to 2 * 2^2 and so on. Each iteration of this is added to stack until you hit the base case.
  //Once the base condition is met, recurse back up while popping each successfully executed call off the top of the stack.
  
}

console.log(power(2, 3));
// → 8
