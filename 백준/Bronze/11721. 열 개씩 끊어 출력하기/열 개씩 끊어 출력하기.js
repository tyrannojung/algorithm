const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let chunks = input[0].match(/.{1,10}/g);

for(let i = 0; i < chunks.length; i++ ){
    console.log(chunks[i])
}