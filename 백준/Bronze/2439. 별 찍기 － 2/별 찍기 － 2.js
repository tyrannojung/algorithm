const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let sum = ''
let result = ''
for(let i = 1; i <= input; i++){
    let space = ''
    space = " ".repeat(input - i);
    sum += '*';
    result += `${space}${sum}\n`
}

console.log(result)