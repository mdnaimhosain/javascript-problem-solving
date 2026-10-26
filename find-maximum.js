// Find the maximum number in an array

const numbers = [23, 7, 56, 12, 89, 34, 5, 67];
let max = numbers[0];
for(const num of numbers){
    if(num > max){
        max = num
    };
}
console.log(max)