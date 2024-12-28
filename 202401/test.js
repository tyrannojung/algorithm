/*17298 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')
// console.log(num, input)
// const inputArray = input.split(' ').map(Number)
// const resultArray = []

// let z = 0;
// let rightMax = -1
// while(true){
    
//     let value = inputArray.pop()
//     if(resultArray.length == num -1){
//         resultArray.push(-1)
//         break
//     }
//     console.log("value === ",value)
//     console.log("z=====", inputArray[z])

//     if(inputArray[z] < value){
//         rightMax = value
//     }
    
//     inputArray.unshift(value)
//     z++
    
//     console.log(inputArray)
//     if(z == inputArray.length - 1){
//         inputArray.pop()
//         resultArray.push(rightMax)
//         z = 0
//         rightMax = -1
//     }
// }
// console.log("resultArray===",resultArray)

/*17298 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const inputArray = input.split(' ').map(Number)
// const resultArray = Array.from({length:num}, () => -1)
// const checkStack = []

// for(let i = 0; i < num; i ++){
//     while(checkStack.length && inputArray[checkStack[checkStack.length - 1]] < inputArray[i]){
//         resultArray[checkStack.pop()] = inputArray[i]
//     }
//     checkStack.push(i)
// }

// console.log(resultArray.join(' '))

/*17299 제출할때는 /dev/stdin로 변경*/

// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const inputArray = input.split(' ').map(Number)
// const inputArray2 = []
// const resultArray = Array.from({length:num}, () => -1)
// const countArray = Array.from({length:1000001}, () => 0)
// const stackArray = []

// for(let i = 0; i < num; i++){
//     countArray[inputArray[i]] += 1 
// }

// for(let i = 0; i < num; i++){
//     inputArray2.push(countArray[inputArray[i]])
// }

// for(let i = 0; i< num; i++){
//     while(stackArray.length && inputArray2[stackArray[stackArray.length - 1]] < inputArray2[i]){
//         resultArray[stackArray.pop()] = inputArray[i]
//     }
//     stackArray.push(i)    
// }

// console.log(resultArray.join(' '))


/*10430 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)
// const result = []
// result.push((input[0] + input[1]) % input[2])
// result.push(((input[0] % input[2]) + (input[1] % input[2])) % input[2])
// result.push((input[0] * input[1]) % input[2])
// result.push(((input[0] % input[2]) * (input[1] % input[2])) % input[2])

// console.log(result.join('\n'))


/*17299 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const inputArray = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

// const findPrimes = (n) => {
//     const prime = new Array(n + 1).fill(true);
//     prime[0] = prime[1] = false;

//     for (let i = 2; i * i <= n; i++) {
//         if (prime[i]) {
//             for (let j = i * i; j <= n; j += i) {
//                 prime[j] = false;
//             }
//         }
//     }

//     return prime.reduce((acc, val, index) => {
//         if (val) acc.push(index);
//         return acc;
//     }, []);
// }

// const prime = findPrimes(10000);


// let gcd = 1
// let lcm = 1 
// let leftValue = inputArray[0]
// let rightValue = inputArray[1]

// for(let i = 0; i < prime.length; i++){
//     if(leftValue == 0 && rightValue == 0){
//         gcd = 0
//         lcm = 0
//         break
//     }
//     if(leftValue % prime[i] == 0 && rightValue % prime[i] == 0){
//         leftValue = leftValue / prime[i]
//         rightValue = rightValue / prime[i]
//         gcd *= prime[i]
//         lcm *= prime[i]
//         i = -1
//     }
// }
// lcm *= leftValue
// lcm *= rightValue

// console.log(gcd + "\n" +lcm)



/*1934 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, ...inputArray] = fs.readFileSync('example.txt').toString().trim().split('\n')
// const resultArray = []

// const calculateGCD = (param1, param2) => {
//     let a, b, c, d
//     let gcd
    
//     if(param2 > param1){
//         a = param2
//         b = param1
//     }   else {
//         a = param1
//         b = param2
//     }

//     while(true){
//         if(a % b != 0){
//             let temp = a % b;
//             a = b
//             b = temp
//         } else {
//             gcd = b
//             break
//         }
//     }

//     c = param1 / gcd
//     d = param2 / gcd
//     resultArray.push(gcd * c * d)
// }

// for(let i = 0; i < num; i++){
//     [value1, value2] = inputArray[i].split(' ').map(Number)
//     calculateGCD(value1, value2)
// }
// console.log(resultArray.join('\n'))

/*1978 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')
// const inputArray = input.split(' ').map(Number)

// let resultCount = 0;
// for(let i = 0; i < num; i++){
//     if(inputArray[i] == 1)
//         continue
//     let check = true
//     for(z = 1; z <= Math.sqrt(inputArray[i]); z++){
//         if(inputArray[i] % z == 0){
//             check = false
//             break
//         }
//     }
//     if (check)
//         resultCount ++
// }
// console.log(resultCount)

/*1929 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

// const primeCheck = (param) => {
//     let result = false
//     let check = true
//     if(param == 1)
//         return result

//     for(let i = 2; i <= Math.sqrt(param); i ++){
//         if(param % i == 0){
//             check = false
//             break
//         }       
//     }
//     if (check)
//         result = true
//     return result
// }

// const numberArray = []
// const resultArray = []

// for(let i = input[0]; i <= input[1]; i++){
//     numberArray.push(i)
// }

// for(let i = 0; i <numberArray.length; i++){
//     if(primeCheck(numberArray[i]))
//         resultArray.push(numberArray[i])
// }

// console.log(resultArray.join('\n'))

/*6588 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const inputArray = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number)
// const primeArray = [-1,-1]
// const primeCheckArray = []
// const resultArray = []

// // 홀수인 소수만 먼저 구해 놓는다.
// for(k = 2; k <= 1000000; k++){
//     let check = true
//     for(l = 2; l <= Math.sqrt(k); l++){
//         if(k % l === 0){
//             check = false
//             break
//         }
//     }
//     if (check) {
//         primeArray.push(k)
//         primeCheckArray.push(k)
//     } else {
//         primeArray.push(-1)
//     }
// }


// const checkGoldbach = (param) => {
//     for(let z = 0; z < primeCheckArray.length; z++){
//         let check = false
//         if(primeArray[param - primeCheckArray[z]] != -1){
//             check = true
//             resultArray.push(`${param} = ${primeCheckArray[z]} + ${primeArray[param - primeCheckArray[z]]}`)
//             break
//         }
//         if(param <= primeCheckArray[z]){
//             if(!check){
//                 resultArray.push("Goldbach's conjecture is wrong.")
//             }
//             break
//         }
//     }
// }

// for(let i = 0; i < inputArray.length - 1; i++){
//     checkGoldbach(inputArray[i])
// }

// console.log(resultArray.join('\n'))

/*10872 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = 1
// for(let i = 1; i <= input; i++){
//     result *= i
// }
// console.log(result)

/*1676 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = BigInt(fs.readFileSync('example.txt').toString().trim())
// let check = BigInt(1)
// for(let i = BigInt(1); i <= input; i++){
//     check *= i
// }
// check = check.toString().split('')

// let result = 0
// for(let i = check.length-1; i >= 0; i--){
//     if(check[i] == 0){
//         result ++
//         continue
//     }
//     break
// }

// console.log(result)

/*2004 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const inputArray = fs.readFileSync('example.txt').toString().trim().split(' ').map(BigInt)

// let resultCount = 0
// const calculateFactorial = (param1, param2) => {
//     let result = BigInt(1)
//     for(let i = BigInt(1); i <= param2; i++){
//         result *= (param1 - param2 + i)
//         result /= i
//     }
//     return result
// }

// let resultValue = calculateFactorial(inputArray[0], inputArray[1])
// while(true){
//     if(resultValue % BigInt(5) == 0 && resultValue % BigInt(2) == 0){
//         resultValue /= BigInt(5)
//         resultCount++
//         continue
//     } 
//     break
// }
// console.log(resultCount)

/*2004 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const inputArray = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)
// inputArray.push(inputArray[0] - inputArray[1])

// const value1 = inputArray[0]
// const value2 = inputArray[1]
// const value3 = inputArray[2]
// const resultArray = []
// let divisionTwoCount = 0;
// let divisionFiveCount = 0;
// for(let k = 2; k <= inputArray[0]; k++){

//     if(k % 2 == 0  && k != 0){
//         let count = 0
//         let checkValue = k
//         while(checkValue % 2 == 0){
//             count ++
//             checkValue /= 2
//         }
//         divisionTwoCount += count
//     }

//     if(k % 5 == 0 && k != 0){
//         let count = 0
//         let checkValue = k
//         while(checkValue % 5 === 0){
//             count ++
//             checkValue /= 5
//         }
//         divisionFiveCount += count
//     }
//     if(k == value1){
//         resultArray.push([divisionTwoCount,divisionFiveCount])
//     }
//     if(k == value2){
//         resultArray.push([divisionTwoCount,divisionFiveCount])
//     }
//     if(k == value3){
//         resultArray.push([divisionTwoCount,divisionFiveCount])
//     }
// }

// const result1 = resultArray[2][0] - resultArray[0][0] - resultArray[1][0]
// const result2 = resultArray[2][1] - resultArray[0][1] - resultArray[1][1]
// if(result1 >= result2){
//     console.log(result2)
// }
// else {
//     console.log(result1)
// }
// console.log(result1, result2)


// let n2 = 10
// let answer2N = 0
// while(n2>=2){
//     console.log(n2)
//     answer2N += parseInt(n2/2);
//     n2 /= 2;
// }
// console.log(answer2N)

/*9613 제출할때는 /dev/stdin로 변경*/
const fs = require('fs')
const [num, ...inputArray] = fs.readFileSync('example.txt').toString().trim().split('\n')
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
