const fs = require('fs')
const [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const inputArray = input.split(' ').map(Number)
const inputArray2 = []
const resultArray = Array.from({length:num}, () => -1)
const countArray = Array.from({length:1000001}, () => 0)
const stackArray = []

for(let i = 0; i < num; i++){
    countArray[inputArray[i]] += 1 
}

for(let i = 0; i < num; i++){
    inputArray2.push(countArray[inputArray[i]])
}

for(let i = 0; i< num; i++){
    while(stackArray.length && inputArray2[stackArray[stackArray.length - 1]] < inputArray2[i]){
        resultArray[stackArray.pop()] = inputArray[i]
    }
    stackArray.push(i)    
}

console.log(resultArray.join(' '))