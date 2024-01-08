const fs = require('fs')
const [num, ...inputArray] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const resultArray = []

const calculateGCD = (param1, param2) => {
    let a, b, c, d
    let gcd
    
    if(param2 > param1){
        a = param2
        b = param1
    }   else {
        a = param1
        b = param2
    }

    while(true){
        if(a % b != 0){
            let temp = a % b;
            a = b
            b = temp
        } else {
            gcd = b
            break
        }
    }

    c = param1 / gcd
    d = param2 / gcd
    resultArray.push(gcd * c * d)
}

for(let i = 0; i < num; i++){
    [value1, value2] = inputArray[i].split(' ').map(Number)
    calculateGCD(value1, value2)
}
console.log(resultArray.join('\n'))