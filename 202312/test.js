let fs = require('fs');
let input = fs.readFileSync('example.txt') // 제출할때는 /dev/stdin로 변경
.toString().split(' ');
console.log(input);