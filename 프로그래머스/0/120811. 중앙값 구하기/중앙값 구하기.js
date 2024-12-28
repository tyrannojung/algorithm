
function solution(array) {
    var answer = 0;
    array.sort((a, b) => a - b);
    let middle_num = 0
    
    middle_num = Math.floor((array.length)/2);
    answer = array[middle_num]
    
    return answer;
}