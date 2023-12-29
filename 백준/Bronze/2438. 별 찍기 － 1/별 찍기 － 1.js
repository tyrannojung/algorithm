const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

let sum = ''
let result = ''
for (let i = 0; i < input; i++){
    sum += `*`
    result += `${sum}\n`
}
console.log(result)