const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const custom_stack = []
let final_value = '';

const custom_push = (param) => {
    custom_stack.push(param)
}

const custom_pop = () => {
    return custom_stack.length === 0 ? -1 : custom_stack.pop()
}

const custom_size = () => {
    return custom_stack.length
}

const custom_emptyCheck = () => {
    return custom_stack.length === 0 ? 1 : 0
}

const custom_topNumCheck = () => {
    return custom_stack.length === 0 ? -1 : custom_stack[custom_stack.length - 1]
}

for (let i = 1; i <= input[0]; i ++) {
    let value = input[i].split(' ')
    switch (value[0]) {
        case 'push':
            custom_push(parseInt(value[1]))
            break
        case 'pop':
            final_value += custom_pop() + '\n'
            break
        case 'size':
            final_value += custom_size() + '\n'
            break
        case 'empty':
            final_value += custom_emptyCheck() + '\n'
            break
        case 'top':
            final_value += custom_topNumCheck() + '\n'
            break
    }
}
console.log(final_value)