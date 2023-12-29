const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

let sum = '';
for(let i = 1; i <= input; i ++) {
    sum += i + '\n'
}

console.log(sum)