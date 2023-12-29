const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_, i) => ' '.repeat(i) + '*'.repeat(input-i)).join('\n');
console.log(result)