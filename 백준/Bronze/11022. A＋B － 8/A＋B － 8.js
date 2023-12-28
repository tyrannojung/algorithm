const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()

for(let i = 0; i < input.length; i++) {
    let split_value = input[i].split(' ').map(Number)
    let value_first = split_value[0]
    let value_second = split_value[1]
    let sum = value_first + value_second;
    console.log(`Case #${i+1}: ${value_first} + ${value_second} = ${sum}`)
}