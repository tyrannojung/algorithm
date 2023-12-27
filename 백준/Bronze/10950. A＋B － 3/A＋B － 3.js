const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);
input.shift();

for(let i = 0; i < num; i++ ){
    let input_value = input[i].split(' ').map(Number);
    let sum = input_value[0] + input_value[1];
    console.log(sum)
}