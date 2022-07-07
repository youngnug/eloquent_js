function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } 
  else {
    return base * power(base, exponent - 1)
    // Pass in (2,3)           returns-->   2 * power(2,2) waiting on power(2,2)...got it! 2 * (4) = (8)
    // Loops around with (2,2) returns-->   2 * power(2,1) waiting on power(2,1)...got it! 2 * (2) = (4)
    // Loops around with (2,1) returns-->   2 * power(2,0) waiting on power(2,0)...got it! 2 * (1) = (2)
    // Loops around with (2,0) returns-->   power(2,0) == (1);
  
  }
  //You pass in 3, so the if statement is false, go to else. Then 2 * power(2,3-1) is called. That function call immediately loops us back to the top at the definition
  //Same process repeateds until 0, this satisfies the return 1 statement.
  //Once 1 is returned, the stack of calls depicted to the right above have the answer they were waiting on. power(2,0) == 1
  //Logic: Pass in 2, 3 to power function. Well 2^3 is equal to 2 * 2^(2-1) and so on. Each iteration of this is added to stack until you hit the base case.
}

console.log(power(2, 3));
// → 8
