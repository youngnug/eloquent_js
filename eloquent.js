//Excercise 1: Loop Triangle
let line = '';
for (let i = 0; i < 7; i++) {
  line += '#';
  console.log(line);
}

//Excercise 2: FizzBuzz
for (let i = 1; i < 101; i++) {
  let div3 = (i % 3 == 0);
  let div5 = (i % 5 == 0);
  if (div3 && div5)
    console.log("FizzBuzz")
  else if (div3)
    console.log("Fizz")
  else if (div5)
    console.log("Buzz")
  else
    console.log(i)
}
