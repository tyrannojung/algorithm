const fs = require('fs')
const [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const inputArray = input.split(' ').map(Number)
const resultArray = Array.from({length:num}, () => -1)
const checkStack = []

for(let i = 0; i < num; i ++){
    while(checkStack.length && inputArray[checkStack[checkStack.length - 1]] < inputArray[i]){
        resultArray[checkStack.pop()] = inputArray[i]
    }
    checkStack.push(i)
}

console.log(resultArray.join(' '))