const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const month_value = input[0]
const day_value = input[1]

let sum = day_value
for(let i = 0; i < month_value - 1; i++){
    sum += day[i]
}

let day_result = sum % 7
console.log(week[day_result])