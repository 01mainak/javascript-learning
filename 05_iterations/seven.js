const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

// @audit CHAINING
const newNums = myNumers
  .map((num) => num + 1) // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  .map((num) => num * 10) // [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
  .filter((num) => num > 40); // [50, 60, 70, 80, 90, 100, 110]

console.log(newNums);
