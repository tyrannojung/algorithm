const fs = require('fs')
const [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const inputArray = input.split(' ').map(Number)

let resultCount = 0;
for(let i = 0; i < num; i++){
    if(inputArray[i] == 1)
        continue
    let check = true
    for(z = 2; z <= Math.sqrt(inputArray[i]); z++){
        if(inputArray[i] % z == 0){
            check = false
            break
        }
    }
    if (check)
        resultCount ++
}
console.log(resultCount)