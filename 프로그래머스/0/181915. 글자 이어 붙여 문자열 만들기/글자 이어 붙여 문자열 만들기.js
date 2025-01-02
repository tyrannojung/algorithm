function solution(my_string, index_list) {
    var answer = '';
    let string_array = my_string.split("")
    for(let i = 0; i < index_list.length; i++){
        answer += string_array[index_list[i]]    
    }
    return answer;
}