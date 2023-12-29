const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_ , i) => ' '.repeat(input - i -1) + '*'.repeat(i+1))
let reverse_result = [...result].reverse();
reverse_result.shift()

console.log(result.join('\n') + '\n' + reverse_result.join('\n'))