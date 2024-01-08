// let fs = require('fs');
// let input = fs.readFileSync('example.txt') // 제출할때는 /dev/stdin로 변경
// .toString().split(' ');
// let sum = parseInt(input[0]) + parseInt(input[1])
// console.log(sum);

// const fs = require('fs');
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// let sum = parseInt(input[0]) + parseInt(input[1])
// console.log(sum)

/* 10950 */
// const fs = require('fs');
// const input = fs.readFileSync('example.txt').toString().split('\n');
// const num = parseInt(input[0]);
// input.shift();

// for(let i = 0; i < num; i++ ){
//     let input_value = input[i].split(' ').map(Number);
//     let sum = input_value[0] + input_value[1];
//     console.log(sum)
// }

/* 10951 */
// const fs = require('fs');
// const input = fs.readFileSync('example.txt').toString().trim().split('\n');

// for(let i = 0; i < input.length; i++ ){
//     let input_value = input[i].split(' ').map(Number);
//     let sum = input_value[0] + input_value[1];
//     console.log(sum)
// }

/* 10952 */
// const fs = require('fs');
// const input = fs.readFileSync('example.txt').toString().trim().split('\n');

// for(let i = 0; i < input.length; i++ ){
//     let input_value = input[i].split(' ').map(Number);
//     if(!input_value[0] || !input_value[1]){
//         continue
//     }
//     let sum = input_value[0] + input_value[1];
//     console.log(sum)
// }


// let sum = parseInt(inputArr[0]) + parseInt(inputArr[1])

// console.log(sum)


/* 10953 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input.shift()
// for(let i = 0; i < input.length; i++) {
//     let split_value = input[i].split(",").map(Number)
//     let sum = split_value[0] + split_value[1]
//     console.log(sum)
// }


/* 11021 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// input.shift()

// for(let i = 0; i < input.length; i++){
//     split_value = input[i].split(' ').map(Number)
//     let sum = split_value[0] + split_value[1] 
//     console.log(`Case #${i + 1}: ${sum}`)
// }

/* 11022 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// input.shift()

// for(let i = 0; i < input.length; i++) {
//     let split_value = input[i].split(' ').map(Number)
//     let value_first = split_value[0]
//     let value_second = split_value[1]
//     let sum = value_first + value_second;
//     console.log(`Case #${i+1}: ${value_first} + ${value_second} = ${sum}`)
// }

/* 11022 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// for(var i = 0; i < input.length; i++){
//     console.log(input[i])
// }

/* 11719 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().split('\n')
// for(let i = 0; i < input.length; i++){
//     console.log(input[i])
// }

/* 11720 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// input.shift()
// const value_array =input[0].split('').map(Number)
// let sum = 0
// for(let i = 0; i < value_array.length; i++){
//     sum += value_array[i]
// } 
// console.log(sum)

/* 11721 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// let chunks = input[0].match(/.{1,10}/g);

// for(let i = 0; i < chunks.length; i++ ){
//     console.log(chunks[i])
// }

/* 2741 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()

// let sum = '';
// for(let i = 1; i <= input; i ++) {
//     sum += i + '\n'
// }

// console.log(sum)

/* 2742 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim();
// let sum = '';

// for(let i = parseInt(input); 0 < i; i--){
//     sum += i + '\n'
// }
// console.log(sum)


/* 2739 제출할때는 /dev/stdin로 변경 */
//  const fs = require('fs')
//  const input = fs.readFileSync('example.txt').toString().trim()

// for(let i = 1; i <= 9; i ++){
//     console.log(`${input} * ${i} = ${input * i}`)
// }

/* 1924 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)
// const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const month_value = input[0]
// const day_value = input[1]

// let sum = day_value
// for(let i = 0; i < month_value - 1; i++){
//     sum += day[i]
// }

// let day_result = sum % 7
// console.log(week[day_result])

/* 8393 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()

// let sum = 0
// for(let i = 1; i <= input; i++){
//     sum += i
// }

// console.log(sum)


/* 8393 제출할때는 /dev/stdin로 변경 */

// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')
// input.shift()
// const new_array = input[0].split(' ').map(Number)
// console.log(Math.min(...new_array), Math.max(...new_array))

/* 2438 제출할때는 /dev/stdin로 변경 */
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()

// let sum = ''
// let result = ''
// for (let i = 0; i < input; i++){
//     sum += `*`
//     result += `${sum}\n`
// }
// console.log(result)

/* 2439 제출할때는 /dev/stdin로 변경 */

// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let sum = ''
// let result = ''
// for(let i = 1; i <= input; i++){
//     let space = ''
//     space = " ".repeat(input - i);
//     sum += '*';
//     result += `${space}${sum}\n`
// }

// console.log(result)

// let input = 5;
// let result = Array.from({ length: input }, (_, i) => ' '.repeat(input - i - 1) + '*'.repeat(i + 1)).join('\n');

// console.log(result);

// let input = 5;
// let result = Array.from({ length: input }, (_, i) => '*'.repeat(i + 1)).join('\n');

// console.log(result);

/*2440 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({ length: input }, (_, i) => '*'.repeat(input - i)).join('\n')
// console.log(result)

/*2441 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_, i) => ' '.repeat(i) + '*'.repeat(input-i)).join('\n');
// console.log(result)

/*2442 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_ , i) => ' '.repeat(input - i -1) + '*'.repeat(2*(i+1)-1)).join('\n')
// console.log(result)

/*2445 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_ , i) => '*'.repeat(i+1) + ' '.repeat((input - i -1)*2) + '*'.repeat(i+1))
// let reverse_result = [...result].reverse()
// result.pop()
// if(!result.join('\n')){
//     console.log(reverse_result.join('\n'))
// }else {
//     console.log(result.join('\n') + '\n' + reverse_result.join('\n'))
// }

/*2522 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_ , i) => ' '.repeat(input - i -1) + '*'.repeat(i+1))
// let reverse_result = [...result].reverse();
// reverse_result.shift()

// console.log(result.join('\n') + '\n' + reverse_result.join('\n'))

/*2446 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_ , i) => ' '.repeat(input - i -1) + '*'.repeat(i * 2 + 1))
// let result_reverse = [...result].reverse()
// result.shift()
// console.log(result_reverse.join('\n'))
// console.log(result.join('\n'))

/*10991 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_,i) => ' '.repeat(input - i - 1) +addSpacesToAsterisks('*'.repeat(i + 1)));
// console.log(result.join('\n'))

// function addSpacesToAsterisks(str) {
//     return str.replace(/\*(?=\*)/g, '* ');
// }

/*10992 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim()
// let result = Array.from({length : input}, (_,i) => ' '.repeat(input - i - 1) + addSpace(i, input));
// console.log(result.join('\n'))

// function addSpace(i, input){
//     if (i == 0)
//         return '*';
//     else if (i + 1 == input)
//         return '*'.repeat(input * 2 -1)
//     else
//         return '*' + ' '.repeat(i * 2 -1) + '*'
// }

/*10828 제출할때는 /dev/stdin로 변경*/

// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')

// const custom_stack = []
// let final_value = '';

// const custom_push = (param) => {
//     custom_stack.push(param)
// }

// const custom_pop = () => {
//     return custom_stack.length === 0 ? -1 : custom_stack.pop()
// }

// const custom_size = () => {
//     return custom_stack.length
// }

// const custom_emptyCheck = () => {
//     return custom_stack.length === 0 ? 1 : 0
// }

// const custom_topNumCheck = () => {
//     return custom_stack.length === 0 ? -1 : custom_stack[custom_stack.length - 1]
// }

// for (let i = 1; i <= input[0]; i ++) {
//     let value = input[i].split(' ')
//     switch (value[0]) {
//         case 'push':
//             custom_push(parseInt(value[1]))
//             break
//         case 'pop':
//             final_value += custom_pop() + '\n'
//             break
//         case 'size':
//             final_value += custom_size() + '\n'
//             break
//         case 'empty':
//             final_value += custom_emptyCheck() + '\n'
//             break
//         case 'top':
//             final_value += custom_topNumCheck() + '\n'
//             break
//     }
// }
// console.log(final_value)

/*9093 제출할때는 /dev/stdin로 변경*/

// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('\n')

// const reverseString = (param) => {
//     let value = param.split('')
//     return value.reverse().join('')
// }
// let final_value = ''
// for(let i = 1; i <= input[0]; i++){
//     let value = input[i].split(' ');
//     for(let z = 0; z < value.length; z++){
//         value[z] = reverseString(value[z])
//     }
//     final_value += value.join(' ') + '\n'
// }
// console.log(final_value)

// var fs = require('fs');
// var [N, ...arr] = fs.readFileSync('example.txt').toString().trim().split('\n');
// console.log(N)
// console.log(arr)

/*9012 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, ...arrayValue] = fs.readFileSync('example.txt').toString().trim().split('\n')

// let final_result = ''
// const checkValue = (param) => {
//     let param_value = param
//     while(true){
//         if(param_value.includes('()')) {
//             param_value = param_value.replace('()', '');
//             continue
//         }
//         else if(param_value == ''){
//             final_result += 'YES' + '\n'
//             return
//         }
//         else {
//             final_result += 'NO' + '\n'
//             return
//         }
//     }
// } 

// for(let i = 0; i < num; i++){
//     checkValue(arrayValue[i])
// }

// console.log(final_result)

/*1406 제출할때는 /dev/stdin로 변경 --> 실패 */
// const fs = require('fs')
// const [text, num, ...arrayValue] = fs.readFileSync('example.txt').toString().trim().split('\n')
// let text_value = ['check', ...text, 'check2']
// let cursor = text_value.length - 2

// const cursor_left = () => {
//     if (cursor == 0) {
//         return
//     }
//     cursor --
// }

// const cursor_right = () => {
//     if (cursor == text_value.length - 2) {
//         return
//     }
//     cursor ++
// }

// const cursor_left_delete = () => {
//     if (cursor == 0){
//         return
//     }
//     text_value.splice(cursor, 1)
//     cursor --
// }

// const cursor_left_plus = (param) => {
//     text_value.splice(cursor + 1, 0, param)
//     cursor ++
// }

// for(let i = 0; i < num; i++){
//     let value = arrayValue[i].split(' ')
//     switch (value[0]) {
//         case 'L':
//             cursor_left()
//             break
//         case 'D':
//             cursor_right()
//             break
//         case 'B':
//             cursor_left_delete()
//             break
//         case 'P':
//             cursor_left_plus(value[1])
//             break
//     }
// }
// text_value.shift()
// text_value.pop()
// console.log(text_value.join(''))

/*1406 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [text,num, ...arrayInput] = fs.readFileSync('example.txt').toString().trim().split('\n')
// const left_stack = [...text]
// const right_stack = []

// const cursor_left = () => {
//     if(left_stack.length == 0)
//         return
//     right_stack.push(left_stack.pop())
// }

// const cursor_right = () => {
//     if(right_stack.length == 0)
//         return
//     left_stack.push(right_stack.pop())
// }

// const cursor_left_delete = () => {
//     if(left_stack.length == 0)
//         return
//     left_stack.pop()
// }

// const cursor_left_plus = (param) => {
//     left_stack.push(param)
// }


// for(let i = 0; i < num; i++) {
//     let value = arrayInput[i].split(' ')
//     switch (value[0]) {
//         case 'L':
//             cursor_left()
//             break
//         case 'D':
//             cursor_right()
//             break
//         case 'B':
//             cursor_left_delete()
//             break
//         case 'P':
//             cursor_left_plus(value[1])
//             break
//     }
// }
// console.log([...left_stack, ...right_stack.reverse()].join(''))

/*10845 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, ...arrayInput] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const result_value = []
// const result_text = []

// const custom_push = (param) => {
//     result_value.push(param)
// }

// const custom_pop = () => {
//     if(!result_value.length){
//         result_text.push(-1)
//         return
//     }
//     result_text.push(result_value.shift())
// }

// for(let i = 0; i < num; i++){
//     let value = arrayInput[i].split(' ')
//     switch(value[0]){
//         case 'push':
//             custom_push(parseInt(value[1]))
//             break
//         case 'pop':
//             custom_pop()
//             break
//         case 'size':
//             result_text.push(result_value.length)
//             break
//         case 'empty':
//             result_text.push(result_value.length == 0 ? 1 : 0)
//             break
//         case 'front':
//             result_text.push(result_value.length == 0 ? -1 : result_value[0])
//             break
//         case 'back':
//             result_text.push(result_value.length == 0 ? -1 : result_value[result_value.length - 1])
//             break
//     }
// }

// console.log(result_text.join('\n'))

/*1158 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, range] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

// const num_array1 = Array.from({length : num}, (_, i) => i + 1)
// const num_array2 = []
// const result_array = []

// let cursor = 0;
// while(true) {
    
//     // pop 1
//     while(true){
//         if(num_array1.length == 0)
//             break
        
//         cursor ++;
//         if (cursor == range){
//             result_array.push(num_array1.shift())
//             cursor = 0;
//         }
//         else 
//             num_array2.push(num_array1.shift())
        
//     }

//     // pop 2
//     while(true){
//         if(num_array2.length == 0)
//             break

//         cursor ++;
//         if (cursor == range){
//             result_array.push(num_array2.shift())
//             cursor = 0;
//         }
//         else 
//             num_array1.push(num_array2.shift())

//     }
//     // pop 2
//     if(result_array.length == num)
//         break
// }

// console.log("<" + result_array.join(', ') + ">")

/*10866 제출할때는 /dev/stdin로 변경*/

// const fs = require('fs')
// const [num, ...array_data] = fs.readFileSync('example.txt').toString().trim().split('\n')
// const deque_array = []
// const result_value = []
// const dequeFunction = (param) => {
//     let value = 0
//     switch(param[0]) {
//         case 'push_front':
//             deque_array.unshift(parseInt(param[1]))    
//             break
//         case 'push_back':
//             deque_array.push(parseInt(param[1]))
//             break
//         case 'pop_front':
//             if (deque_array.length == 0){
//                 result_value.push(-1)
//                 return
//             }
//             value = deque_array.shift()
//             result_value.push(value)
//             break
//         case 'pop_back':
//             if (deque_array.length == 0){
//                 result_value.push(-1)
//                 return
//             }
//             value = deque_array.pop()
//             result_value.push(value)
//             break
//         case 'size':
//             result_value.push(deque_array.length)
//             break
//         case 'empty':
//             if(deque_array.length == 0)
//                 result_value.push(1)
//             else
//                 result_value.push(0 )
//             break
//         case 'front':
//             if(deque_array.length == 0)
//                 result_value.push(-1)
//             else
//                 result_value.push(deque_array[0])
//             break
//         case 'back':
//             if(deque_array.length == 0)
//                 result_value.push(-1)
//             else {
//                 result_value.push(deque_array[deque_array.length - 1])
//             }
//             break
//     }
// }


// for(let i = 0; i < num; i++){
//     let value = array_data[i].split(' ')
//     dequeFunction(value)
// }

// console.log(result_value.join('\n'))


/*17413 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input_array = fs.readFileSync('example.txt').toString().trim().split('')
// const result_array = []

// let value = []
// let check = false
// for(let i = 0; i < input_array.length; i++){
//     //테그 일때, 모아서, 배열에 보내기 []
//     if(input_array[i] == '<'){
//         if(value.length != 0){
//             value = value.reverse()
//             result_array.push(value)
//             value = []
//         }
//         check = true
//     }
//     if(check){
//         value.push(input_array[i])
//         if(input_array[i] == '>'){
//             check = false
//             result_array.push(value)
//             value = []
//         }
//         continue
//     } else{
//         if(input_array[i] == ' '){
//             value = value.reverse()
//             value.push(' ')
//             result_array.push(value)
//             value = []
//             continue
//         }
//         value.push(input_array[i])
//     }
// }

// if(value.length != 0){
//     value = value.reverse()
//     result_array.push(value)
// }

// let value_string = '';
// for(let sub_array of result_array){
//     value_string += sub_array.join('')
// }
// console.log(value_string)

/*10799 제출할때는 /dev/stdin로 변경*/
//시간초과 실패
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('')
// let final_value = 0
// for(let i = 0; i < input.length; i++){
//     // ')'는 넘어감
//     if('(' == input[i]){
//         //레이저인데, 막대가 없는 경우 && 레이저
//         if(input[i + 1] ==')')
//             continue
        
//         let bar_count = 0;
//         let lazor_count = 0;
        
//         // 막대일때,
//         for(let z = i; z < input.length; z++){
//             // 레이저 찾기
//             if(input[z] == ')'){
//                 if(input[z - 1] == '('){
//                     lazor_count += 1
//                     bar_count--
//                     continue
//                 }
//             }
                
//             if(input[z] == '('){
//                 bar_count++
//             }   
//             else {
//                 bar_count--
//             }
        
//             if(bar_count == 0){
//                 final_value += lazor_count + 1
//                 break
//             } 
//         }
//     }
// }

// console.log(final_value)

// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split('')
// console.log(input)

// let stick_stack = []
// let totalLaserCount = 0
// let currentLaserPosition = 0
// let tree_count = 0

// for(let i = 0; i < input.length; i++){
//     if('(' == input[i]){
//         if(')' == input[i + 1]){
//             // laser 일때,
//             totalLaserCount += 1
//             currentLaserPosition += 1
            
//             continue
//         }
//         // 막대일때.    
//         stick_stack.push('|')
//     } else {
//         // laser지만, 막대가 없을때. 초기화
//         if(stick_stack.length == 0){
//             console.log('아무것도 없다.')
//             totalLaserCount -= 1
//             currentLaserPosition -= 1
//             continue
//         } 

//         if('(' == input[i - 1]){
//             continue
//         }

//         // 막대기가 닫을때,
//         stick_stack.pop()

//         if(currentLaserPosition == 0){
//             tree_count += totalLaserCount + 1
//             console.log(totalLaserCount, currentLaserPosition, tree_count)
//             if(stick_stack.length == 0){
//                 totalLaserCount = 0
//                 continue
//             }
//         }
//         //여기 몇번?
//         tree_count += currentLaserPosition + 1
//         currentLaserPosition = 0
//         console.log(totalLaserCount, currentLaserPosition, tree_count)
//     }

// }
// console.log(tree_count)



// 초고속 풀이
// const fs = require("fs");
// const s = fs.readFileSync("example.txt").toString().trim()
// /*
// '('=> 쇠 막대기 시작
// ')'=> 쇠 막대기 끝
// "()"=> 레이저저어어엉

// */
// // 레이저를 모두 변경해준다.
// const replaced=s.replaceAll("()", "L").split("");
// //'('을 만나면 넣어주고, ')'만나면 하나씩 빼준다.
// const steal=[]
// let total=0;
// replaced.forEach(i=>{
//     if(i==="(")steal.push(i);
//     if (i===')'){
//         steal.pop();
//         total++
//     }
//     if(i==="L"){
//         total+=steal.length;
//     }  
//     console.log( steal)  
//     console.log( total)  
// })
 

/*17298 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, arrayInput] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const checkValue = arrayInput.split(' ').map(Number)
// const checkArray = [checkValue[checkValue.length -1]]
// const resultValue = [-1]

// for(let i = num - 2; 0 <= i; i--){
//     let checkValueChoince = checkValue[i]
//     let newCheckArray = [...checkArray].reverse()
//     checkArray.push(checkValueChoince)
//     let check = false
//     for(z = 0; z < newCheckArray.length; z++){
//         if (checkValueChoince < newCheckArray[z]){
//             resultValue.push(newCheckArray[z])
//             check = true
//             break
//         }
//     }
//     if(!check){
//         resultValue.push(-1)
//     }

// } 
// console.log(resultValue.reverse().join(' '))

/*17298 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')
// console.log(num, input)
// const inputArray = input.split(' ').map(Number)
// const resultArray = []

// let z = 0;
// let rightMax = -1
// while(true){
    
//     let value = inputArray.pop()
//     if(resultArray.length == num -1){
//         resultArray.push(-1)
//         break
//     }
//     console.log("value === ",value)
//     console.log("z=====", inputArray[z])

//     if(inputArray[z] < value){
//         rightMax = value
//     }
    
//     inputArray.unshift(value)
//     z++
    
//     console.log(inputArray)
//     if(z == inputArray.length - 1){
//         inputArray.pop()
//         resultArray.push(rightMax)
//         z = 0
//         rightMax = -1
//     }
// }
// console.log("resultArray===",resultArray)

/*17298 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const inputArray = input.split(' ').map(Number)
// const resultArray = Array.from({length:num}, () => -1)
// const checkStack = []

// for(let i = 0; i < num; i ++){
//     while(checkStack.length && inputArray[checkStack[checkStack.length - 1]] < inputArray[i]){
//         resultArray[checkStack.pop()] = inputArray[i]
//     }
//     checkStack.push(i)
// }

// console.log(resultArray.join(' '))

/*17299 제출할때는 /dev/stdin로 변경*/

// const fs = require('fs')
// const [num, input] = fs.readFileSync('example.txt').toString().trim().split('\n')

// const inputArray = input.split(' ').map(Number)
// const inputArray2 = []
// const resultArray = Array.from({length:num}, () => -1)
// const countArray = Array.from({length:1000001}, () => 0)
// const stackArray = []

// for(let i = 0; i < num; i++){
//     countArray[inputArray[i]] += 1 
// }

// for(let i = 0; i < num; i++){
//     inputArray2.push(countArray[inputArray[i]])
// }

// for(let i = 0; i< num; i++){
//     while(stackArray.length && inputArray2[stackArray[stackArray.length - 1]] < inputArray2[i]){
//         resultArray[stackArray.pop()] = inputArray[i]
//     }
//     stackArray.push(i)    
// }

// console.log(resultArray.join(' '))


/*10430 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)
// const result = []
// result.push((input[0] + input[1]) % input[2])
// result.push(((input[0] % input[2]) + (input[1] % input[2])) % input[2])
// result.push((input[0] * input[1]) % input[2])
// result.push(((input[0] % input[2]) * (input[1] % input[2])) % input[2])

// console.log(result.join('\n'))


/*17299 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const inputArray = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

// const findPrimes = (n) => {
//     const prime = new Array(n + 1).fill(true);
//     prime[0] = prime[1] = false;

//     for (let i = 2; i * i <= n; i++) {
//         if (prime[i]) {
//             for (let j = i * i; j <= n; j += i) {
//                 prime[j] = false;
//             }
//         }
//     }

//     return prime.reduce((acc, val, index) => {
//         if (val) acc.push(index);
//         return acc;
//     }, []);
// }

// const prime = findPrimes(10000);


// let gcd = 1
// let lcm = 1 
// let leftValue = inputArray[0]
// let rightValue = inputArray[1]

// for(let i = 0; i < prime.length; i++){
//     if(leftValue == 0 && rightValue == 0){
//         gcd = 0
//         lcm = 0
//         break
//     }
//     if(leftValue % prime[i] == 0 && rightValue % prime[i] == 0){
//         leftValue = leftValue / prime[i]
//         rightValue = rightValue / prime[i]
//         gcd *= prime[i]
//         lcm *= prime[i]
//         i = -1
//     }
// }
// lcm *= leftValue
// lcm *= rightValue

// console.log(gcd + "\n" +lcm)



/*1934 제출할때는 /dev/stdin로 변경*/
// const fs = require('fs')
// const [num, ...inputArray] = fs.readFileSync('example.txt').toString().trim().split('\n')
// const resultArray = []

// const calculateGCD = (param1, param2) => {
//     let a, b, c, d
//     let gcd
    
//     if(param2 > param1){
//         a = param2
//         b = param1
//     }   else {
//         a = param1
//         b = param2
//     }

//     while(true){
//         if(a % b != 0){
//             let temp = a % b;
//             a = b
//             b = temp
//         } else {
//             gcd = b
//             break
//         }
//     }

//     c = param1 / gcd
//     d = param2 / gcd
//     resultArray.push(gcd * c * d)
// }

// for(let i = 0; i < num; i++){
//     [value1, value2] = inputArray[i].split(' ').map(Number)
//     calculateGCD(value1, value2)
// }
// console.log(resultArray.join('\n'))

/*1978 제출할때는 /dev/stdin로 변경*/