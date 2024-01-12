const fs = require('fs')
const [num, ...inputArray] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const resultValue = []

const gcdCalculator = (param1, param2) => {
    let a = param1
    let b = param2
    let gcd = 0
    if(b > a){
        a = b
        b = param1
    }
    while(true){
        if(a % b != 0){
            let remainder = a % b
            a = b
            b = remainder
            continue
        }
        gcd = b
        break
    }
    return gcd
}
for(let i = 0; i< num; i++){
    let sum = 0;
    let [n, ...input] = inputArray[i].split(' ').map(Number)
    for(let z = 0; z < n; z++){
        for(let k = z + 1; k < n; k++){
            let gcd = gcdCalculator(input[z],input[k])
            sum += gcd
        }
    }
    resultValue.push(sum)
}
console.log(resultValue.join('\n'))