const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const primeCheck = (param) => {
    let result = false
    let check = true
    if(param == 1)
        return result

    for(let i = 2; i <= Math.sqrt(param); i ++){
        if(param % i == 0){
            check = false
            break
        }       
    }
    if (check)
        result = true
    return result
}

const numberArray = []
const resultArray = []

for(let i = input[0]; i <= input[1]; i++){
    numberArray.push(i)
}

for(let i = 0; i <numberArray.length; i++){
    if(primeCheck(numberArray[i]))
        resultArray.push(numberArray[i])
}

console.log(resultArray.join('\n'))