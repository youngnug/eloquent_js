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
  //Logic: Pass in 2, 3 to power function. Well 2^3 is equal to 2 * 2^2 and so on until you hit base case.
  
}

console.log(power(2, 3));
// → 8
