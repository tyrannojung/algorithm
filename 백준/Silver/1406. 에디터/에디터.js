const fs = require('fs')
const [text,num, ...arrayInput] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const left_stack = [...text]
const right_stack = []

const cursor_left = () => {
    if(left_stack.length == 0)
        return
    right_stack.push(left_stack.pop())
}

const cursor_right = () => {
    if(right_stack.length == 0)
        return
    left_stack.push(right_stack.pop())
}

const cursor_left_delete = () => {
    if(left_stack.length == 0)
        return
    left_stack.pop()
}

const cursor_left_plus = (param) => {
    left_stack.push(param)
}


for(let i = 0; i < num; i++) {
    let value = arrayInput[i].split(' ')
    switch (value[0]) {
        case 'L':
            cursor_left()
            break
        case 'D':
            cursor_right()
            break
        case 'B':
            cursor_left_delete()
            break
        case 'P':
            cursor_left_plus(value[1])
            break
    }
}
console.log(left_stack.join('') +right_stack.reverse().join(''))