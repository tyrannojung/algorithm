function solution(my_string, n) {
    var answer = '';
    let my_string_array = my_string.split("")
    
    for(let i = 0; i < my_string_array.length; i++){
        for(let z = 0; z < n; z++){
            answer += my_string[i]
        }
    }
    
    return answer;
}