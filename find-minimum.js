// Find the minimum number in an array

const numbers = [23, 7, 56, 12, 89, 34, 5, 67];
let min = numbers[0];
for(const num of numbers){
    if(num < min){
        min = num
    }
}
console.log(min)