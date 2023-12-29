const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_,i) => ' '.repeat(input - i - 1) + addSpace(i, input));
console.log(result.join('\n'))

function addSpace(i, input){
    if (i == 0)
        return '*';
    else if (i + 1 == input)
        return '*'.repeat(input * 2 -1)
    else
        return '*' + ' '.repeat(i * 2 -1) + '*'
}