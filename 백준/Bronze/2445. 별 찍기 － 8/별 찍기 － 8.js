const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
let result = Array.from({length : input}, (_ , i) => '*'.repeat(i+1) + ' '.repeat((input - i -1)*2) + '*'.repeat(i+1))
let reverse_result = [...result].reverse()
result.pop()
if(!result.join('\n')){
    console.log(reverse_result.join('\n'))
}else {
    console.log(result.join('\n') + '\n' + reverse_result.join('\n'))
}