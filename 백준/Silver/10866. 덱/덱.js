const fs = require('fs')
const [num, ...array_data] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const deque_array = []
const result_value = []
const dequeFunction = (param) => {
    let value = 0
    switch(param[0]) {
        case 'push_front':
            deque_array.unshift(parseInt(param[1]))    
            break
        case 'push_back':
            deque_array.push(parseInt(param[1]))
            break
        case 'pop_front':
            if (deque_array.length == 0){
                result_value.push(-1)
                return
            }
            value = deque_array.shift()
            result_value.push(value)
            break
        case 'pop_back':
            if (deque_array.length == 0){
                result_value.push(-1)
                return
            }
            value = deque_array.pop()
            result_value.push(value)
            break
        case 'size':
            result_value.push(deque_array.length)
            break
        case 'empty':
            if(deque_array.length == 0)
                result_value.push(1)
            else
                result_value.push(0 )
            break
        case 'front':
            if(deque_array.length == 0)
                result_value.push(-1)
            else
                result_value.push(deque_array[0])
            break
        case 'back':
            if(deque_array.length == 0)
                result_value.push(-1)
            else {
                result_value.push(deque_array[deque_array.length - 1])
            }
            break
    }
}


for(let i = 0; i < num; i++){
    let value = array_data[i].split(' ')
    dequeFunction(value)
}

console.log(result_value.join('\n'))