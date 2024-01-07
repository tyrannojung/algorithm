const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = []
result.push((input[0] + input[1]) % input[2])
result.push(((input[0] % input[2]) + (input[1] % input[2])) % input[2])
result.push((input[0] * input[1]) % input[2])
result.push(((input[0] % input[2]) * (input[1] % input[2])) % input[2])

console.log(result.join('\n'))