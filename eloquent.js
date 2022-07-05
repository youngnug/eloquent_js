//Excercise 1: Loop Triangle
let line = '';
for (let i = 0; i < 7; i++) {
  line += '#';
  console.log(line);
}
//OR
let marioTower = '';
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < i + 1; j++){
  marioTower += '#'
  }
  marioTower += '\n'
}
console.log(marioTower)

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
//OR
for (let i = 1; i <= 100; i++) {
  let words = "";
  if (i % 3 == 0) words += "Fizz";
  if (i % 5 == 0) words += "Buzz";
  console.log(words || i);
}
// Excercise 3: Chess Board.
let size = 8;
let board = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++){
    if ((i+j) % 2 == 0) {
      board += ' ';
    }
    else
      board += '#';
  }
  board += '\n'
}
console.log(board);
