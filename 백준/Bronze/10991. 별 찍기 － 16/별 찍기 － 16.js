const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_,i) => ' '.repeat(input - i - 1) +addSpacesToAsterisks('*'.repeat(i + 1)));
console.log(result.join('\n'))

function addSpacesToAsterisks(str) {
    return str.replace(/\*(?=\*)/g, '* ');
}