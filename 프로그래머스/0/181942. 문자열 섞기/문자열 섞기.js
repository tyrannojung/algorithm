function solution(str1, str2) {
    var answer = '';
    const str1_array = str1.split("");
    const str2_array = str2.split("");
    let k = 0;
    let z = 0;
    
    for(i = 0; i < str1_array.length + str2_array.length; i ++){
        
        if(i % 2 == 0){
            answer += str1_array[k]
            k++
            }
        else {
            answer += str2_array[z]
            z++    
            }
        }
    return answer;
}