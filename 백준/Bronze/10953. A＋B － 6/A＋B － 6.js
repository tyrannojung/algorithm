const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
for(let i = 0; i < input.length; i++) {
    let split_value = input[i].split(",").map(Number)
    let sum = split_value[0] + split_value[1]
    console.log(sum)
}