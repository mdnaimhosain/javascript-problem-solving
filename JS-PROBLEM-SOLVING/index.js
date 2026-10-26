// Problem: Find the sum and count of numbers greater than 15.
// Concepts: Array, for...of, if condition, sum, counter.

const numbers = [10, 75, 8, 40, 17, 42];
let sum = 0;
let count = 0;

for (const num of numbers) {
  if (num > 15) {
    sum = sum + num;
    count++;
  }
}

console.log(sum); //174
console.log(count); //4
