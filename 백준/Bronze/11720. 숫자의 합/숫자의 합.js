const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
const value_array =input[0].split('').map(Number)
let sum = 0
for(let i = 0; i < value_array.length; i++){
    sum += value_array[i]
} 
console.log(sum)