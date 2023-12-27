const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++ ){
    let input_value = input[i].split(' ').map(Number);
    if(!input_value[0] || !input_value[1]){
        continue
    }
    let sum = input_value[0] + input_value[1];
    console.log(sum)
}