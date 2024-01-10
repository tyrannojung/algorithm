const fs = require('fs')
const inputArray = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const primeArray = [-1,-1]
const primeCheckArray = []
const resultArray = []

for(k = 2; k <= 1000000; k++){
    let check = true
    for(l = 2; l <= Math.sqrt(k); l++){
        if(k % l === 0){
            check = false
            break
        }
    }
    if (check) {
        primeArray.push(k)
        primeCheckArray.push(k)
    } else {
        primeArray.push(-1)
    }
}

const checkGoldbach = (param) => {
    for(let z = 0; z < primeCheckArray.length; z++){
        let check = false
        if(primeArray[param - primeCheckArray[z]] != -1){
            check = true
            resultArray.push(`${param} = ${primeCheckArray[z]} + ${primeArray[param - primeCheckArray[z]]}`)
            break
        }
        if(param <= primeCheckArray[z]){
            if(!check){
                resultArray.push("Goldbach's conjecture is wrong.")
            }
            break
        }
    }
}

for(let i = 0; i < inputArray.length - 1; i++){
    checkGoldbach(inputArray[i])
}

console.log(resultArray.join('\n'))