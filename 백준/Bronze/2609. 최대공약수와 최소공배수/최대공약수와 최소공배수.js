const fs = require('fs')
const inputArray = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const findPrimes = (n) => {
    const prime = new Array(n + 1).fill(true);
    prime[0] = prime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }

    return prime.reduce((acc, val, index) => {
        if (val) acc.push(index);
        return acc;
    }, []);
}

const prime = findPrimes(10000);


let gcd = 1
let lcm = 1 
let leftValue = inputArray[0]
let rightValue = inputArray[1]

for(let i = 0; i < prime.length; i++){
     if(leftValue == 0 && rightValue == 0){
        gcd = 0
        lcm = 0
        break
    }
    if(leftValue % prime[i] == 0 && rightValue % prime[i] == 0){
        leftValue = leftValue / prime[i]
        rightValue = rightValue / prime[i]
        gcd *= prime[i]
        lcm *= prime[i]
        i = -1
    }
}
lcm *= leftValue
lcm *= rightValue

console.log(gcd + "\n" +lcm)