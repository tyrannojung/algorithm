function solution(my_string, letter) {
    var answer = '';
    let my_string_array = my_string.split("")
    
    for(let i = 0; i < my_string_array.length; i++){
        if(my_string_array[i] !== letter)
            answer += my_string_array[i]
    }
    
    
    return answer;
}