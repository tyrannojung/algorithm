const fs = require('fs')
const input_array = fs.readFileSync('/dev/stdin').toString().trim().split('')
const result_array = []

let value = []
let check = false
for(let i = 0; i < input_array.length; i++){
    //테그 일때, 모아서, 배열에 보내기 []
    if(input_array[i] == '<'){
        if(value.length != 0){
            value = value.reverse()
            result_array.push(value)
            value = []
        }
        check = true
    }
    if(check){
        value.push(input_array[i])
        if(input_array[i] == '>'){
            check = false
            result_array.push(value)
            value = []
        }
        continue
    } else{
        if(input_array[i] == ' '){
            value = value.reverse()
            value.push(' ')
            result_array.push(value)
            value = []
            continue
        }
        value.push(input_array[i])
    }
}

if(value.length != 0){
    value = value.reverse()
    result_array.push(value)
}

let value_string = '';
for(let sub_array of result_array){
    value_string += sub_array.join('')
}
console.log(value_string)