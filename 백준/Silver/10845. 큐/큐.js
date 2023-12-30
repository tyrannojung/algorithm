const fs = require('fs')
const [num, ...arrayInput] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const result_value = []
const result_text = []

const custom_push = (param) => {
    result_value.push(param)
}

const custom_pop = () => {
    if(!result_value.length){
        result_text.push(-1)
        return
    }
    result_text.push(result_value.shift())
}

for(let i = 0; i < num; i++){
    let value = arrayInput[i].split(' ')
    switch(value[0]){
        case 'push':
            custom_push(parseInt(value[1]))
            break
        case 'pop':
            custom_pop()
            break
        case 'size':
            result_text.push(result_value.length)
            break
        case 'empty':
            result_text.push(result_value.length == 0 ? 1 : 0)
            break
        case 'front':
            result_text.push(result_value.length == 0 ? -1 : result_value[0])
            break
        case 'back':
            result_text.push(result_value.length == 0 ? -1 : result_value[result_value.length - 1])
            break
    }
}

console.log(result_text.join('\n'))