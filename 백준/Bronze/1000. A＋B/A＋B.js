let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
.toString().split(' ');
let sum = parseInt(input[0]) + parseInt(input[1])
console.log(sum);