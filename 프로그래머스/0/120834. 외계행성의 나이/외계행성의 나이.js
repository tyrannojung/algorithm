function solution(age) {
    var answer = '';
    const string_age = age + ""
    const age_array = string_age.split("");
    const a_asciiCode = 97;
    
    for(let i = 0; i < age_array.length; i++){
       let num = parseInt(age_array[i]) + a_asciiCode
       answer += String.fromCharCode(num)
    }

    return answer;
}