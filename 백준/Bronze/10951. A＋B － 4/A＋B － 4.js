const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++ ){
    let input_value = input[i].split(' ').map(Number);
    let sum = input_value[0] + input_value[1];
    console.log(sum)
}