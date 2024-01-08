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
