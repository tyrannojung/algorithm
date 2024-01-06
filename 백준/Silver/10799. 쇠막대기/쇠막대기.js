const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('')
let stick_stack = []
let totalLaserCount = []
let tree_count = 0

for(let i = 0; i < input.length; i++){
    if(input[i] == '(') {
        if(input[i + 1] == ')'){
            if(stick_stack.length == 0){
                continue
            }
            for(z = 0; z < totalLaserCount.length; z++){
                totalLaserCount[z] = totalLaserCount[z] + 1
            }
            continue
        }
        stick_stack.push('|')
        totalLaserCount.push(0)
    } else {
        if(input[i - 1] == '(') {
            continue
        }
        tree_count += totalLaserCount[stick_stack.length - 1] + 1
        stick_stack.pop()
        totalLaserCount.pop()
    }
}   
console.log(tree_count)