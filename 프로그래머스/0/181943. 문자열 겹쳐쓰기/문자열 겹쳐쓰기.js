function solution(my_string, overwrite_string, s) {
    var answer = '';
    let str1 = my_string.split("");
    let str2 = overwrite_string.split("");
    let num = s
    let num2 = 0;
    
    for(let i = 0; i < str1.length; i++){
        if(i === num && str2[num2]){
            str1[i] = str2[num2]
            num ++
            num2 ++
        }
    }
    answer = str1.join("")
    
    return answer;
}