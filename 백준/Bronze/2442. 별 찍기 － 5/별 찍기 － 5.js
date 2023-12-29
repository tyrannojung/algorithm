const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_ , i) => ' '.repeat(input - i -1) + '*'.repeat(2*(i+1)-1)).join('\n')
console.log(result)