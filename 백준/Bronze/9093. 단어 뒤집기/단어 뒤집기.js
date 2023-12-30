const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const reverseString = (param) => {
    let value = param.split('')
    return value.reverse().join('')
}
let final_value = ''
for(let i = 1; i <= input[0]; i++){
    let value = input[i].split(' ');
    for(let z = 0; z < value.length; z++){
        value[z] = reverseString(value[z])
    }
    final_value += value.join(' ') + '\n'
}
console.log(final_value)