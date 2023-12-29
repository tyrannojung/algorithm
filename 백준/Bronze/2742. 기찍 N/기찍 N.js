const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let sum = '';

for(let i = parseInt(input); 0 < i; i--){
    sum += i + '\n'
}
console.log(sum)