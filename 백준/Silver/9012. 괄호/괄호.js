const fs = require('fs')
const [num, ...arrayValue] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let final_result = ''
const checkValue = (param) => {
    let param_value = param
    while(true){
        if(param_value.includes('()')) {
            param_value = param_value.replace('()', '');
            continue
        }
        else if(param_value == ''){
            final_result += 'YES' + '\n'
            return
        }
        else {
            final_result += 'NO' + '\n'
            return
        }
    }
} 

for(let i = 0; i < num; i++){
    checkValue(arrayValue[i])
}

console.log(final_result)