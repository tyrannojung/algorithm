const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = parseInt(input[0]) + parseInt(input[1])
console.log(sum)