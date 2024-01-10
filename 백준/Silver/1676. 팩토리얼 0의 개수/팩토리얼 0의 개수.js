const fs = require('fs')
const input = BigInt(fs.readFileSync('/dev/stdin').toString().trim())
let check = BigInt(1)
for(let i = BigInt(1); i <= input; i++){
    check *= i
}
check = check.toString().split('')

let result = 0
for(let i = check.length-1; i >= 0; i--){
    if(check[i] == 0){
        result ++
        continue
    }
    break
}

console.log(result)