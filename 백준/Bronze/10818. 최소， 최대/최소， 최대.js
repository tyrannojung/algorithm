const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
const new_array = input[0].split(' ').map(Number)
console.log(Math.min(...new_array), Math.max(...new_array))