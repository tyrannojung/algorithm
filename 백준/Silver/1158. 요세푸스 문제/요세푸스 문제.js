const fs = require('fs')
const [num, range] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const num_array1 = Array.from({length : num}, (_, i) => i + 1)
const num_array2 = []
const result_array = []

let cursor = 0;
while(true) {
    
    while(true){
        if(num_array1.length == 0)
            break
        
        cursor ++;
        if (cursor == range){
            result_array.push(num_array1.shift())
            cursor = 0;
        }
        else 
            num_array2.push(num_array1.shift())
        
    }
    while(true){
        if(num_array2.length == 0)
            break

        cursor ++;
        if (cursor == range){
            result_array.push(num_array2.shift())
            cursor = 0;
        }
        else 
            num_array1.push(num_array2.shift())

    }
    // pop 2
    if(result_array.length == num)
        break
}

console.log("<" + result_array.join(', ') + ">")