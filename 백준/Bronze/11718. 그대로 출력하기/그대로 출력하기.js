const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
for(var i = 0; i < input.length; i++){
    console.log(input[i])
}